interface TournamentCardProps {
  game: string;
  title: string;
  platform: string;
  players: number;
  maxPlayers: number;
  prize: string;
  date: string;
}

export default function TournamentCard({
  game,
  title,
  platform,
  players,
  maxPlayers,
  prize,
  date,
}: TournamentCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-1 hover:border-violet-500/50">
      <div className="flex h-44 items-center justify-center bg-gradient-to-br from-violet-950 to-zinc-950">
        <span className="text-3xl font-black text-white">{game}</span>
      </div>

      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-md bg-violet-500/10 px-2.5 py-1 text-xs font-semibold text-violet-400">
            {platform}
          </span>

          <span className="text-xs text-zinc-500">{date}</span>
        </div>

        <h3 className="text-xl font-bold text-white">{title}</h3>

        <div className="mt-5">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-zinc-400">Jugadores</span>

            <span className="font-medium text-white">
              {players}/{maxPlayers}
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-violet-600"
              style={{
                width: `${Math.min((players / maxPlayers) * 100, 100)}%`,
              }}
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-4">
          <div>
            <p className="text-xs text-zinc-500">Premio</p>
            <p className="font-bold text-emerald-400">{prize}</p>
          </div>

          <button className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-black transition hover:bg-zinc-200">
            Ver torneo
          </button>
        </div>
      </div>
    </article>
  );
}
