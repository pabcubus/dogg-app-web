import { Component, OnInit } from '@angular/core';
import { Dog } from '../../interfaces/dog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public dogs: Array<Dog> = [{
    title: 'Shiba Inu',
    subtitle: 'Dog Breed',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
  }, {
    title: 'Shiba Inu',
    subtitle: 'Dog Breed',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
  }]

  constructor() { }

  ngOnInit() {
  }

}
