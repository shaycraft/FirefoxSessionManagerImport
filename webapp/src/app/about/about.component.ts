import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private pageTitle: string = 'About Me';

  constructor() { }

  ngOnInit() {
  }

}
