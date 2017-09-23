import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
scores: any;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    
    this._route.data.subscribe(
            (response: any) => this.scores = response.data
        );
  }

}
