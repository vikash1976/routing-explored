import { ScoresComponent } from './scores.component';
import { AuthGuard } from './../auth.guard';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

/* For lazy loading to work replace 'scores' with ''*/
const scoresRoutes: Routes = [    
    { path: '', component: ScoresComponent }
  ] 
@NgModule({
    
    imports: [
        RouterModule.forChild(scoresRoutes)
    ],
    exports: [RouterModule]

})
export class ScoresRoutingModule { }

export const scoresRoutingComponents = [ScoresComponent]