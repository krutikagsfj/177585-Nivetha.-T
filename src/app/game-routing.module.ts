import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {PlayComponent} from './play/play.component';
import {SuccessComponent} from './success/success.component'
export const gameRoute:Routes=[
  {path:'', component: PlayComponent,pathMatch:"full"},
  {path:'app-play', component: PlayComponent},
  {path:'app-success', component: SuccessComponent}
]
@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forRoot(gameRoute)
  ],
  exports:[RouterModule], 
  declarations: []
})
export class GameRoutingModule { }
