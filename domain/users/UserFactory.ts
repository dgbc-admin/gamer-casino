import { User } from "./User";

interface CreateUserData {
  username: string;
  email: string;
  country: string;
  favoriteGames?: string[];
  platform?: string;
}

export class UserFactory {
  static create(data: CreateUserData): User {
    return new User(
      crypto.randomUUID(),
      data.username,
      data.email,
      data.country,
      data.favoriteGames ?? [],
      data.platform ?? "PlayStation 5",
      {
        tournamentsPlayed: 0,
        matchesPlayed: 0,
        wins: 0,
        losses: 0,
        points: 0,
        rating: 1000,
      },
      new Date(),
    );
  }
}
