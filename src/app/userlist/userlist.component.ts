import { ScoresService } from './../services/scores.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
wasSelectedId: number;
aCommonData: string;
users = [
  {id: 1, name: "John Doe"},
  {id: 2, name: "Jane Doe"},
  {id: 3, name: "Jim Doe"}
]
  constructor(private _route: ActivatedRoute, private _scoresService: ScoresService) { }

  ngOnInit() {
    this._route.params.subscribe(
      (params: Params) => this.wasSelectedId = +params['id']
    )
    this.aCommonData = this._scoresService.getACommonData();
  }

  isSelected(user) {
    return user.id === this.wasSelectedId;
  }
  updateCommonData(newData: string) {
    this._scoresService.updateACommonData(newData);
    this.aCommonData = this._scoresService.getACommonData();
  }

}
