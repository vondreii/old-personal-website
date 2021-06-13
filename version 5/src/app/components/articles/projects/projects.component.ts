import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  postArray: number[];

  titles: string[][] = [
      ["Cyan X"],
      ["3D Street Racing Game"],
      ["Ice Capades"],
      // ["Offline Calculator And Converter"]
  ];
  images: string[][] = [
      ["../../assets/articles/projects-images/cyanX/preview.png"],
      ["../../assets/articles/projects-images/racingGame/gameplay.PNG"],
      ["../../assets/articles/projects-images/iceCapades/preview.jpg"],
      //["../../assets/articles/projects-images/calculatorConverter/preview.jpg"],
  ];
  descriptions: string[][] = [
      ["A 2D platformer game set in the distant future. Solve puzzles, level up, craft weapons and defeat enemies in order to rescue captured animals..."],
      ["This is a modified version of the street racing game sourced from this Microsoft's Github repository. The original game is a 3D street racing game where the player must avoid the obstacles on the road..."],
      ["Ice Capades is a Pokemon-style inspired game that aims to teach players about the affects of climate change on the environment. You must pass through multiple levels, interact with objects, solve puzzles..."],
      // ["Coming soon!"]
  ];
  links: string[][] = [
      ["/projects/post/cyanX"],
      ["/projects/post/streetRacingGame"],
      ["/projects/post/iceCapades"],
      // ["/projects/post/calculatorAndConverter"]
  ];

  constructor() { }

  ngOnInit() {
    this.postArray = [0,1,2];
  }

}
