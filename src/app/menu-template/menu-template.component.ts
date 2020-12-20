import { User } from './../model/User';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from './../service/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-template',
  templateUrl: './menu-template.component.html',
  styleUrls: ['./menu-template.component.css']
})
export class MenuTemplateComponent implements OnInit {
user =new User();
  constructor(private tokenStorageService: TokenService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.user=this.tokenStorageService.getUser();
  }
  logout() {
    this.tokenStorageService.ignOut();
  window.location.replace('/home');

  }
}
