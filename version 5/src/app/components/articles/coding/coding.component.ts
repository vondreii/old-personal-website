import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css']
})
export class CodingComponent implements OnInit {

  postArray: number[];

  titles: string[][] = [
      ["Setting Up A Github Repository and Creating A Local Copy"]
  ];
  images: string[][] = [
      ["../../assets/articles/coding-images/settingUpASimpleGithubRemoteAndLocalRepository/header-dark.jpg"]
  ];
  dates: string[][] = [
      ["22 Aug 2020"]
  ];
  links: string[][] = [
      ["/coding/post/settingUpASimpleGithubRemoteAndLocalRepository"]
  ];
  tags: string[][] = [
    ["Version Control, Github"]
  ];

  constructor() {}

  ngOnInit() {
    this.postArray = [0];
  }

  getURL(i) {
    return this.images[i];
  }

  searchbar() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("section");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("div")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  }
}
