import { BlogCard, Button, Heading } from '../../../components/index.js';
import { articles } from '../../../data.js';

export function ArticlesSection() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head reveal">
          <Heading>
            Browse our news
            <br />& articles
          </Heading>
          <Button href="/blog" outline arrow={false}>
            Browse all articles
          </Button>
        </div>
        <div className="blog-feature-grid">
          <BlogCard a={articles[0]} featured />
          <div className="grid gap-10">
            {articles.slice(1, 3).map((article) => (
              <BlogCard a={article} key={article.slug} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
