import { Component, OnInit } from '@angular/core';
import { User } from './../model/User';
import { TransfertService } from './../service/transfert.service';
import { TokenService } from './../service/token.service';
import { LoginService } from './../service/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoginFailed = false;
isLogin=false;
  errorMessage = 'Invalide donne';
  roles: string[] = [];
  constructor(   private route: ActivatedRoute,
    private router: Router,private authService:LoginService,private tokenStorage : TokenService,private isLoggedIn:TransfertService ) {
      this.isLoggedIn.isLoggedIn=false;
      this.isLogin=this.isLoggedIn.isLoggedIn;

    }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    }
    onSubmit() {
      this.authService.login(this.form).subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;
        //  this.isLoggedIn.idUser=data.user.id;

          //console.log("hetha id"+this.isLoggedIn.idUser);

          this.isLoggedIn.isLoggedIn = true;
         this.isLogin=this.isLoggedIn.isLoggedIn;
          this.roles = this.tokenStorage.getUser().roles;
          window.location.replace('/home');

        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
    }

    reloadPage() {
    //
      this.router.navigate(['home']);

    }


}
