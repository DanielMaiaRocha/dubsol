"use client"
import { useState } from "react";

export const Email = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const send = async () => {
    setIsLoading(true);
    setSubmitStatus(null);
    
    try {
      // Validação básica
      if (!formData.email.includes('@')) {
        throw new Error("Por favor, insira um email válido");
      }

      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Email enviado com sucesso!"
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.message || "Erro ao enviar o email");
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : "Erro de conexão"
      });
      console.error("Erro:", error);
    } finally {
      setIsLoading(false);
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
        
        {/* Mensagem de status */}
        {submitStatus && (
          <div className={`mb-4 p-4 rounded-md ${
            submitStatus.success 
              ? "bg-green-100 text-green-800" 
              : "bg-red-100 text-red-800"
          }`}>
            {submitStatus.message}
          </div>
        )}

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
              className="border rounded-md h-10 p-1 w-full"
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
              className="border rounded-md h-10 p-1 w-full"
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
              className="resize-none h-28 border rounded-md p-1 w-full"
              value={formData.message}
              onChange={handleChange}
            />

            <button 
              type="submit" 
              className="btn btn-primary mt-6"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};