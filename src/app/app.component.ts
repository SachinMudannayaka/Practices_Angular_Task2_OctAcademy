import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskTwoDirectives';
  userDetails:string='User Details';
  name!:string;
  email!:string;
  address!:string;



  userArray:Array<any>=[];
constructor(){}

  onKeyupper(){
this.userArray.push({
  "name":this.name,
  "email":this.email,
  "address":this.address
})
  }
deleteUser(index:any){
 this.userArray.splice(index,1);
}
}
