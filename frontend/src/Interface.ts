// Används för listor (GenrePage och DiscoveryPage)
export interface IGame {
    gameId: number;
    gameTitle: string;
    gameGenre: string;
    imageUrl: string;
    releaseDate: string;
}

// Används för detaljerad vy (DiscoveryPage game/{GameId})
export interface IGameDetails extends IGame {
    gameDescription: string;
    price: number;
    developer: string;
}

// Används för kategorier
export interface ICategory {
    gamesCategoryId: number;
    categoryName: string;
}
