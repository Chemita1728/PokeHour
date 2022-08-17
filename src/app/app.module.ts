import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { PokemonComponent } from './pokemon/pokemon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatCardModule} from '@angular/material/card';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { HourComponent } from './hour/hour.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule
  ],
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonCardComponent,
    HourComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
