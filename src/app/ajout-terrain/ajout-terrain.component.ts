import { User } from './../model/User';
import { Router } from '@angular/router';
import { TokenService } from './../service/token.service';
import { TerrainService } from './../service/terrain.service';
import { Component, OnInit } from '@angular/core';
import { Terrain } from '../model/Terrain';

@Component({
  selector: 'app-ajout-terrain',
  templateUrl: './ajout-terrain.component.html',
  styleUrls: ['./ajout-terrain.component.css']
})
export class AjoutTerrainComponent implements OnInit {
terrain = new Terrain();
us =new User();
  constructor(private lc : TerrainService,private tokenStorage:TokenService, private router: Router) { }

  ngOnInit(): void {
  }
  usReturn()
  {
this.us.id=this.tokenStorage.getUser().id;
this.us.email=this.tokenStorage.getUser().email;
this.us.prenom=this.tokenStorage.getUser().prenom;
this.us.nom=this.tokenStorage.getUser().nom;
return this.us;
  }
  ajouter()
  {
    this.terrain.user=this.usReturn();
    this.terrain.likes=0;
    this.lc.createTerrain(this.terrain).subscribe(
      data=>{
        console.log(data);
        this.terrain=new Terrain();
        this.router.navigate(['home']);

      },    error => console.log(error));

  }

}
