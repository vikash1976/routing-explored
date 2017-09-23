import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId: number;
  userName: string;
  rank: number;
  constructor(private _route: ActivatedRoute, private _router: Router) { 
    
  }

  ngOnInit() {
    this._route.params.subscribe(
      (params: Params) => {
        this.userId = +params['id'];;
        this.userName = params['name'];;
      }
    )

    this._route.queryParams.subscribe(
      (qparams: Params) => {
        this.rank = +qparams['rank'];        
      }
    )
  }
  goBack(userId, username) {
    this._router.navigate(['../../', {id: userId, name: username}], {relativeTo: this._route});

  }

}
