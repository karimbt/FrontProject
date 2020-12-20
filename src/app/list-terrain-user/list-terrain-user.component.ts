import { Observable } from 'rxjs';
import { TokenService } from './../service/token.service';
import { TerrainService } from './../service/terrain.service';
import { Component, OnInit } from '@angular/core';
import { Terrain } from '../model/Terrain';

@Component({
  selector: 'app-list-terrain-user',
  templateUrl: './list-terrain-user.component.html',
  styleUrls: ['./list-terrain-user.component.css']
})
export class ListTerrainUserComponent implements OnInit {
listTerrain : Observable<Terrain[]>;
;
  constructor(private lc : TerrainService,private tokenStorage :TokenService) { }

  ngOnInit(): void {
this.afficher();
  }
  afficher()
  {
    this.listTerrain=this.lc.getTerrainUser(this.tokenStorage.getUser().id);
   // console.log(this.tokenStorage.getUser().id);
  }
  delete(id: number) {
    this.lc.delete(id)
      .subscribe(
        data => {
          console.log(data);
         // this.reloadData();
location.reload();
        },
        error => console.log(error));
  }
}
