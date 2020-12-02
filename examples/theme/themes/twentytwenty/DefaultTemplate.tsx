import { EntryHeader } from './components/EntryHeader';
import { Content, usePosts } from '@wpengine/headless';
import { DefaultLayout } from './layouts/DefaultLayout';

export const DefaultTemplate = () => {
  const posts = usePosts();
  return (
    <DefaultLayout>
      <main id="site-content" role="main">
        {posts &&
          posts.map((post) => (
            <article key={post.id} id={`post-${post.id}`}>
              <div className="post-inner">
                <EntryHeader
                  title={post.title}
                  single={false}
                  link={post.link}
                />
                <Content className="entry-content" html={post.excerpt} />
              </div>
            </article>
          ))}
      </main>
    </DefaultLayout>
  );
};