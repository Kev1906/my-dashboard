import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/src/pokemons"

export const metadata = {
    title: 'Favoritos',
    description: 'Estos son los favoritos'
}

export default async function PokemonsPage() {    
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Pokemons Favoritos <small className="text-blue-500">Global State</small></span>
            {/* <PokemonGrid pokemons={pokemons} /> */}
        </div>
    )
}