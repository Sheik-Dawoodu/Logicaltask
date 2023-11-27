import { Component, OnInit } from '@angular/core';
import { count, interval } from 'rxjs';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bindings';
  constructor(private authservice:AuthService){}
ngOnInit(): void {
//  interval(1000).subscribe(count=>{
//   console.log(count);
//  })
}

login(){
  this.authservice.login()
  // alert("successfully")
  confirm('successfully')
  
}
logout(){
  this.authservice.logOut()
  // alert('thank you')
  confirm('Thank You')
}
}