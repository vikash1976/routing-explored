import { NgModule } from '@angular/core';

import { ScoresRoutingModule, scoresRoutingComponents } from './scores.routing.module';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        scoresRoutingComponents
    ],
    imports: [
        CommonModule,
        ScoresRoutingModule        
    ]
})
export class ScoresModule {

}