import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { injectContent, MarkdownComponent } from '@analogjs/content';

import PostAttributes from '../../post-attributes';

export const routeMeta: RouteMeta = {
  title: 'Blog Post - Ankita Sood',
};

@Component({
  selector: 'app-blog-post',
  imports: [MarkdownComponent],
  template: `
    <div class="blog-post-container">
      <article class="blog-post" *ngIf="post$ | async as post; else notFound">
        <header class="post-header">
          <h1 class="post-title">{{ post.attributes.title }}</h1>
          <div class="post-meta">
            <span class="post-date" *ngIf="post.attributes.date">
              {{ formatDate(post.attributes.date) }}
            </span>
            <span class="post-category" *ngIf="post.attributes.category">
              {{ post.attributes.category }}
            </span>
          </div>
          <p class="post-description" *ngIf="post.attributes.description">
            {{ post.attributes.description }}
          </p>
        </header>
        
        <div class="post-content">
          <analog-markdown [content]="post.content" />
        </div>
        
        <footer class="post-footer">
          <a routerLink="/blogs" class="back-link">← Back to Blog Posts</a>
        </footer>
      </article>
      
      <ng-template #notFound>
        <div class="not-found">
          <div class="not-found-content">
            <h1>📄 Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist or hasn't been created yet.</p>
            <a routerLink="/blogs" class="back-link">← Back to Blog Posts</a>
          </div>
        </div>
      </ng-template>
    </div>
  `,
  styles: `
    .blog-post-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 0;
    }

    .blog-post {
      background: var(--content-bg);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(127, 176, 105, 0.1);
      border: 1px solid rgba(127, 176, 105, 0.2);
    }

    .post-header {
      padding: 3rem 3rem 2rem;
      background: linear-gradient(135deg, rgba(168, 208, 168, 0.1) 0%, rgba(127, 176, 105, 0.1) 100%);
      border-bottom: 1px solid rgba(127, 176, 105, 0.2);
    }

    .post-title {
      font-size: 2.5rem;
      color: var(--avocado-dark);
      margin-bottom: 1.5rem;
      font-weight: 700;
      line-height: 1.2;
    }

    .post-meta {
      display: flex;
      gap: 1rem;
      align-items: center;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
    }

    .post-date {
      color: var(--avocado-medium);
      font-weight: 500;
    }

    .post-category {
      background: var(--lime-accent);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-weight: 500;
      font-size: 0.9rem;
    }

    .post-description {
      font-size: 1.2rem;
      color: var(--text-secondary);
      line-height: 1.6;
      font-style: italic;
    }

    .post-content {
      padding: 3rem;
    }

    .post-content :deep(h1),
    .post-content :deep(h2),
    .post-content :deep(h3),
    .post-content :deep(h4),
    .post-content :deep(h5),
    .post-content :deep(h6) {
      color: var(--avocado-dark);
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    .post-content :deep(p) {
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .post-content :deep(code) {
      background: rgba(168, 208, 168, 0.2);
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      color: var(--avocado-dark);
    }

    .post-content :deep(pre) {
      background: var(--guacamole-light);
      padding: 1.5rem;
      border-radius: 8px;
      overflow-x: auto;
      margin: 1.5rem 0;
      border-left: 4px solid var(--lime-accent);
    }

    .post-content :deep(blockquote) {
      border-left: 4px solid var(--lime-accent);
      padding-left: 1.5rem;
      margin: 1.5rem 0;
      font-style: italic;
      color: var(--text-secondary);
    }

    .post-footer {
      padding: 2rem 3rem;
      border-top: 1px solid rgba(127, 176, 105, 0.2);
      background: rgba(244, 242, 232, 0.3);
    }

    .back-link {
      color: var(--pit-brown);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.2s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .back-link:hover {
      color: var(--lime-accent);
    }

    .not-found {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 400px;
    }

    .not-found-content {
      text-align: center;
      padding: 3rem;
      background: var(--content-bg);
      border-radius: 16px;
      border: 2px dashed rgba(127, 176, 105, 0.3);
      max-width: 500px;
    }

    .not-found-content h1 {
      color: var(--avocado-medium);
      margin-bottom: 1rem;
      font-size: 2rem;
    }

    .not-found-content p {
      color: var(--text-secondary);
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    @container main-content (max-width: 768px) {
      .blog-post-container {
        padding: 1rem 0;
      }
      
      .post-header {
        padding: 2rem 2rem 1.5rem;
      }
      
      .post-title {
        font-size: 2rem;
      }
      
      .post-content {
        padding: 2rem;
      }
      
      .post-footer {
        padding: 1.5rem 2rem;
      }

      .not-found-content {
        margin: 0 1rem;
        padding: 2rem;
      }
    }
  `
})
export default class BlogPostComponent {
  readonly route = inject(ActivatedRoute);
  readonly post$ = injectContent<PostAttributes>({
    param: 'slug',
    subdirectory: 'blog'
  });

  formatDate(dateString: string): string {
    if (!dateString) return '';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  }
} 