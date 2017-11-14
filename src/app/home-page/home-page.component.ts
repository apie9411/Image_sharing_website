import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  searchKeyword = ''; // will be used to make queries to database if the user tries to search

  // an array to later be filled  from a query to the database for images
  imgArray = ['https://i.pinimg.com/736x/88/50/2b/88502b58b2ca3509be47473044fde8cc--wink-wink-adorable-animals.jpg',
  'http://www.freshboo.com/wp-content/uploads/2014/05/cute_cat_wallpaper.jpg',
  'http://wallscreenart.com/wp-content/uploads/2016/06/cute-dog-and-cat-download-wallpaper.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
