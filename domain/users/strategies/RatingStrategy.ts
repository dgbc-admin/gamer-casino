import { User } from "../User";

export interface RatingStrategy {
  calculate(user: User): number;
}
