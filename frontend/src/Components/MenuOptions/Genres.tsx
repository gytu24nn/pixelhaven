import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../ApiFetch/FetchForGenrePage";
import { ICategory } from "../../Interface";
import "../../CSS/GenrePage.css";



const Genres = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setSLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
                console.log("API response from fetchCategories:", data);
            } catch (err) {
                console.error(err);
                setError("Failed to load categories");
            } finally {
                setSLoading(false);
            }
        }
        loadCategories();
    }, []);
    return (
        <>
            <div className="GenreGrid">
                {loading && <p>Loading categories...</p>}
                {error && <p className="error">{error}</p>}
                {categories.map((category) => (
                    <Link to={`/genre/${category.gamesCategoryId}` } key={category.gamesCategoryId}>
                        <div className="GenreCard">
                            <h3>{category.categoryName}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Genres;