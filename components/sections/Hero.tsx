export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="mx-auto flex min-h-[650px] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
          La competición empieza aquí
        </div>

        <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
          COMPITE. JUEGA.
          <span className="block text-violet-500">GANA.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Participa en torneos, compite contra otros jugadores y demuestra quién
          domina el juego.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#tournaments"
            className="rounded-xl bg-violet-600 px-7 py-3.5 font-semibold text-white transition hover:bg-violet-700"
          >
            Explorar torneos
          </a>

          <a
            href="#how-it-works"
            className="rounded-xl border border-zinc-700 bg-zinc-900 px-7 py-3.5 font-semibold text-white transition hover:bg-zinc-800"
          >
            Cómo funciona
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-zinc-800 pt-8 sm:gap-16">
          <div>
            <p className="text-2xl font-bold text-white">+500</p>
            <p className="mt-1 text-sm text-zinc-500">Jugadores</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-white">24</p>
            <p className="mt-1 text-sm text-zinc-500">Torneos</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-white">€5K</p>
            <p className="mt-1 text-sm text-zinc-500">En premios</p>
          </div>
        </div>
      </div>
    </section>
  );
}
