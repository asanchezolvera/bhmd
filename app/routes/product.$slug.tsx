import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchProductBySlug } from "~/utils/supabase";
import ImageGallery from "~/components/ImageGallery";
import Rating from "~/components/Rating";
import Toggle from "~/components/Toggle";
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

  const discountPrice = (product.price * 0.8).toFixed(2);

  return (
    <main>
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-auto-rows-min lg:grid-rows-1 gap-4 items-start">
            {(product.image_url && (
              <ImageGallery src={product.image_url} />
            )) || <div className="w-full h-full bg-slate-100"></div>}
            <div className="py-2 lg:py-4 px-3 lg:px-6 flex flex-col justify-start items-start">
              <div className="pl-[2px] pr-2 relative mb-1">
                <div className="w-full h-2 bg-rose-50 absolute left-0 bottom-0 z-10"></div>
                <span className="uppercase text-xs text-blue-800 font-bold tracking-wider relative z-20">
                  {product.product_categories.name}
                </span>
              </div>
              <h1 className="text-3xl font-medium font-serif text-blue-900 mb-1">
                {product.name}
              </h1>
              <Rating rating={product.rating} isSmall={false} />
              <div className="flex justify-start items-center gap-2 mt-2">
                <p className="text-blue-900 font-medium text-lg">
                  ${product.price}
                </p>
                <span className="bg-slate-50 text-slate-600 rounded-sm px-2 py-1 text-xs">
                  Or pay ${discountPrice} with a FREE account.
                </span>
              </div>
              {(product.long_description && (
                <p className="text-slate-700 mt-2">
                  {product.long_description}
                </p>
              )) || (
                <p className="text-slate-700 mt-2">{product.description}</p>
              )}

              <hr className="my-4 w-full text-slate-200" />
              <OfferSelector price={product.price} />
              <div className="flex flex-col gap-1 w-full mt-4">
                <Toggle label="Product Details">
                  <div className="w-full p-4 bg-slate-50">
                    <p className="text-sm text-slate-600">
                      We ship and return all orders within 7 days. If you have
                      any questions, please contact us
                    </p>
                  </div>
                </Toggle>
                <Toggle label="Product Ingredients">
                  <div className="w-full p-4 bg-slate-50">
                    <p className="text-sm text-slate-600">
                      We ship and return all orders within 7 days. If you have
                      any questions, please contact us
                    </p>
                  </div>
                </Toggle>
                <Toggle label="Shipping & Returns">
                  <div className="w-full p-4 bg-slate-50">
                    <p className="text-sm text-slate-600">
                      We ship and return all orders within 7 days. If you have
                      any questions, please contact us
                    </p>
                  </div>
                </Toggle>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
