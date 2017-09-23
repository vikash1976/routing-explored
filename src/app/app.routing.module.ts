import { ScoresComponent } from './scores/scores.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CustomPreloadStrategy } from './services/custom.preloadstrategy';
import { ScoresResolver } from './services/scores.resolver';

import { AuthGuard } from './auth.guard';

import { TopicComponent } from './topic/topic.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { TopiclistComponent } from './topiclist/topiclist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
    { path: '', /*component: HomeComponent*/redirectTo: 'topiclist', pathMatch: "full" },
    { path: 'topiclist', component: TopiclistComponent },
    { path: 'topiclist/:id', component: TopicComponent },
    {
        path: 'scores',
        resolve: { data: ScoresResolver },
        canActivate: [AuthGuard],
        loadChildren: './scores/scores.module#ScoresModule'
    },
    {
        path: 'userlist',
        loadChildren: './userlist/users.module#UsersModule'
    }, /* This is lazy loading*/
    /*{
        path: 'userlist', component: UserlistComponent,
        canActivate: [AuthGuard],
        children: [
            { path: ':id/:name', component: UserComponent }
        ]
    },
*/
    { path: 'not-found', component: NotfoundComponent },
    { path: '**', redirectTo: 'not-found' }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: CustomPreloadStrategy })
    ],
    exports: [RouterModule]
})

/*, preloadingStrategy: CustomPreloadStrategy*/
export class AppRoutingModule { }

export const appRouteComponents = [TopiclistComponent, TopicComponent,
    NotfoundComponent, HomeComponent];
//ng g c home/topiclist/topic/notfound