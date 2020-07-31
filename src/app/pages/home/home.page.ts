import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataAccessService } from 'src/app/services/data-access.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user;
  data;

  constructor(private router:Router, 
    private dataSvc:DataAccessService, 
    private authSvc:AuthenticationService) { 

      this.authSvc.getUser().subscribe(user => {
        this.user = user; 
        this.dataSvc.getAllListings().subscribe(result=>{
          console.log(result)
          this.data = result;
        })
      
       });
       

       
    }

  SignOut(){
         this.authSvc.SignOut();
       }

  ngOnInit() {
  }

}
