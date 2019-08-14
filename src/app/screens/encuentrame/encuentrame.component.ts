import { Component, OnInit } from '@angular/core';

import { Dog } from '../../interfaces/dog';

@Component({
  selector: 'app-encuentrame',
  templateUrl: './encuentrame.component.html',
  styleUrls: ['./encuentrame.component.scss']
})
export class EncuentrameComponent implements OnInit {

  public dogs: Array<Dog> = [{
    title: 'Shiba Inu',
    subtitle: 'Dog Breed',
    image: 'https://nnimgt-a.akamaihd.net/transform/v1/crop/frm/ruby.pascoe/36c422d6-5e42-4f85-a4eb-05f9edf9979e.jpg/r0_806_3024_3480_w1200_h678_fmax.jpg',
    description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
  }, {
    title: 'Shiba Inu',
    subtitle: 'Dog Breed',
    image: 'https://nnimgt-a.akamaihd.net/transform/v1/crop/frm/ruby.pascoe/36c422d6-5e42-4f85-a4eb-05f9edf9979e.jpg/r0_806_3024_3480_w1200_h678_fmax.jpg',
    description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
  }]

  constructor() { }

  ngAfterViewInit() {
  }

  ngOnInit() {
  }

}
