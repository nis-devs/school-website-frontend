import { BlogPostCore } from "@/types";
import { micromark } from "micromark";
import Header from "./header";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const post = await fetch(
    `http://127.0.0.1:1337/api/posts/${params.slug}`
  ).then((res) => res.json());

  return {
    title: post.data?.attributes.title,
    description: post.data?.attributes.description,
  };
}

export async function generateStaticParams(): Promise<Props["params"][]> {
  const posts = await fetch("http://127.0.0.1:1337/api/posts").then((res) =>
    res.json()
  );

  return posts.data?.map((post: BlogPostCore) => ({
    slug: post.attributes.slug,
  }));
}

const PostView = async ({ params }: Props) => {
  const url = `http://127.0.0.1:1337/api/posts?filters[slug][$eq]=${params.slug}`;
  const filteredPosts = await fetch(url).then((res) => res.json());
  const post = filteredPosts.data[0];

  return (
    <div className="pb-24 space-y-6">
      <Header title={post.attributes.title} date={post.attributes.publishedAt} />
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: micromark(post.attributes.content) }}
      />
    </div>
  );
};

export default PostView;
