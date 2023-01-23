import { Component } from '@angular/core';
import { Book } from '../book.model';
import { BookRepository } from '../repository.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {
    model:BookRepository=new BookRepository();
    book:Book=this.model.getBookId(1);
    name:string="Pedro";

    onClick(e:any){
        console.log(e.target);
    }

    onKeyUp(){
        console.log(this.name)
    }
}
