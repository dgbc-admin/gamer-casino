import TournamentCard from "../ui/TournamentCard";

const tournaments = [
  {
    game: "FC 27",
    title: "WellPlay Opening Cup",
    platform: "PlayStation 5",
    players: 48,
    maxPlayers: 64,
    prize: "500 €",
    date: "12 NOV",
  },
  {
    game: "COD",
    title: "Warzone Battle Night",
    platform: "PlayStation 5",
    players: 22,
    maxPlayers: 32,
    prize: "300 €",
    date: "18 NOV",
  },
  {
    game: "TEKKEN 8",
    title: "King of the Arena",
    platform: "PlayStation 5",
    players: 14,
    maxPlayers: 32,
    prize: "250 €",
    date: "25 NOV",
  },
];

export default function Tournaments() {
  return (
    <section
      id="tournaments"
      className="border-t border-zinc-900 bg-zinc-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-violet-500">
              Competiciones
            </p>

            <h2 className="text-3xl font-black text-white md:text-4xl">
              Torneos activos
            </h2>

            <p className="mt-3 max-w-xl text-zinc-400">
              Encuentra tu próximo torneo y demuestra tus habilidades.
            </p>
          </div>

          <button className="text-sm font-semibold text-violet-400 transition hover:text-violet-300">
            Ver todos →
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tournaments.map((tournament) => (
            <TournamentCard key={tournament.title} {...tournament} />
          ))}
        </div>
      </div>
    </section>
  );
}
