import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BookComponent } from './book/book.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    BookComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [BookComponent]
})
export class AppModule { }
