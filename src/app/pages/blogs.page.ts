import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { injectContentFiles } from '@analogjs/content';

import PostAttributes from '../post-attributes';

export const routeMeta: RouteMeta = {
  title: 'Blog Posts - Ankita Sood',
};

@Component({
  selector: 'app-blogs',
  imports: [RouterLink],
  template: `
    <div class="blogs-container">
      <h1>Blog Posts</h1>
      <p class="blogs-intro">Here are some of my thoughts on Angular, Design, and Frontend Development.</p>
      
      <div class="blog-list" *ngIf="posts.length > 0; else noPosts">
        <article class="blog-card" *ngFor="let post of posts; trackBy: trackBySlug">
          <div class="blog-content">
            <h2 class="blog-title">{{ post.attributes.title }}</h2>
            <p class="blog-excerpt">{{ post.attributes.description }}</p>
            <div class="blog-meta">
              <span class="blog-date">{{ formatDate(post.attributes.date) }}</span>
              <span class="blog-category" *ngIf="post.attributes.category">{{ post.attributes.category }}</span>
            </div>
            <a [routerLink]="['/blogs', post.attributes.slug]" class="blog-link">Read More →</a>
          </div>
        </article>
      </div>
      
      <ng-template #noPosts>
        <div class="no-posts">
          <div class="no-posts-content">
            <h2>📝 Coming Soon!</h2>
            <p>Blog posts will appear here once markdown files are added to the content directory.</p>
            <p class="no-posts-hint">Create markdown files in <code>src/content/</code> with frontmatter including <code>title</code>, <code>slug</code>, and <code>description</code>.</p>
          </div>
        </div>
      </ng-template>
    </div>
  `,
  styles: `
    .blogs-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem 0;
    }

    h1 {
      font-size: 2.5rem;
      color: var(--avocado-medium);
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .blogs-intro {
      font-size: 1.2rem;
      color: var(--text-secondary);
      margin-bottom: 3rem;
      text-align: center;
    }

    .blog-list {
      display: grid;
      gap: 2rem;
    }

    .blog-card {
      background: var(--content-bg);
      border-radius: 16px;
      border: 1px solid rgba(127, 176, 105, 0.2);
      transition: all 0.3s ease;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(127, 176, 105, 0.1);
    }

    .blog-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(127, 176, 105, 0.2);
      border-color: var(--lime-accent);
    }

    .blog-content {
      padding: 2rem;
    }

    .blog-title {
      font-size: 1.5rem;
      color: var(--avocado-dark);
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .blog-excerpt {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .blog-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      font-size: 0.9rem;
    }

    .blog-date {
      color: var(--avocado-medium);
    }

    .blog-category {
      background: var(--lime-accent);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-weight: 500;
    }

    .blog-link {
      color: var(--pit-brown);
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      transition: color 0.2s ease;
    }

    .blog-link:hover {
      color: var(--lime-accent);
    }

    .no-posts {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 300px;
    }

    .no-posts-content {
      text-align: center;
      padding: 3rem;
      background: var(--content-bg);
      border-radius: 16px;
      border: 2px dashed rgba(127, 176, 105, 0.3);
      max-width: 500px;
    }

    .no-posts-content h2 {
      color: var(--avocado-medium);
      margin-bottom: 1rem;
      font-size: 1.8rem;
    }

    .no-posts-content p {
      color: var(--text-secondary);
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    .no-posts-hint {
      font-size: 0.9rem;
      background: rgba(168, 208, 168, 0.1);
      padding: 1rem;
      border-radius: 8px;
      border-left: 3px solid var(--lime-accent);
    }

    .no-posts-hint code {
      background: var(--avocado-pale);
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      color: var(--avocado-dark);
    }

    @container main-content (max-width: 768px) {
      .blogs-container {
        padding: 1rem 0;
      }
      
      h1 {
        font-size: 2rem;
      }
      
      .blog-content {
        padding: 1.5rem;
      }
      
      .blog-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }

      .no-posts-content {
        padding: 2rem;
        margin: 0 1rem;
      }
    }
  `
})
export default class BlogsComponent {
  readonly posts = injectContentFiles<PostAttributes>();

  trackBySlug(index: number, post: any) {
    return post.attributes.slug;
  }

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