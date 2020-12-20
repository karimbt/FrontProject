import { Roles } from './../model/Roles';
import { User } from './../model/User';
import { TokenService } from './../service/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TerrainService } from './../service/terrain.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Terrain } from '../model/Terrain';

@Component({
  selector: 'app-modifier-terrain',
  templateUrl: './modifier-terrain.component.html',
  styleUrls: ['./modifier-terrain.component.css']
})
export class ModifierTerrainComponent implements OnInit {
  detailForm :FormGroup;
terrain =new Terrain();
terrain2=new Terrain();
user= new User();
roles: Roles[] = [];

  constructor(private token:TokenService, private lc : TerrainService,private service :ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.detailForm=new FormGroup({
      type : new FormControl('',[Validators.required]),

      etat : new FormControl('',[Validators.required]),
       endroit : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z1-9]+$')]),
      prix : new FormControl('',[Validators.required])

      });
console.log(this.token.getUser());
this.getTerrain();
/************************ */



  }
  usr()
  {
this.user.id=this.token.getUser().id;
this.user.nom=this.token.getUser().nom;
this.user.prenom=this.token.getUser().prenom;
this.user.email=this.token.getUser().email;
this.user.username=this.token.getUser().username;
this.user.roles=this.roles;
return this.user;
  }
  onSubmit()
  {
    this.terrain.id=this.service.snapshot.params.id;
this.terrain.type=this.detailForm.value.type;
    this.terrain.etat=this.detailForm.value.etat;
    this.terrain.prix=this.detailForm.value.prix;
    this.terrain.endroit=this.detailForm.value.endroit;
  //  this.terrain.likes=0;

this.terrain.user=this.usr();

    this.lc.update(this.service.snapshot.params.id, this.terrain)
      .subscribe(data => {
  //      console.log(data);
        this.terrain = new Terrain();
       // console.log(this.detailForm.value.address);

        this.gotoList();
      }, error => console.log(error));

  }
  getTerrain()
  {
this.lc.getTerrainById(this.service.snapshot.params.id)
.subscribe(data => {
 // console.log(data);n
  this.terrain = data;
  this.terrain2=data;


}, error => console.log(error));
  }

  gotoList() {
    this.route.navigate(['/listUser']);
  }

}
