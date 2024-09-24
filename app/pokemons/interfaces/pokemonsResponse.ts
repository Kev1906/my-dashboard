export interface PokemonsResponse {
    count: number
    next: string|null
    previous: null|string
    results: Result[]
}

export interface Result {
    name: string
    url: string
}