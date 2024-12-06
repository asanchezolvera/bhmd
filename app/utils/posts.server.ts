import { bundleMDX } from "mdx-bundler";
import * as path from "path";
import * as fs from "fs/promises";
import matter from "gray-matter";

export async function getPostBySlug(slug: string | undefined) {
  if (!slug) {
    return null;
  }

  const postsPath = path.join(process.cwd(), "app/posts");
  const filePath = path.join(postsPath, `${slug}.mdx`);

  let source: string;
  try {
    source = await fs.readFile(filePath, "utf-8");
  } catch (error) {
    return null;
  }

  const { content, data } = matter(source);
  const { code } = await bundleMDX({
    source: content,
  });

  return {
    code,
    frontMatter: data,
  };
}
