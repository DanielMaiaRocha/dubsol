import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import type { NextApiRequest, NextApiResponse } from 'next';
import busboy from "busboy";
import fs from "fs";
import path from "path";
import { tyTamplate } from "@/app/lib/templates/thankyou"; // Thank You template

// Simple email format validation using regex
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Dynamic template handling
export function compileTemplate(type: string, data: any) {
  let template;
  
  // Select the correct template based on type
  switch (type) {
    case "thankyou":
      template = handlebars.compile(tyTamplate);
      break;
    default:
      throw new Error("Invalid template type");
  }
  
  return template(data);
}

export async function sendEmail({
  to,
  subject,
  body,
  attachments,
}: {
  to: string;
  subject: string;
  body: string;
  attachments?: { filename: string; path: string }[]; // Optional attachments
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  // Check if email is valid using the simple regex function
  if (!validateEmail(to)) {
    throw new Error("Invalid email format");
  }

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    // Verifying transport only once globally is ideal in production
    const testResult = await transport.verify();
    console.log("Transport verified:", testResult);
  } catch (error) {
    console.error("Transport verification failed:", error);
    throw error;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
      attachments, // Add attachments if any
    });

    // Logging sent emails
    console.log(`Email sent successfully to ${to}:`, sendResult);
  } catch (error) {
    // Log errors
    console.error(`Failed to send email to ${to}:`, error);
    throw error;
  }
}

// Busboy configuration
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('API Route Hit');

  if (req.method === 'POST') {
    const bb = busboy({ headers: req.headers });

    let formData: any = {
      name: "",
      email: "",
      message: "",
      type: "",
      attachments: [] as { filename: string; path: string }[],
    };

    bb.on('file', (name, file, info) => {
      const { filename } = info;

      // Create a temporary file path
      const saveTo = path.join(process.cwd(), 'tmp', filename);
      file.pipe(fs.createWriteStream(saveTo));

      file.on('end', () => {
        formData.attachments.push({ filename, path: saveTo });
      });
    });

    bb.on('field', (name, val) => {
      formData[name] = val;
    });

    bb.on('finish', async () => {
      const { name, email, message, type } = formData;

      try {
        const body = compileTemplate(type, { name }); // Use dynamic template based on type

        await sendEmail({
          to: email,
          subject: "Test Email",
          body: body,
          attachments: formData.attachments, // Pass any attachments from request
        });

        // Clean up temporary files
        formData.attachments.forEach((file: { path: fs.PathLike; }) => fs.unlinkSync(file.path));

        res.status(200).json({ message: 'Email sent successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to send email' });
      }
    });

    req.pipe(bb);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
