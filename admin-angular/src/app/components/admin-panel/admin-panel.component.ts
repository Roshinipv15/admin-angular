import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './../../shared/token.service';
import { AuthStateService } from './../../shared/auth-state.service';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  isSignedIn!: boolean;
  role:any;
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
    this.role = this.authService.GetRole();
    console.log(this.role);
  }

    toggleMenu() {
      let toggle = document.querySelector('.toggle');
      let navigation = document.querySelector('.navigation');
      let main = document.querySelector('.main');
      toggle.classList.toggle('active');
      navigation.classList.toggle('active');
      main.classList.toggle('active');
    }

    signOut() {
      this.auth.setAuthState(false);
      this.token.removeToken();
      this.router.navigate(['login']);
    }


}
