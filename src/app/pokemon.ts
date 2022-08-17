export interface PokemonList {
    results: PokemonInfo[];
}

export interface PokemonInfo {
    name: string;
    url: string;
}

export interface Pokemon {
    order: number;
    name: string;
    abilities: Ability[];
    height: number;
    weight: number;
    sprites: Sprites;
    types: Types[];
}

export interface Ability {
    ability: abInfo;
    is_hidden: boolean;
}

export interface abInfo {
    name: string;
}
export interface Sprites {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
}

export interface Types {
    type: espType;
}

export interface espType {
    name: string;
}
