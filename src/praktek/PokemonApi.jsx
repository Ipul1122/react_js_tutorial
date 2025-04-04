import { useState } from "react";

function PokemonApi(){
    const [pokemon, setPokemon] = useState(null);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");

    const getPokemonData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
            if (!response.ok) {
                throw new Error("Pokemon tidak ditemukan");
            }
            const data = await response.json();
            setPokemon(data);
            setError("");
            } catch (err){
            setError(err.message);
            setPokemon(null);
            }
    };

    return (
        <div>
            <h1>Cari pokemon yang anda mau</h1>
            <input 
            type="text" 
            placeholder="Masukkan nama pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value) }
            />
            <button onClick={getPokemonData}>Cari</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {pokemon && (
                <div>
                    <h2>{pokemon.name.toUpperCase()}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    <p>Tipe: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
                    <p>Tinggi: {pokemon.height}</p>
                    <p>Berat: {pokemon.weight}</p>
                </div>
            )}
        </div>
    );
}

export default PokemonApi;
// import React, { useState } from "react";