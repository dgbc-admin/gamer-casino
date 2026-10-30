import { User } from "../User";
import { RatingStrategy } from "./RatingStrategy";

export class CompetitiveRatingStrategy implements RatingStrategy {
  calculate(user: User): number {
    const baseRating = 1000;

    const winPoints = user.stats.wins * 30;
    const lossPenalty = user.stats.losses * 10;
    const tournamentPoints = user.stats.tournamentsPlayed * 20;

    return Math.max(0, baseRating + winPoints + tournamentPoints - lossPenalty);
  }
}
