import {Roles} from './../model/Roles';
import {User} from './../model/User';
import {TerrainService} from './../service/terrain.service';
import {Router, ActivatedRoute} from '@angular/router';
import {TokenService} from './../service/token.service';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Reservation} from '../model/Reservation';
import {Terrain} from '../model/Terrain';

@Component({
    selector: 'app-reserver',
    templateUrl: './reserver.component.html',
    styleUrls: ['./reserver.component.css']
})
export class ReserverComponent implements OnInit {
    ajout: FormGroup;
    us = new User();
    user = new User();
    roles: Roles[] = [];

    reservation = new Reservation();
    terrain = new Terrain();

    constructor(private token: TokenService, private router: Router, private sv: ActivatedRoute, private service: TerrainService) {
    }

    ngOnInit(): void {
        this.ajout = new FormGroup({
            date: new FormControl('', [Validators.required]),
            duree: new FormControl('', [Validators.required]),

        });
    }

    getTerrain() {
        this.service.getTerrainById(this.sv.snapshot.params.id).subscribe(
            data => {
                console.log(data);
                this.terrain = data;
            }, error => console.log(error)
        );
        return this.terrain;
    }

    usr() {
        this.user.id = this.token.getUser().id;
        this.user.nom = this.token.getUser().nom;
        this.user.prenom = this.token.getUser().prenom;
        this.user.email = this.token.getUser().email;
        this.user.username = this.token.getUser().username;
        this.user.roles = this.roles;
        return this.user;
    }

    onSubmit() {
        this.us = this.token.getUser();
        this.reservation.etat = 'non confirme';
        this.reservation.date = this.ajout.value.date;
        this.reservation.duree = this.ajout.value.duree;


        this.reservation.user = this.usr();
        this.reservation.terrain = this.getTerrain();
        console.log(this.reservation);
        this.service.createReservation(this.reservation)
            .subscribe(data => {
                console.log(this.reservation);

                this.router.navigate(['/listUser']);
            }, error => console.log(error));


    }

}
