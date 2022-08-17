import { Component, OnInit} from '@angular/core';

//Importamos pokemon.ts
import { Pokemon, PokemonInfo, PokemonList } from '../pokemon';
//Importamos pokemon.service.ts
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  
  pokemonList: PokemonList | undefined;

  constructor(private pokemonService: PokemonService) {}
  // loadComponente: boolean = false;
  selectedPokemon?: string;

  // showCard: boolean = false;

  // onSelect(pokemon?: string): void {
  //   this.showCard = false;
  //   this.selectedPokemon = pokemon;
  //   this.showCard = true;
    
  // }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    // console.log(this.selectedPokemon);
    this.pokemonService
      .getPokemon()
      .subscribe((pokemones) => (this.pokemonList = pokemones));
  }
}