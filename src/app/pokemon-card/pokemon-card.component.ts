import {Pokemon} from '../pokemon';
import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  
  @Input() pokemonName?: string | undefined;
  lastPokemon?:string;
  
  pokemon?: Pokemon;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    // this.getPokemonByName(this.pokemonName);
    // if( this.lastPokemon != this.pokemonName){
    //   this.lastPokemon = this.pokemonName;
    //   this.getPokemonByName(this.lastPokemon?);
    // }
    // console.log(this.pokemonName);
  }

  getPokemonByName(name: string) {
    if( this.lastPokemon != name ){
      this.lastPokemon = name;
      this.pokemonService.getPokemonByName(name).subscribe( (result) => {
        this.pokemon = result 
        console.log(this.pokemon?.abilities);
      })
    }
  }

}
