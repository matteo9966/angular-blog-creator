import { Injectable } from '@angular/core';
import { Post } from './post';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  private postUpdates = new Subject<Post[]>();
  private posts: Post[] = [];

  constructor(private http: HttpClient) { }

  getPosts() {
    // return[...this.posts];
    // this.postUpdates.next([...this.posts]);
    this.http.get<{ message: string, posts: Post[] }>('http://localhost:3000/api/posts')
      .subscribe((res) => {
        this.posts = res.posts;
        this.postUpdates.next([...this.posts]);
      });
  }

  getPost(id: string) {
    // return { ...this.posts.find(post => post._id === id) };
    //console.log(id);
    return this.http.get<{message:string, post: Post}>(`http://localhost:3000/api/posts/${id}`);
  }

  addPost(post: Post) {

    //this.posts.push(post);
    //this.postUpdates.next([...this.posts]);

    this.http.post('http://localhost:3000/api/posts', post)
      .subscribe((res) => {
        this.posts.push(post);
        this.postUpdates.next([...this.posts]);
      });
  }

  updatePost(post: Post) {
    this.http.put(`http://localhost:3000/api/posts/${post._id}`, post)
      .subscribe(() => {
        const updatedPosts = [...this.posts];
        const oldPostIndex = updatedPosts.findIndex(p => p._id === post._id)
        updatedPosts[oldPostIndex] = post;
        this.posts = updatedPosts;
        this.postUpdates.next([...this.posts]);
      });
  }

  deletePost(id: string) {
    this.http.delete(`http://localhost:3000/api/posts/${id}`)
      .subscribe((res) => {
        const updatedPosts = this.posts.filter(post => post._id !== id);
        this.posts = updatedPosts;
        this.postUpdates.next([...this.posts]);
      });
  }

  updatedPosts() {
    return this.postUpdates.asObservable();
  }
}
