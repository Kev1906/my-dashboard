import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/src/pokemons"

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json())

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
        url: pokemon.url
    }))
    
    // throw new Error('Este es un error ')
    return pokemons
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons(151)
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de Pokemons <small className="text-blue-500">estatico</small></span>
            <PokemonGrid pokemons={pokemons} />
        </div>
    )
}