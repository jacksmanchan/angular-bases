import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    }, {
      id: uuid(),
      name: 'Goku',
      power: 9500
    }, {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  addCharacter(character: Character): void {
    // ...character toma todas las propiedades de character y las agrega
    // en el nuevo objeto newCharacter
    const newCharacter: Character = { id: uuid(), ...character}
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }
  deleteCharacterByID(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
