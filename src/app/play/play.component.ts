
import { Component, OnInit } from '@angular/core';
import {GameListService} from '../game-list.service';
import { gameList } from '../ModelGameList/GameList.Model';
import {Router} from '@angular/router';
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  gameListData:gameList[]
  constructor(private playService:GameListService, private routePlay:Router) { }

  ngOnInit() {
  this.playService.getGameList().subscribe((playService:gameList[])=>this.gameListData=playService)
 
  }
  getGameId(gameList:gameList){
    localStorage.removeItem('gameId');
    localStorage.setItem('gameId',gameList.id.toString());
    this.routePlay.navigate(['app-success']);
  }

}
