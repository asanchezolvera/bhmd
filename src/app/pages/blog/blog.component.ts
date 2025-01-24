import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { marked } from 'marked';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <article *ngFor="let post of posts" class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-bold mb-4">{{ post.title }}</h2>
        <div [innerHTML]="post.content"></div>
      </article>
    </div>
  `
})
export class BlogComponent implements OnInit {
  posts: any[] = [];

  async ngOnInit() {
    // Placeholder for MDX content
    this.posts = [
      {
        title: 'Welcome to our store',
        content: marked.parse('This is a sample blog post content.')
      }
    ];
  }
}