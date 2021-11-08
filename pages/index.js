import Head from "next/head";
import { PostCard, PostWidget, Categories } from "../components";
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections";

export default function Home({ posts }) {
  return (
    <div className="container px-10 mx-auto mb-8">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Institute of Enginerring & Technology, Ayodhya : Blogs/Articles  --Homepage" />
        <meta name="author" content="Ayan Ansari" />
        <meta name="author" content="Ayan" />
        <meta property="og:site_name" content="Institute of Enginerring & Technology, Ayodhya : Blogs/Articles  --Homepage" />
        <meta property="og:type" content="Website" />
        <meta property="og:image" content="/metaimg.png" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>IET Blogs</title>
      </Head>

      <FeaturedPosts />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
