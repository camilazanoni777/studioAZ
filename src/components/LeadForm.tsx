"use client";

import { type FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const interest = String(formData.get("interest") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const whatsappMessage = [
      "Ola, gostaria de solicitar atendimento com o Studio Andrea Zanoni.",
      name ? `Nome: ${name}` : "",
      email ? `E-mail: ${email}` : "",
      phone ? `WhatsApp: ${phone}` : "",
      interest ? `Tipo de projeto: ${interest}` : "",
      message ? `Mensagem: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

    setSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="grid gap-4" aria-label="Formulario de captacao de leads" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-charcoal">
          Nome
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="border border-line bg-surface px-4 py-3 text-base text-charcoal"
            placeholder="Seu nome"
          />
        </label>
        <label className="grid gap-2 text-sm text-charcoal">
          E-mail
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="border border-line bg-surface px-4 py-3 text-base text-charcoal"
            placeholder="seu@email.com"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-charcoal">
          WhatsApp
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="border border-line bg-surface px-4 py-3 text-base text-charcoal"
            placeholder="(00) 00000-0000"
          />
        </label>
        <label className="grid gap-2 text-sm text-charcoal">
          Tipo de projeto
          <select name="interest" className="border border-line bg-surface px-4 py-3 text-base text-charcoal">
            <option>Consultoria</option>
            <option>Interiores</option>
            <option>Reforma</option>
            <option>Arquitetura</option>
            <option>Outro</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm text-charcoal">
        Como podemos ajudar?
        <textarea
          name="message"
          rows={4}
          className="resize-none border border-line bg-surface px-4 py-3 text-base text-charcoal"
          placeholder="Conte brevemente sobre seu espaco, momento e objetivo."
        />
      </label>
      <button
        type="submit"
        className="mt-2 bg-moss px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-charcoal focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      >
        Enviar solicitação
      </button>
      <p className="text-xs leading-6 text-muted">
        Ao enviar, abriremos uma conversa no WhatsApp com sua mensagem preenchida.
      </p>
      <p className="min-h-5 text-xs font-medium text-moss" aria-live="polite">
        {submitted ? "Mensagem preparada no WhatsApp. Conclua o envio por la." : ""}
      </p>
    </form>
  );
}
