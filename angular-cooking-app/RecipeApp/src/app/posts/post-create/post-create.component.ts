import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { PostsService } from "../posts.service";

export interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent {
  enteredTitle = "";
  enteredContent = "";
  categories: Category[] = [
    { value: 'vegan', viewValue: 'Vegan'},
    { value: 'meat', viewValue: 'Meatlover'}
  ];

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content, form.value.category);
    form.resetForm();
  }
}
