import { IGame, IGameDetails } from '../Interface';

const BackendUrl = "http://localhost:5034/api";

// Fetch random games for the discovery page 
export async function fetchRandomGames(count: number = 11): Promise<IGame[]> {
    const result = await fetch(`${BackendUrl}/DiscoveryPage/random?count=${count}`)

    if (!result.ok) {
        console.error("Failed to fetch random games:", result.statusText);
        throw new Error("Failed to fetch random games");
    }

    return await result.json()
}

// Fetch details for a specific game
export async function fetchGameDetails(gameId: number): Promise<IGameDetails> {
    const result = await fetch(`${BackendUrl}/DiscoveryPage/game/${gameId}`)

    if (!result.ok) {
        console.error("Failed to fetch game details:", result.statusText);
        throw new Error("Failed to fetch game details");
    }

    return await result.json()
}
