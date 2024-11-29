import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchProductBySlug } from "~/utils/supabase";
import Rating from "~/components/Rating";
import AccordionItem from "~/components/AccordionItem";
import OfferSelector from "~/components/OfferSelector";

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  if (!params.slug) {
    throw new Response("Not Found", { status: 404 });
  }

  const product = await fetchProductBySlug(params.slug);

  return { product };
};

export default function ProductPage() {
  const { product } = useLoaderData<typeof loader>();

  return (
    <main>
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-2 grid-rows-1 gap-4">
            {(product.image_url && (
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-[640px] object-cover rounded-md"
              />
            )) || <div className="w-full h-full bg-slate-100"></div>}
            <div className="py-4 px-6 flex flex-col justify-start items-start">
              <Rating rating={product.rating} />
              <h1 className="text-2xl font-medium font-serif text-blue-900">
                {product.name}
              </h1>
              <p className="text-slate-700">{product.description}</p>
              <hr className="my-4 w-full text-slate-200" />
              <h2 className="mb-4 text-slate-700 font-medium">
                Make a selection:
              </h2>
              <OfferSelector price={product.price} />
              <div className="flex flex-col gap-1 w-full mt-4">
                <AccordionItem
                  label="Shipping & Returns"
                  details="We ship and return all orders within 7 days. If you have any questions, please contact us."
                />
                <AccordionItem
                  label="Shipping & Returns"
                  details="We ship and return all orders within 7 days. If you have any questions, please contact us."
                />
                <AccordionItem
                  label="Shipping & Returns"
                  details="We ship and return all orders within 7 days. If you have any questions, please contact us."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
