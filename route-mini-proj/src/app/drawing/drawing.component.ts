import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css']
})
export class DrawingComponent implements OnInit {

  lessons = ['Sketching', 'Painting', 'Sculpting']

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(function (params) {
      console.log(params.get("countryname"));
      console.log(params.get("city"));
      // if (params.get("city") == 'calgary') {
      //   this.lessons.push('Golf');
      // }
    });
  }

}
