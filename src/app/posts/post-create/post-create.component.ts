import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  editMode: boolean = false;
  private postId: string;
  post: Post = { title: '', body: '' };

  constructor(private postService: PostService, public route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) { // the id passed in paramMap.has('id') has to be same as it define in routing module.
        this.editMode = true;
        this.postId = paramMap.get('id');
        this.postService.getPost(this.postId).subscribe((res: any) => {
          this.post = res.post;
        });
      } else {
        this.editMode = false;
        this.postId = null;
      }
    });
  }

  savePost(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      if (this.editMode) {
        const post = {
          _id: this.postId,
          title: form.value.title,
          body: form.value.body,
          likes: this.post.likes,
          dislikes: this.post.dislikes,
          comments: this.post.comments
        }
        this.postService.updatePost(post);
      } else {
        const post = {
          title: form.value.title,
          body: form.value.body
        }
        this.postService.addPost(post);
        form.reset();
      }
      this.router.navigate(['/']);
    }
  }
}
