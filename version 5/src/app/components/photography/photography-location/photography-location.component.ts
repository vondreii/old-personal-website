import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-photography-location',
  templateUrl: './photography-location.component.html',
  styleUrls: ['./photography-location.component.css']
})
export class PhotographyLocationComponent implements OnInit {
  collectionPhotos: any;
  collectionMoreLikeThis: any;

  href: string;
  hrefId: string;

  allPhotos: [];
  photosLength: any;
  avgColumnLength: any;
  col1: [];
  col2: [];
  col3: [];
  col4: [];

  loc: string;

  moreLikeThis1: string;
  moreLikeThis2: string;

  moreLikeThis1Location: string;
  moreLikeThis2Location: string;

  moreLikeThis1Background: string;
  moreLikeThis2Background: string;

  moreLikeThis1RouterLink: string;
  moreLikeThis2RouterLink: string;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    // Gets the hyperlink in the browser window, eg "vondreii/photography/blue-mountains" and gets the id, eg 'blue-mountains'
    this.href = window.location.href;
    this.hrefId = this.href.substring(this.href.lastIndexOf("/")+1,this.href.length);
    // Reads from the 'photography' collection in the Firebase Database
    this.collectionPhotos = this.db.collection('photography').valueChanges({ idField: 'id' });
    this.collectionPhotos.forEach(photography => {
      // For each location, save the images/info of the matching location
      photography.forEach(location => {
        if(location.id == this.hrefId)
        {
          // this.allPhotos = location.photos;
          // this.photosLength = location.photos.length;
          // console.log("photosLengthFromFirebase: "+location.photos.length);
          // console.log("photosLengthFromVariable: "+this.photosLength);
          this.col1 = location.col1;
          this.col2 = location.col2;
          this.col3 = location.col3;
          this.col4 = location.col4;
          this.loc = location.location;
          this.moreLikeThis1 = location.moreLikeThis1;
          this.moreLikeThis2 = location.moreLikeThis2;
          // console.log(location.moreLikeThis1);
          // console.log(location.moreLikeThis2);
        }
        // console.log(location.location);
        // console.log(window.location.href);
      });
    });

    console.log("photosLengthFromVariable: "+this.photosLength);
    // console.log("photosLength: "+this.photosLength);
    // console.log("avgColumnLength: "+this.avgColumnLength);

    // Reads from the 'photography-more-like-this' collection in the Firebase Database
    this.collectionMoreLikeThis = this.db.collection("photography-more-like-this").valueChanges({ idField: 'id' });
    // each location has a display title, background image and router link to its corresponding page 
    this.collectionMoreLikeThis.forEach(location => {
      location.forEach(link => {
        // Saves the 2 more like this links that are associated with the current page
        if(link.id == this.moreLikeThis1)
        {
          this.moreLikeThis1Location = link.location;
          this.moreLikeThis1Background = link.background;
          this.moreLikeThis1RouterLink = link.routerLink;
        }
        else if(link.id == this.moreLikeThis2)
        {
          this.moreLikeThis2Location = link.location;
          this.moreLikeThis2Background = link.background;
          this.moreLikeThis2RouterLink = link.routerLink;
        }
      });
    });
  }

}
