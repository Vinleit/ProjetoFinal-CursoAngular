import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() Drawer:any;
  usuarioLogado:string = "";
  isAuth:boolean = false;

  constructor(private shared:SharedService, private router:Router){
    shared.getUsername().subscribe((data) =>{
      this.usuarioLogado = data;
      if (data) {
        this.isAuth = true;
      } else{
        this.isAuth = false;
      }
    })
  }

  ToogleMenu(){
    this.Drawer.toggle();
  }

  logOut(){
    this.shared.setUsername('');
    this.router.navigate(['login']);
  }
}
