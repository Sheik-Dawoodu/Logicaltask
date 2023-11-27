import { Component, } from '@angular/core';

@Component({
  selector: 'app-javascript-logical',
  templateUrl: './javascript-logical.component.html',
  styleUrls: ['./javascript-logical.component.css']
})
export class JavascriptLogicalComponent { 

  nameList = [
    {name:'James',gender:'male',age:'25'},
    {name:'Christopher',gender:'male',age:'15'},
    {name:'Charles',gender:'female',age:'26'},
    {name:'Daniel',gender:'male',age:'27'},
    {name:'Matthew',gender:'male',age:'79'},
    {name:'Anthony',gender:'female',age:'36'},
    {name:'Mark',gender:'female',age:'17'},
    {name:'Donald',gender:'male',age:'12'},
    {name:'Steven',gender:'female',age:'77'},
    {name:'Andrew',gender:'male',age:'27'},
    {name:'Paul',gender:'male',age:'47'},
    {name:'Joshua',gender:'female',age:'79'},
    {name:'Kenneth',gender:'female',age:'37'},
    {name:'Kevin',gender:'male',age:'42'},
    {name:'Brian',gender:'female',age:'15'},
    {name:'George',gender:'male',age:'10'},
    {name:'Timothy',gender:'female',age:'7'},
    {name:'Ronald',gender:'male',age:'2'},
    {name:'Jason',gender:'male',age:'5'},
    {name:'Edward',gender:'female',age:'8'},
    {name:'Jeffrey',gender:'male',age:'1'},
    {name:'Ryan',gender:'male',age:'7'},
    {name:'Jacob',gender:'female',age:'2'},
    {name:'Gary',gender:'male',age:'5'},
    {name:'Nicholas',gender:'female',age:'17'},
    {name:'Eric',gender:'female',age:'10'},
    {name:'Jonathan',gender:'female',age:'17'},
    {name:'Stephen',gender:'male',age:'78'},
    {name:'Larry',gender:'female',age:'75'},
    {name:'Justin',gender:'female',age:'85'},
    {name:'Scott',gender:'male',age:'95'},
    {name:'Brandon',gender:'male',age:'97'},
    {name:'Benjamin',gender:'female',age:'95'},
    {name:'Samuel',gender:'female',age:'92'},
    {name:'Gregory',gender:'male',age:'95'},
    {name:'Alexander',gender:'male',age:'15'},
    {name:'Patrick',gender:'female',age:'12'},
    {name:'Frank',gender:'female',age:'17'},
    {name:'Raymond',gender:'male',age:'12'},
    {name:'Jack',gender:'female',age:'27'},
    {name:'Dennis',gender:'male',age:'22'},
    {name:'Jerry',gender:'male',age:'25'},
    ];
    searchText:string=''
  
  }
