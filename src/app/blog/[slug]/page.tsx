import { BlogPostCore } from "@/types";
import { micromark } from "micromark";
import Header from "./header";
import { fetchAPI } from "@/lib/strapi";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const filteredPosts = await fetchAPI("/posts", {
    filters: {
      slug: {
        $eq: params.slug,
      },
    },
  });
  const post = filteredPosts.data[0];

  return {
    title: post.attributes.title,
    description: post.attributes.description,
  };
}

export async function generateStaticParams(): Promise<Props["params"][]> {
  const posts = await fetchAPI("/posts");

  return posts.data?.map((post: BlogPostCore) => ({
    slug: post.attributes.slug,
  }));
}

const PostView = async ({ params }: Props) => {
  const filteredPosts = await fetchAPI("/posts", {
    filters: {
      slug: {
        $eq: params.slug,
      },
    },
  });
  const post = filteredPosts.data[0];

  return (
    <div className="pb-24 space-y-6">
      <Header
        title={post.attributes.title}
        date={post.attributes.publishedAt}
      />
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: micromark(post.attributes.content) }}
      />
    </div>
  );
};

export default PostView;
