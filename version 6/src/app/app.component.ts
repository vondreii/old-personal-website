import { Component } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  // variables
  title = 'vondreii';
  screenWidth: any;
  navOpen: boolean = true;

  // On app load, determine if the navbar should be open/closed
  constructor() { 
    console.log(this.getScreenSize());
    if (this.screenWidth < 1000) {
      this.navOpen = true;
    }
    else {
      this.navOpen = false;
    }
  }
  // Listens to window resize event
  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
      this.screenWidth = window.innerWidth;
    }
  // Button to open/close the navbar
  openCloseNav() {
    if (this.navOpen) {
      if(this.screenWidth < 1000)
      {
        document.getElementById("mySidebar").style.width = "100%";
        document.getElementById("mySidebar").style.marginTop = "50px";
        document.getElementById("main").style.marginLeft = "0px";
        document.getElementById("main").style.marginBottom = "0px";
      }
      else {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "230px";
        document.getElementById("main").style.marginBottom = "0px";
      }
    }
    else {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
    }
    this.navOpen = !this.navOpen;
  }
  // For small screens, automatically close navbar if page selected
  closeNavOnClick() {
    if (this.screenWidth < 1000) {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      this.navOpen = !this.navOpen;
    }
  }
}