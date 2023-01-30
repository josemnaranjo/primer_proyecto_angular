import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    url='https://jsonplaceholder.typicode.com/posts';

    constructor(private http:HttpClient) { }


    getPosts(){
    return this.http.get(this.url)
    };

    createPost(post){
    return this.http.post(this.url,JSON.stringify(post))
    };
}
