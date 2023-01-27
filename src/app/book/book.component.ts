import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { retry } from 'rxjs';
import { Book } from '../book.model';
import { BookRepository } from '../repository.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

// export class BookComponent {
//     model:BookRepository=new BookRepository();
    
//     newBook:Book =new Book();
//     get jsonBook(){
//         return JSON.stringify(this.newBook)
//     }

//     addBook(b:Book){
//         console.log("El nuevo libro es "+ this.jsonBook)
//     }

//     formSubmit:boolean=false;
    

//     submitForm(form:NgForm){
//         // console.log(form)
//         this.formSubmit=true;
//         if(form.valid){
//             this.addBook(this.newBook);
//             this.newBook = new Book();
//             form.reset();
//             this.formSubmit=false;
//         }
//     }
    
    
//     book:Book=this.model.getBookId(1);
//     name:string="Pedro";
//     // addBook(){
//     //     this.model.addBook(new Book(4,"Crónica de una muerte anunciada","Gabriel Garcia Marquez",10000))
//     // }
    
//     deleteBook(book:Book){
//         this.model.deleteBook(book)
//     }

//     updateBook(book:Book){
//         book.name= "updated"
//     }

//     onClick(e:any){
//         console.log(e.target);
//     }

//     onKeyUp(){
//         console.log(this.name)
//     }

   
// }


//Reactive Form
export class BookComponent{

    bookForm= new FormGroup({
        name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    
        writer:new FormControl('',Validators.required),
    
        price:new FormControl('',Validators.required),
    });

    get name(){
        return this.bookForm.get('name')
    }

    onSubmit(){
        console.log(this.bookForm.value)
    }



}
