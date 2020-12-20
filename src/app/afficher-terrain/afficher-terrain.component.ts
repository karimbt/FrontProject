import {User} from './../model/User';
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Terrain} from '../model/Terrain';
import {TokenService} from './../service/token.service';

@Component({
    selector: 'app-afficher-terrain',
    templateUrl: './afficher-terrain.component.html',
    styleUrls: ['./afficher-terrain.component.css']
})
export class AfficherTerrainComponent implements OnInit {
    @Input() terrain = new Terrain();
    @Input() type: string;
    @Input() price: number;
    @Input() endroit: string;
    @Output() notification = new EventEmitter<Terrain>();
    user1 = new User();

    constructor(private tokenStorage: TokenService) {
    }

    ngOnInit(): void {
        this.user1 = this.tokenStorage.getUser();
    }

    envoieNotification() {
        this.notification.emit(this.terrain);
    }

}
