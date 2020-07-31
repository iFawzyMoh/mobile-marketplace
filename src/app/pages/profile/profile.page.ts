import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { DataAccessService } from 'src/app/services/data-access.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user;
  data;

    constructor(private router:Router, 
        private dataSvc:DataAccessService, 
        private authSvc:AuthenticationService) { 
    
          this.authSvc.getUser().subscribe(user => {
            this.user = user; 
            this.dataSvc.getProfile(this.user.uid).subscribe(result=>{
              console.log(result)
              this.data = result;
            })
          
           });
         
    }

    

  ngOnInit() {
  }

  SignOut(){
    this.authSvc.SignOut();
  }

  addProfile(){
    this.router.navigate(['edit-profile']);
  }

}