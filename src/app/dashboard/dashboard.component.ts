import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInleft} from '../router.animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [moveIn(),fallIn(),moveInleft()],
  host:{'[@moveIn]':''}
})
export class DashboardComponent implements OnInit {

  name:any;
  state:string='';

  constructor(public af:AngularFire,private router: Router) {
    this.af.auth.subscribe(auth=>{
      if(auth){
        this.name=auth;
      }
    });
  }
  logout(){
    this.af.auth.logout();
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
