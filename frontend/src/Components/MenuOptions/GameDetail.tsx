import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchGameDetails } from "../../ApiFetch/FetchForDiscoveryPage";
import { IGameDetails } from "../../Interface";
import "../../CSS/GameDetail.css";


const GameDetail = () => {
    const { gameId } = useParams<{ gameId: string }>();
    const [gameDetails, setGameDetails] = useState<IGameDetails | null >(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!gameId) return;

        const loadGameDetails = async () => {
            try {
                const data = await fetchGameDetails(parseInt(gameId));
                setGameDetails(data);
                console.log("API response from fetchGameDetails:", data);
            } catch (err) {
                console.error(err);
                setError("Failed to load game details");
            } finally {
                setLoading(false);
            }
        }
        loadGameDetails();
    }, [gameId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="error">error</p>
    if (!gameDetails) return <p>No game found.</p>;


    return (
        <>
            <div className="game-detail">
                <button className="back-button" onClick={() => navigate(-1)}>
                    ← Back
                </button>

                <div className="hero">
                    <img 
                        src={`http://localhost:5034/${gameDetails.imageUrl}`} 
                        alt={gameDetails.gameTitle}
                        className="gameDetail-img" 
                    />
                    
                </div>

                <div className="game-content">
                    <div className="game-meta">
                        <h1>{gameDetails.gameTitle}</h1>
                        <p>{gameDetails.gameGenre}</p>
                        <span>Released: {new Date(gameDetails.releaseDate).toLocaleDateString()}</span>
                        <span>Developer: {gameDetails.developer}</span>
                        <span className="price">${gameDetails.price.toFixed(2)}</span>
                    </div>
                    <p className="game-description">{gameDetails.gameDescription}</p>
                </div>
            </div>
            
        </>
    )
}

export default GameDetail;