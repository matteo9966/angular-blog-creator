import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // this.posts = this.postService.getPosts();
    this.postService.getPosts();
    this.postService.updatedPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  deletePost(id: string) {
    this.postService.deletePost(id);
  }

  likePost(post: Post){
    post.likes++;
    this.postService.updatePost(post);
  }

  dislikePost(post: Post){
    post.dislikes++;
    this.postService.updatePost(post);
  }

}
