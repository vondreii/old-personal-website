import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {

  postArray: number[];

  titles: string[][] = [
    ["Blue Mountains"],
    ["Central Coast"],
    ["Hobart"],
    ["Hunter Valley"],
    ["Melbourne"],
    ["Newcastle"],
    ["Manila"],
    ["Rural Philippines"],
    ["Sydney"]
  ];
  images: string[][] = [
    ["../../assets/photography/blue-mountains/three-sisters-lookout-cropped.JPG"],
    ["../../assets/photography/central-coast/long-jetty-cropped.jpg"],
    ["../../assets/photography/hobart/hobart-street.jpg"],
    ["../../assets/photography/hunter-valley/waterfall.jpg"],
    ["../../assets/photography/melbourne/melbourne-street.jpg"],
    ["../../assets/photography/newcastle/train-tracks-cropped.jpg"],
    ["../../assets/photography/manila/overpass-1-cropped.JPG"],
    ["../../assets/photography/rural-philippines/corn-fields-cropped.JPG"],
    ["../../assets/photography/sydney/sydney-bridge-cropped.jpg"]
  ];
  descriptions: string[][] = [
    ["A mountainous region found approximately 60km north of Sydney, NSW, Australia."],
    ["A region filled with beaches that stretches the coast from Sydney up until Newcastle, NSW, Australia."],
    ["The state capital city of Tasmania, NSW, Australia - which is an island underneath the mainland of Australia."],
    ["A rural regional area located inland west of Newcastle and the Central Coast, NSW, Australia."],
    ["The state capital city of Victoria, Australia."],
    ["A major city approximately 160km north of Sydney, Australia."],
    ["The capital city of the Philippines."],
    ["Various towns and rural locations scattered throughout the Philippines."],
    ["The capital city of NSW, Australia. Home to Australian landmarks like the Sydney Opera House and the Harbour Bridge."]
  ];
  links: string[][] = [
    ["/photography/blue-mountains"],
    ["/photography/central-coast"],
    ["/photography/hobart"],
    ["/photography/hunter-valley"],
    ["/photography/melbourne"],
    ["/photography/newcastle"],
    ["/photography/manila"],
    ["/photography/rural-philippines"],
    ["/photography/sydney"]
  ];

  constructor() { }

  ngOnInit() {
    this.postArray = [0,1,2,3,4,5,6,7,8];
  }

}
