import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
    posts:[any];
    url='https://jsonplaceholder.typicode.com/posts'
    constructor(private http:HttpClient){
        http.get(this.url)
            .subscribe(res => {
                // console.log(res)
                this.posts=<any>res;
            })
    };

    createPost(input:HTMLInputElement){
        const post={title:input.value};
        input.value='';
        
        this.http.post(this.url,JSON.stringify(post))
            .subscribe(res=>{
                post['id']=res['id'];
                this.posts.splice(0,0,post);
            })
    }

}
