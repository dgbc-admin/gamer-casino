const steps = [
  {
    number: "01",
    title: "Crea tu cuenta",
    description: "Regístrate en WellPlay y crea tu perfil competitivo.",
  },
  {
    number: "02",
    title: "Elige un torneo",
    description: "Encuentra competiciones de tus juegos favoritos.",
  },
  {
    number: "03",
    title: "Compite",
    description: "Enfréntate a otros jugadores y avanza en el torneo.",
  },
  {
    number: "04",
    title: "Gana",
    description: "Sube en el ranking y consigue premios.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-violet-500">
            WellPlay
          </p>

          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            ¿Cómo funciona?
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <span className="text-4xl font-black text-violet-500/30">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
