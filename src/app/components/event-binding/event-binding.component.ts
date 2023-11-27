import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  public name:string="SHEIK DAWOOD"
  public increseCount: number = 0;

  changedata(){
    this.name="Sheik dawood Angular team"
  }
  clickCount=0
   count(){
    this.clickCount++
   }


   addbtn(){
    this.increseCount++
   }

   lessbtn(){
    --this.increseCount
   }
  //  public operation(type: number) {
  //   // Addition
  //   if(type === 1) {
  //     this.increseCount++
  //   } else { // subtraction
  //     --this.increseCount
  //   }
  //  }
}