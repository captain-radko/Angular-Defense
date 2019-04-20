import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user: string;

  constructor(
    public authService: AuthService,
    private router: Router,
    public toastr: ToastrService
  ) { }

  ngOnInit() {
    this.user = localStorage.getItem('name');
  }

  logout() {
    this.authService.logout();
    
    this.router.navigate(['/user/login']);
    this.toastr.info("Logged out");
  }
}
