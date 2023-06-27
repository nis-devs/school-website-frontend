import { Metadata } from "next";
import FilteredPosts from "@/components/filtered-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read articles about our school, students and many different events happening in our community.",
};

async function getPosts() {
  const res = await fetch(
    "http://127.0.0.1:1337/api/posts?populate=*&sort=publishedAt:desc"
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const posts = await getPosts();

  return (
    <div className="pb-24">
      {posts.data.length > 0 ? (
        <div>
          <h1 className="my-4 text-4xl font-bold">Articles</h1>
          <p className="mb-8 text-gray-500">
            Here you can find articles of our school, mainly containing
            announcements, many different competitions and achievements of our
            students.
          </p>
          <FilteredPosts posts={posts} />
        </div>
      ) : (
        <p className="bg-gray-200 dark:bg-gray-800 mt-4 mb-8 rounded-xl px-8 py-4">
          Posts haven&apos;t been published yet.
        </p>
      )}
    </div>
  );
};

export default Blog;
