import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AppProject';
  showFiller = false;
  isAuth:boolean = false;
  
  constructor(private shared:SharedService){
    shared.getUsername().subscribe((data) =>{
      if (data) {
        this.isAuth = true;
      } else{
        this.isAuth = false;
      }
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
