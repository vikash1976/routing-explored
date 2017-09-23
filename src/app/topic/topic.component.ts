import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  topicId;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    //this.topicId = this._route.snapshot.params['id'];
    this._route.params.subscribe(
      (params: Params) => this.topicId = params['id']
    )
  }

}
