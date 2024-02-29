import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import {HttpclientService} from './httpclient.service'; 


import {HttpClientModule} from '@angular/common/http';
import { CommentsComponent } from './comments/comments.component' 

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HttpclientComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  
  ],
  providers: [HttpclientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
