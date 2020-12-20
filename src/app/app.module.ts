import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuTemplateComponent } from './menu-template/menu-template.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AfficherTerrainComponent } from './afficher-terrain/afficher-terrain.component';
import { AjoutTerrainComponent } from './ajout-terrain/ajout-terrain.component';
import { TerrainDetailComponent } from './terrain-detail/terrain-detail.component';
import { ListTerrainUserComponent } from './list-terrain-user/list-terrain-user.component';
import { ModifierTerrainComponent } from './modifier-terrain/modifier-terrain.component';
import { ReserverComponent } from './reserver/reserver.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuTemplateComponent,
    LoginComponent,
    RegisterComponent,
    AfficherTerrainComponent,
    AjoutTerrainComponent,
    TerrainDetailComponent,
    ListTerrainUserComponent,
    ModifierTerrainComponent,
    ReserverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
