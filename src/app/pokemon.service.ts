import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pokemon, PokemonList } from './pokemon';


@Injectable({ providedIn: 'root' })
export class PokemonService {

    private pokemonUrl = 'https://pokeapi.co/api/v2';
    
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor( private http: HttpClient) { }

    /** GET heroes from the server */
    getPokemon(): Observable<PokemonList> {
        return this.http.get<PokemonList>(`${this.pokemonUrl}/pokemon?limit=9&offset=386`);
    }

    getPokemonByName( name: string ): Observable<Pokemon> {
        return this.http.get<Pokemon>(`${this.pokemonUrl}/pokemon/${name}`);
    }


}