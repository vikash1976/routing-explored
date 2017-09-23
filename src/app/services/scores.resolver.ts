import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { ScoresService } from './scores.service';



@Injectable()
export class ScoresResolver implements Resolve<any> {
  constructor(private _scoresService: ScoresService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    //return this._scoresService.getScores();
    return [
            {
                userid: 1,
                topicid: 1,
                score: 97
            },
            {
                userid: 2,
                topicid: 3,
                score: 78
            },
            {
                userid: 3,
                topicid: 5,
                score: 87
            }
        ];
    
  }
        
  
}
