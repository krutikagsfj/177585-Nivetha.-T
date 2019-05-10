import { gameList } from './../ModelGameList/GameList.model';
import { Component, OnInit } from '@angular/core';

import {GameListService} from '../game-list.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
id:number         //initializing variable
gamelist:gameList
balance:number
display:string
  constructor(private successRoute:Router,private successService:GameListService) { }

  ngOnInit() {
    let gameId = localStorage.getItem('gameId');
   this.id=+gameId;
   
    if (this.id > 0) {
      // this.successService.getGameListById(this.id).subscribe(data =>this.gamelist=data
      // );
      this.successService.getGameListById(this.id).subscribe(data=>this.gamelist.game_amount=this.balance-this.gamelist.game_amount)
      // this.balance=this.balance-this.gamelist.game_amount
  }
  
}
getId(game:gameList){
this.successService.getGameListById(this.id).subscribe(data=>this.gamelist.game_amount=this.balance-this.gamelist.game_amount)
this.balance;
}}
