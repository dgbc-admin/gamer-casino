import { getRankFromRating, UserRank } from "./UserRank";

export interface UserStats {
  tournamentsPlayed: number;
  matchesPlayed: number;
  wins: number;
  losses: number;
  points: number;
  rating: number;
}

export class User {
  constructor(
    public readonly id: string,
    public username: string,
    public email: string,
    public country: string,
    public favoriteGames: string[],
    public platform: string,
    public stats: UserStats,
    public readonly joinedAt: Date,
  ) {}

  get rank(): UserRank {
    return getRankFromRating(this.stats.rating);
  }

  get winRate(): number {
    if (this.stats.matchesPlayed === 0) {
      return 0;
    }

    return (this.stats.wins / this.stats.matchesPlayed) * 100;
  }

  addWin(): void {
    this.stats.wins++;
    this.stats.matchesPlayed++;
  }

  addLoss(): void {
    this.stats.losses++;
    this.stats.matchesPlayed++;
  }

  addTournament(): void {
    this.stats.tournamentsPlayed++;
  }
}
