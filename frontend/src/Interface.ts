// Används för listor (GenrePage och DiscoveryPage)
export interface IGame {
    gameId: number;
    gameTitle: string;
    gameGenre: string;
    imageUrl: string;
    releaseDate: string;
}

// Används för detaljerad vy (DiscoveryPage game/{GameId})
export interface IGameDetails {
    gameId: number;
    gameTitle: string;
    gameDescription: string;
    gameGenre: string;
    imageUrl: string;
    releaseDate: string;
    developer: string;
    price: number;

}

// Används för kategorier
export interface ICategory {
    gamesCategoryId: number;
    categoryName: string;
}
