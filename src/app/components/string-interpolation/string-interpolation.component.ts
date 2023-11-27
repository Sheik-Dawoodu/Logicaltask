import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
  name:string="SHEIK DAWOOD"
  value:string=""
  value1:string=""
  value2:string=""
  age:number=23
  getCity(){
    return 'Erode'
  }
}

