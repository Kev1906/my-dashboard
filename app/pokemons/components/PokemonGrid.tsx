import { SimplePokemon } from "../interfaces/simplePokemon"
import { PokemonCard } from "@/app/pokemons"

interface Props {
    pokemons: SimplePokemon[]
}
export const PokemonGrid = ({ pokemons }: Props) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {pokemons.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                // <Image
                //     key={pokemon.name}
                //     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                //     width={200}
                //     height={30}
                //     alt={pokemon.name} />
                
            ))}
        </div>
    )
}