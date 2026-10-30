import Link from "next/link";
import { users } from "@/data/users";

export default function Ranking() {
  const topPlayers = [...users]
    .sort((a, b) => b.stats.rating - a.stats.rating)
    .slice(0, 5);

  return (
    <section
      id="ranking"
      className="border-t border-zinc-900 bg-zinc-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-violet-500">
              Leaderboard
            </p>

            <h2 className="text-3xl font-black text-white md:text-4xl">
              Ranking WellPlay
            </h2>

            <p className="mt-3 text-zinc-400">
              Los mejores jugadores según su WellPlay Rating.
            </p>
          </div>

          <Link
            href="/ranking"
            className="text-sm font-semibold text-violet-400 transition hover:text-violet-300"
          >
            Ver ranking completo →
          </Link>
        </div>

        {/* Ranking */}
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
          {/* Table header */}
          <div className="hidden grid-cols-[80px_1fr_140px_120px_120px] border-b border-zinc-800 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500 md:grid">
            <span>Pos.</span>
            <span>Jugador</span>
            <span>Rango</span>
            <span>Victorias</span>
            <span className="text-right">WPR</span>
          </div>

          {/* Players */}
          {topPlayers.map((user, index) => (
            <div
              key={user.id}
              className="grid grid-cols-[50px_1fr_auto] items-center gap-4 border-b border-zinc-800 px-5 py-5 transition last:border-none hover:bg-zinc-800/50 md:grid-cols-[80px_1fr_140px_120px_120px] md:px-6"
            >
              {/* Position */}
              <div className="text-lg font-black">
                {index === 0 && <span className="text-yellow-400">#1</span>}

                {index === 1 && <span className="text-zinc-300">#2</span>}

                {index === 2 && <span className="text-orange-400">#3</span>}

                {index > 2 && (
                  <span className="text-zinc-500">#{index + 1}</span>
                )}
              </div>

              {/* Player */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-600 font-bold text-white">
                  {user.username.charAt(0).toUpperCase()}
                </div>

                <div>
                  <p className="font-bold text-white">{user.username}</p>

                  <p className="text-sm text-zinc-500">{user.country}</p>
                </div>
              </div>

              {/* Rank */}
              <div className="hidden md:block">
                <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">
                  {user.rank}
                </span>
              </div>

              {/* Wins */}
              <div className="hidden md:block">
                <p className="font-semibold text-white">{user.stats.wins}</p>

                <p className="text-xs text-zinc-500">
                  {user.winRate.toFixed(0)}% WR
                </p>
              </div>

              {/* Rating */}
              <div className="text-right">
                <p className="text-lg font-black text-white">
                  {user.stats.rating}
                </p>

                <p className="text-xs font-semibold text-violet-400">WPR</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-right text-xs text-zinc-600">
          WPR · WellPlay Rating
        </p>
      </div>
    </section>
  );
}
