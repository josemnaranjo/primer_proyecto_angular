import { Book } from "./book.model";
import { dataSource } from "./dataSource.model";

export class BookRepository {
    private dataSource: dataSource;
    private books:Book[];

    constructor(){
        this.dataSource=new dataSource();
        this.books= new Array<Book>();
        this.dataSource.getBooks().forEach(b=>this.books.push(b))
    }
}