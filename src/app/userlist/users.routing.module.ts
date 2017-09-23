import { AuthGuard } from './../auth.guard';
import { UserComponent } from './../user/user.component';
import { UserlistComponent } from './userlist.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

/* For lazy loading to work replace 'users' with ''*/
const userRoutes: Routes = [    
    { path: '', component: UserlistComponent, canActivateChild: [AuthGuard], children: [
    { path: ':id/:name', component: UserComponent }
  ] }
]
@NgModule({
    
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [RouterModule]

})
export class UserRoutingModule { }

export const userRoutingComponents = [UserlistComponent, UserComponent]