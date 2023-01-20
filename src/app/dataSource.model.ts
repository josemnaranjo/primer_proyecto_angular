import { Book } from "./book.model";

export class dataSource{
    private books: Book[];

    constructor(){
        this.books= new Array<Book>(
            new Book(1,"Cien años de soledad","Gabriel Garcia Marquez",15000),
            new Book(2,"Mala Onda","Alberto Fuguet",10000),
            new Book(3,"Cartero","Charles Bukowski",17000),
        );
    }
    getBooks():Book[]{
        return this.books;
    }
}