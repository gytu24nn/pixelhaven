import { useEffect, useState } from "react";
import {  useParams, useNavigate } from "react-router-dom";
import { fetchGamesByCategory } from "../../ApiFetch/FetchForGenrePage";
import { IGame } from "../../Interface";
import "../../CSS/HomePage.css";

const GenreDetail = () => {
    const { categoryId} = useParams<{ categoryId: string }>();
    const [games, setGames] = useState<IGame[]>([]);
    const [categoryName, setCategoryName] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        if(!categoryId) return;

            const loadGamesbyCategory = async () => {
                try {
                    const data = await fetchGamesByCategory(parseInt(categoryId));
                    setGames(data);
                    console.log("API response from fetchGamesByCategory:", data);

                    if(data.length > 0) {
                        setCategoryName(data[0].gameGenre);
                    } else {
                        setCategoryName("Unknown Category");
                    }
                } catch (err) {
                    console.error(err);
                    setError("Failed to load games by category");
                } finally {
                    setLoading(false);
                }
            }
            loadGamesbyCategory();
    }, []);

    return (
        <>
            <button 
                className="back-button"
                onClick={() => navigate("/Genres")}>
                <i className="fa-solid fa-arrow-left"></i>Back to Genres
            </button>

            {loading && <p>Loading games...</p>}
            {error && <p className="error">{error}</p>}

            {!loading && !error && (
                <>
                    <h2 className="genre-title">{categoryName}</h2>
                    <div className="GameGrid">
                        {games.map((game) => (
                            <div className="GameCard" key={game.gameId}>
                                <img src={`http://localhost:5034/${game.imageUrl}?v=3`} alt={game.gameTitle} className="game-image"/>
                                <h3 className="gameTitle">{game.gameTitle}</h3>
                                <div className="game-info">
                                    <p>Genre: {game.gameGenre}</p>
                                    <p>Released: {game.releaseDate}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
            
        </>
    )
}

export default GenreDetail;