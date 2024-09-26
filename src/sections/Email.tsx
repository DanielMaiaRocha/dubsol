"use client"
import { useState } from "react";

export const Email = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const send = async () => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email enviado com sucesso");
      } else {
        console.error("Erro ao enviar o email");
      }
    } catch (error) {
      console.error("Erro ao enviar o email:", error);
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
      <div className="container">
        <div className="section-title-word-config">
          <h2 className="section-title">Send an Email</h2>
          <p className="section-desc mt-5">
            In a couple of hours, your e-mail will be responded, and you can
            speak with our team and schedule a meeting with us!
          </p>
        </div>
        <div>
          <form
            id="contact-form"
            className="email-form section-title-word-config mt-6"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              send();
            }}
          >
            <label className="text-[20px] tracking-tight text-[#010D3E]">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Quentin Tarantino"
              required
              className="border rounded-md h-10 p-1"
              value={formData.name}
              onChange={handleChange}
            />

            <label className="mt-3 text-[20px] tracking-tight text-[#010D3E]">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              required
              className="border rounded-md h-10 p-1"
              value={formData.email}
              onChange={handleChange}
            />
            <label className="mt-3 text-[20px] tracking-tight text-[#010D3E]">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Make a quick resume of what you are looking for."
              required
              className="resize-none h-28 border rounded-md p-1"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary mt-6">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
