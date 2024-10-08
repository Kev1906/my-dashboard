'use client'
import Link from "next/link"
import Image from "next/image"
import { SimplePokemon } from "../interfaces/simplePokemon"
import { IoHeart, IoHeartOutline } from "react-icons/io5"
import { useAppSelector } from "@/src/store"
interface Props {
    pokemon: SimplePokemon
}
export const PokemonCard = ({ pokemon }: Props) => {

    const isFavorite = useAppSelector(state =>!!state.pokemons[pokemon.id])
    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center text-center p-6 bg-gray-800 border-b">
                    <Image
                        key={pokemon.name}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        width={200}
                        height={30}
                        alt={pokemon.name}
                        priority={ false } />
                    <p className="pt-2 text-lg font-semibold text-gray-50">{pokemon.name}</p>
                    <p className="text-sm text-gray-100">John@Doe.com</p>
                    <div className="mt-5">
                        <Link
                            href={`/dashboard/pokemons/${pokemon.name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Mas informacion
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex items-center" >

                        <div className="text-red-600">
                            {isFavorite?<IoHeart/>:<IoHeartOutline />}
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                Favorito
                            </p>
                            <p className="text-xs text-gray-500">Click para cambiar</p>
                        </div>

                    </Link>

                </div>


            </div>
        </div>
    )
}