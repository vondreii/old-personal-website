import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  postArray: number[];

  titles: string[][] = [
      ["Adding Photos To Instagram Using A Desktop Computer"],
      ["Tips on Making The Most Out Of Your First Year At Uni"],
      ["Decluttering Your Home"],
      ["How To Organise Your Web Browsing"],
      ["Organising Your Computer To Increase Productivity"],
      ["Ways To Be More Organised"]
  ];
  images: string[][] = [
      ["../../assets/articles/students-images/uploadImageToInstagramViaDesktop/header-dark.jpg"],
      ["../../assets/articles/students-images/tipsOnMakingTheMostOutOfYourFirstYearUni/header-dark.jpg"],
      ["../../assets/articles/students-images/declutteringYourHome/header-dark.jpg"],
      ["../../assets/articles/students-images/howToOrganiseYourWebBrowsing/header-dark.jpg"],
      ["../../assets/articles/students-images/organisingYourComputerToIncreaseProductivity/header-dark.jpg"],
      ["../../assets/articles/students-images/waysToBeMoreOrganised/header-dark.jpg"]
  ];
  dates: string[][] = [
      ["11 Aug 2020"],
      ["8 June 2020"],
      ["12 May 2020"],
      ["25 May 2020"],
      ["16 May 2020"],
      ["19 May 2020"]
  ];
  links: string[][] = [
      ["/students/post/uploadImageToInstagramViaDesktop"],
      ["/students/post/tipsOnMakingTheMostOutOfYourFirstYearUni"],
      ["/students/post/declutteringYourHome"],
      ["/students/post/howToOrganiseYourWebBrowsing"],
      ["/students/post/organisingYourComputerToIncreaseProductivity"],
      ["/students/post/waysToBeMoreOrganised"]
  ];
  tags: string[][] = [
    ["Design & Social Media"],
    ["Uni"],
    ["Organisation"],
    ["Organisation"],
    ["Organisation"],
    ["Organisation"]
  ];

  constructor() { }

  ngOnInit() {
    this.postArray = [0,1,2,3,4,5];
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
