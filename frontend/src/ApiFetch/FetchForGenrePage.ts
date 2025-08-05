import { ICategory, IGame } from "../Interface";

const BackendUrl = "http://localhost:5034/api";

// Fetch all games categorized by genre
export async function fetchCategories(): Promise<ICategory[]> {
    const result = await fetch(`${BackendUrl}/GenrePage/categories`);

    if (!result.ok) {
        console.error("Failed to fetch categories:", result.statusText);
        throw new Error("Failed to fetch categories");
    }

    return await result.json();
}

// Fetch All Games for a specific genre/category
export async function fetchGamesByCategory(categoryId: number): Promise<IGame[]> {
    const result = await fetch(`${BackendUrl}/GenrePage/genre/${categoryId}`);

    if (!result.ok) {
        console.error("Failed to fetch games by category:", result.statusText);
        throw new Error("Failed to fetch games by category");
    }

    return await result.json();
}
