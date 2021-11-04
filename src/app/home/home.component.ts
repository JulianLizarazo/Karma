import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: String[] = [
    "https://i.ytimg.com/vi/RNXEnyj7Ywk/maxresdefault.jpg",
    "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5dcb99772c886a0007ec024c%2FMcLaren-Elva%2F960x0.jpg%3Ffit%3Dscale",
    "https://i.blogs.es/d3046c/650_1000_bugatti-grand-sport-vitesse-1/450_1000.jpg",
    

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
