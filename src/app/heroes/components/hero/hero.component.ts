import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes-hero',
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css',
    standalone: false
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  public changeHeroName(name: string): void {
    this.name = name;
  }

  public changeAge(age: number): void {
    this.age = age;
  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }
}
