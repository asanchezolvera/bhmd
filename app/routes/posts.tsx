import { Link, useLoaderData } from "@remix-run/react";
import fs from "fs";
import matter from "gray-matter";
import { Post } from "~/types/types";

export const loader = async () => {
  const postsDirectory = "./app/posts";
  const files = fs.readdirSync(postsDirectory);

  const mdxPosts = files.filter((file) => file.endsWith(".mdx"));

  const postsData = mdxPosts.map((file) => {
    const filePath = `${postsDirectory}/${file}`;
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      ...data,
      slug: file.replace(".mdx", ""),
    };
  });

  return {
    posts: postsData as Post[],
  };
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div>
      {posts.map((post: Post) => (
        <Link to={`/post/${post.slug}`} key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </Link>
      ))}
    </div>
  );
}
