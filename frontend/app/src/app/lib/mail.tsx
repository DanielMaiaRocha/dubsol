import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { tyTamplate } from "./templates/thankyou";

export async function sendEmail({
  to,
  name,
  subject,
  body,
}: {
  to: string;
  name: string;
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}

export function compileThankYouTamplate(name: string) {

  const tamplate = handlebars.compile(tyTamplate)
  const htmlBody = tamplate({
    name: name
  })
  return htmlBody
}
