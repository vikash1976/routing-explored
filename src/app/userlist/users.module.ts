import { ServicesModule } from './../services/services.module';

import { NgModule } from '@angular/core';

import { UserRoutingModule, userRoutingComponents } from './users.routing.module';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        userRoutingComponents
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        ServicesModule        
    ]
})
export class UsersModule {

}