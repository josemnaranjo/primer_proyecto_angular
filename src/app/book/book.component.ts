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
    
    newBook:Book =new Book();
    get jsonBook(){
        return JSON.stringify(this.newBook)
    }

    addBook(b:Book){
        console.log("El nuevo libro es "+ this.jsonBook)
    }
    
    
    
    book:Book=this.model.getBookId(1);
    name:string="Pedro";
    // addBook(){
    //     this.model.addBook(new Book(4,"Crónica de una muerte anunciada","Gabriel Garcia Marquez",10000))
    // }
    
    deleteBook(book:Book){
        this.model.deleteBook(book)
    }

    updateBook(book:Book){
        book.name= "updated"
    }

    onClick(e:any){
        console.log(e.target);
    }

    onKeyUp(){
        console.log(this.name)
    }
}
