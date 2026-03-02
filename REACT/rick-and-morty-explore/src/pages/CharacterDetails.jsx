import {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";

export default function CharacterDetails() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;
        (async () => {
            try {
                setLoading(true)
                setError(null)
                const url = `https://rickandmortyapi.com/api/character/${id}`;
                const res = await fetch(url);
                if (!res.ok) throw new Error(`Request failed (HTTP ${res.status})`);
                const json = await res.json();
                if(!ignore) {
                    setCharacter(json);
                } 
            } catch (err) {
                    if(!ignore) {
                        setError(err.message)
                    }
            } finally {
                if(!ignore) {
                    setLoading(false)
                }
            }
        })()
        return () => {
            ignore = true;
        }
    }, [id])
    if(loading) return <p className= "message">Loading character...</p>
    if(error) return <p className="message error">Error: {error}</p>
    if(!character) return <p className="message">Character not found.</p>

    return (
        <main className="details">
            <img src={character.image} alt={character.name} className="details-image" />
            <div>
                <h2 className="details-title">{character.name}</h2>
                <p><strong>Status:</strong>{character.status}</p>
                <p><strong>Species:</strong>{character.species}</p>
                <p><strong>Gender:</strong>{character.gender}</p>
                {character.type && <p><strong>Type:</strong>{character.type}</p>}
                <p><strong>Origin:</strong>{character.origin?.name}</p>
                <p><strong>Last known location</strong>{character.location?.name}</p>
                <Link to='/' className="button">
                    Back to Characters
                </Link>
            </div>
        </main>
    )
}