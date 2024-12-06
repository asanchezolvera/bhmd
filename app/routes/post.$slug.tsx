import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getPostBySlug } from "~/utils/posts.server";

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  if (!params.slug) {
    throw new Response("Not Found", { status: 404 });
  }

  const post = await getPostBySlug(params.slug);

  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }

  return { post };
};

export default function Post() {
  const { post } = useLoaderData<typeof loader>();
  const Component = useMemo(() => getMDXComponent(post.code), [post]);

  if (!post) {
    return <div>This is bad</div>;
  } else {
    return (
      <main>
        <section className="py-16">
          <div className="container">
            <article className="flex flex-col justify-start items-stretch max-w-4xl mx-auto">
              <div>
                <h1 className="text-3xl font-serif mb-4">
                  <span className="font-medium text-blue-900 mr-2">
                    {post.frontMatter.title}
                  </span>
                  <span className="text-slate-400 font-light">
                    {post.frontMatter.description}
                  </span>
                </h1>
                <div className="mb-4 italic font-serif text-slate-700">
                  By Beverly Hills MD
                  <span className="text-xs">
                    <sup>&#9415;</sup>
                  </span>{" "}
                  Staff
                </div>
              </div>
              <div className="w-full h-[420px] bg-slate-100 mt-4 mb-8 rounded-md shadow-lg"></div>
              <div className="prose mx-auto">
                <Component />
              </div>
            </article>
          </div>
        </section>
      </main>
    );
  }
}
