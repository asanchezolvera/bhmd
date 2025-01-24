import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { marked } from "marked";

@Component({
  selector: "app-blog",
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <article
        *ngFor="let post of posts"
        class="rounded-lg bg-white p-6 shadow-sm"
      >
        <h2 class="mb-4 text-xl font-bold">{{ post.title }}</h2>
        <div [innerHTML]="post.content"></div>
      </article>
    </div>
  `,
  standalone: true,
})
export class BlogComponent implements OnInit {
  posts: any[] = [];

  async ngOnInit() {
    // Placeholder for MDX content
    this.posts = [
      {
        title: "Welcome to our store",
        content: marked.parse("This is a sample blog post content."),
      },
    ];
  }
}
