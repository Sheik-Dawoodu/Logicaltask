import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BindingComponent } from './components/binding/binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { JavascriptLogicalComponent } from './components/javascript-logical/javascript-logical.component';
import { SearchPipe } from './components/search.pipe';
import { FormArrayComponent } from './components/form-array/form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    BindingComponent,
    EventBindingComponent,
    JavascriptLogicalComponent,
    SearchPipe,
    FormArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
