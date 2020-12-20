import { ReserverComponent } from './reserver/reserver.component';
import { ModifierTerrainComponent } from './modifier-terrain/modifier-terrain.component';
import { ListTerrainUserComponent } from './list-terrain-user/list-terrain-user.component';
import { AfficherTerrainComponent } from './afficher-terrain/afficher-terrain.component';
import { AjoutTerrainComponent } from './ajout-terrain/ajout-terrain.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerrainDetailComponent } from './terrain-detail/terrain-detail.component';


const routes: Routes = [
  {path:'home',component: HomeComponent},
{path:'login',component: LoginComponent},
{path:'register',component:RegisterComponent},
{path:'ajouterTerrain',component:AjoutTerrainComponent},
{path:'home/detail/:id',component:TerrainDetailComponent},
{path:'listUser',component:ListTerrainUserComponent},
{path:'listUser/update/:id',component:ModifierTerrainComponent},
{path:'home/reserver/:id',component: ReserverComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
