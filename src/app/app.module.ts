import { ServicesModule } from './services/services.module';
import { CustomPreloadStrategy } from './services/custom.preloadstrategy';
import { ScoresService } from './services/scores.service';
import { ScoresResolver } from './services/scores.resolver';
import { AuthGuard } from './auth.guard';
import { AppRoutingModule, appRouteComponents } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
/*import { ScoresComponent } from './scores/scores.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { TopiclistComponent } from './topiclist/topiclist.component';
import { HomeComponent } from './home/home.component';
import { TopicComponent } from './topic/topic.component';*/
import { UserlistComponent } from './userlist/userlist.component';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent, appRouteComponents   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ServicesModule.forRoot()
  ],
  providers: [AuthGuard, ScoresResolver, CustomPreloadStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
