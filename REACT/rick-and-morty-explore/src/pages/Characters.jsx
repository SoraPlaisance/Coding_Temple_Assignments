import { useEffect, useMemo, useState } from "react";
import CharacterCard from "../components/CharacterCard";

export default function Characters() {
    const [characters, setCharacters] = useState([]) //holds the list from the API
    // UI states: loading + error
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState(''); //input for search
    const [page, setPage] = useState(1);

    useEffect(() => {
        let ignore = false;
        (async () => {
            try {
                setLoading(true);
                setError(null);
                const url = `https://rickandmortyapi.com/api/character?page=${page}`
                const res = await fetch(url);
                if (!res.ok) throw new Error(`Request failed (HTTP ${res.status})`);
                const json = await res.json();
                if (!ignore) {
                    setCharacters(json.results ?? []);
                }
            } catch (err) {
                if (!ignore) {
                    setError(err.message)
                }
            } finally {
                if (!ignore) {
                    setLoading(false);
                }
            }
        })()
        //Cleanup prevents state updates if we navigate away quickly
        return () => {
            ignore = true
        }
    }, [page])

    // Filter Characters Locally
    const filteredCharacters = useMemo(() => {
        const q = query.trim().toLowerCase();
        if(!q) return characters;
        return characters.filter(c => c.name.toLowerCase().includes(q));
    }, [characters, query]);

    if(loading) return <p className="message">Loading characters...</p>
    if(error) return <p className= "message error">Error: {error}</p>
    return (
        <main>
            <section className="toolbar">
                <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by name..." className="input" aria-label="Search characters" />
                <span className="count">{filteredCharacters.length}</span>
            </section>
            {filteredCharacters.length === 0 ? (
                <p className="message">No characters found. Try another search</p>

            ) : (
                <section className="grid">
                    {filteredCharacters.map(character => (
                        <CharacterCard key={character.id} character={character}/>
                    ))}
                </section>
            )}
            <section className="pager">
                <button className="button secondary" onClick={() => setPage(p => Math.max(1, p - 1))}>
                    Previous
                </button>
                <span className="page-label">Page {page}</span>
                <button className="button secondary" onClick={() => setPage(p => p + 1)}>
                    Next
                </button>
            </section>
        </main>
    )
}