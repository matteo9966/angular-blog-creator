import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { CKEditorModule } from 'ckeditor4-angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PostViewComponent } from './post-view/post-view.component';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [PostCreateComponent, PostListComponent, PostViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    CKEditorModule,
    HttpClientModule,
    RouterModule
  ]
})
export class PostsModule { }
