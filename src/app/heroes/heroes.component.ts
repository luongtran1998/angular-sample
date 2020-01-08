import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';
import {heroes} from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = heroes;
  selectedHero;
  constructor() { }

  ngOnInit() {
  }
  onSelect(hero) {
    this.selectedHero = hero;
  }
}
