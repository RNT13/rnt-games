export function getCategoriesFromGames(games: GameType[]): CategoryType[] {
  const categoryMap = new Map<string, CategoryType>()

  games.forEach(game => {
    const categoryName = game.details.category

    if (!categoryMap.has(categoryName)) {
      categoryMap.set(categoryName, {
        id: categoryName.toLowerCase().replace(/\s/g, '-'),
        name: categoryName,
        image: game.media.thumbnail,
        gamesCount: 1
      })
    } else {
      const existing = categoryMap.get(categoryName)
      if (existing) {
        existing.gamesCount += 1
      }
    }
  })

  return Array.from(categoryMap.values())
}
