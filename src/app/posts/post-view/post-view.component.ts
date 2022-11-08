import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  private postId: string;
  post: Post;

  constructor(private postService: PostService, public route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) { // the id passed in paramMap.has('id') has to be same as it define in routing module.
        this.postId = paramMap.get('id');
        this.postService.getPost(this.postId).subscribe((res: any) => {
          this.post = res.post;
        });
      }
    });
  }

  deletePost(id: string) {
    this.postService.deletePost(id);
  }

  likePost(post: Post) {
    post.likes++;
    this.postService.updatePost(post);
  }

  dislikePost(post: Post) {
    post.dislikes++;
    this.postService.updatePost(post);
  }

  addComment(commentForm: NgForm) {
    if (commentForm.invalid) {
      return;
    } else {
      const comment = commentForm.value.comment;
      this.post.comments.push(comment);
      this.postService.updatePost(this.post);
      commentForm.reset();
    }

  }
}
