export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-black text-white">
            WELL<span className="text-violet-500">PLAY</span>
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            La competición empieza aquí.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-zinc-500">
          <a href="#" className="transition hover:text-white">
            Términos
          </a>

          <a href="#" className="transition hover:text-white">
            Privacidad
          </a>

          <a href="#" className="transition hover:text-white">
            Contacto
          </a>
        </div>

        {/* <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} WellPlay
        </p> */}
        <footer>© 2026 WellPlay Gaming</footer>
      </div>
    </footer>
  );
}
