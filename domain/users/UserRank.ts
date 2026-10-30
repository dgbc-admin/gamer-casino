export enum UserRank {
  BRONZE = "Bronze",
  SILVER = "Silver",
  GOLD = "Gold",
  PLATINUM = "Platinum",
  DIAMOND = "Diamond",
  ELITE = "Elite",
}

export function getRankFromRating(rating: number): UserRank {
  if (rating >= 2200) return UserRank.ELITE;
  if (rating >= 2000) return UserRank.DIAMOND;
  if (rating >= 1800) return UserRank.PLATINUM;
  if (rating >= 1600) return UserRank.GOLD;
  if (rating >= 1400) return UserRank.SILVER;

  return UserRank.BRONZE;
}
