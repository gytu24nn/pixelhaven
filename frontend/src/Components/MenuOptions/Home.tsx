import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchRandomGames } from "../../ApiFetch/FetchForDiscoveryPage";
import { IGame } from "../../Interface";
import "../../CSS/HomePage.css";

/* Här är home page som kommer var discovery där man kommer kunna upptäcka spel med hjälp av ett API jag tänkt använda */
const Home = () => {
    const [games, setGames] = useState<IGame[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [Loading, setLoading] = useState<boolean>(true);

    // TEST: Kasta ett fel med flit för att testa error boundary
    //throw new Error("Test fel från HomePage");

    useEffect(() => {
        fetchRandomGames()
            const loadGames = async () => {
                try { 
                    const data = await fetchRandomGames();
                    setGames(data);
                    console.log("API response from fetchRandomGames:", data);
                } catch (err) {
                    console.error(err);
                    setError("Failed to load games");
                } finally {
                    setLoading(false);
                }
            };
            loadGames();
    }, []);

    return(
        <>
            <div className="GameGrid">
                {Loading && <p>Loading games...</p>}
                {error && <p className="error">{error}</p>}
                {games.map((game) => (
                    <div className="GameCard" key={game.gameId} >
                        <Link to={`/game/${game.gameId}`}>
                        <img src={`http://localhost:5034/${game.imageUrl}?v=3`} alt={game.gameTitle} className="game-image"/>
                        <h3 className="gameTitle">{game.gameTitle}</h3>
                        <div className="game-info">
                            <p>Genre: {game.gameGenre}</p>
                            <p>Released: {game.releaseDate}</p>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home; 