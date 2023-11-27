import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { BindingComponent } from './components/binding/binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { GuardService } from 'src/service/guard.service';
import { JavascriptLogicalComponent } from './components/javascript-logical/javascript-logical.component';


const routes: Routes = [
  {path:'',component:StringInterpolationComponent},
  {path:'binding',component:BindingComponent},
  {path:'eventBinding',component:EventBindingComponent,canActivate:[GuardService]},
  {path:'javascript-logical',component:JavascriptLogicalComponent},
  {path:'blog',loadChildren:()=> import('./blog/blog.module').then(m => m.BlogModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
