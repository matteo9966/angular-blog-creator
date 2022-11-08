import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostViewComponent } from './posts/post-view/post-view.component';


const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'post-create', component: PostCreateComponent},
  {path: 'post-edit/:id', component: PostCreateComponent},
  {path: 'post-view/:id', component: PostViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
