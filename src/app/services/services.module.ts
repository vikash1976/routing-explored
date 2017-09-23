import { ScoresService } from './scores.service';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';



import { NgModule } from '@angular/core';


@NgModule({
    
    imports: [
        CommonModule
    ]

})
export class ServicesModule { 
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ServicesModule,
            providers: [ScoresService]
        }
    }
    
}




































/*static forRoot(): ModuleWithProviders {
        return {
            ngModule: ServicesModule,
            providers: [ScoresService]
        }
    }*/