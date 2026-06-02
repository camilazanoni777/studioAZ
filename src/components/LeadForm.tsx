export function LeadForm() {
  return (
    <form className="grid gap-4" aria-label="Formulario de captacao de leads">
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
        A equipe entrara em contato para entender sua necessidade e orientar o melhor proximo passo.
      </p>
    </form>
  );
}
