import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryComponent } from './story/story.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { BloghomeComponent } from './bloghome/bloghome.component';

const routes: Routes = [
  {path:'',component:BloghomeComponent,
children:[
   {path:'story',component:StoryComponent},
   {path:'puzzle',component:PuzzleComponent},]
},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
