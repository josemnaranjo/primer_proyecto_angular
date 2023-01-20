import { Component } from '@angular/core';
import { BookRepository } from '../repository.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {
    model:BookRepository=new BookRepository();
}
