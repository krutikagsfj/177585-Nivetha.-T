import { gameList } from './ModelGameList/GameList.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
  gameListService:gameList[]
  url="http://localhost:3000/GameList"
  constructor(private httpService:HttpClient) { }
  getGameList(){
    return this.httpService.get<gameList[]>(this.url)
  }
  getGameListById(id:number){
    return this.httpService.get<gameList>(this.url)
  }
}
