import { TokenService } from './../service/token.service';
import { TerrainService } from './../service/terrain.service';
import { Component, OnInit } from '@angular/core';
import { Terrain } from '../model/Terrain';
import { Observable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listsTerrain : Terrain[];
listTerrain:  Observable<Terrain[]>;
type : string;
prix : number;
endroit:string;
  constructor(private lc: TerrainService,private tokenStorage :TokenService) { }

  ngOnInit(): void {
    this.afficherTerrainss();
  }
afficherTerrains()
{
  this.listTerrain=this.lc.getTerrains();
}
afficherTerrainss()
{
  this.lc.getTerrains().subscribe(data => {

console.log(data) ;
this.listsTerrain=data;
  }, error => console.log(error));
}

 incremtLike(t: Terrain){
    t.likes=t.likes+1;
    this.lc.incrementLike(t.id,t).subscribe(

      data => { console.log(data);}, error => console.log(error));

 }
}
