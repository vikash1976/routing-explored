import { ScoresService } from './../services/scores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topiclist',
  templateUrl: './topiclist.component.html',
  styleUrls: ['./topiclist.component.css']
})
export class TopiclistComponent implements OnInit {
  aCommonData:string;
  topics = [
    {id: 1, description: 'Components'},
    {id: 2, description: 'Directives'},
    {id: 3, description: 'Pipes'},
    {id: 4, description: 'Forms'},
    {id: 5, description: 'Routing'},
    {id: 6, description: 'Debugging'},
    {id: 7, description: 'Testing'}
  ]

  constructor(private _scoresService: ScoresService) { }

  ngOnInit() {
    this.aCommonData = this._scoresService.getACommonData();

  }
  updateCommonData(newData: string) {
    this._scoresService.updateACommonData(newData);
    this.aCommonData = this._scoresService.getACommonData();
  }

}
