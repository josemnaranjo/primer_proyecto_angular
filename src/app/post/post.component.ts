// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
    posts:[any];
    error;

    constructor(private postService:PostService){
        // http.get(this.url)
        //     .subscribe(res => {
        //         // console.log(res)
        //         this.posts=<any>res;
        //     })
        postService.getPosts()
            .subscribe(res=>{
                this.posts=<any>res;
                error=> this.error=error;
            })
    };

    createPost(input:HTMLInputElement){
        const post={title:input.value};
        input.value='';
        // this.http.post(this.url,JSON.stringify(post))
        this.postService.createPost(post)
            .subscribe(res=>{
                post['id']=res['id'];
                this.posts.splice(0,0,post);
                error=> this.error=error;
            })
    }

}
