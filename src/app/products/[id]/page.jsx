
import { singleproducts } from "@/action/server/products";
import AddToCart from "@/Components/Buttons/AddtoCart";
import Image from "next/image";
import { FaStar } from "react-icons/fa";


export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const product = await singleproducts(id);

  if (!product) return { title: "Product not found" };

  return {
    title: product.title || "Hero Kidz Product",
    description: product.description?.slice(0, 150) || "Hero Kidz Product",
    openGraph: {
      title: product.title || "Hero Kidz Product",
      description: product.description?.slice(0, 150) || "Hero Kidz Product",
      url: `https://hero-kidz-i36h1sgye-mehedi67719s-projects.vercel.app/products/${id}`,
      siteName: "Hero Kidz",
      images: [
        {
          url: product.image.replace(".co.com", ".co"), 
          alt: product.title,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: product.title || "Hero Kidz Product",
      description: product.description?.slice(0, 150) || "Hero Kidz Product",
      images: [product.image.replace(".co.com", ".co")],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/products/${id}`,
    },
  };
}


const Page = async ({ params }) => {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const product = await singleproducts(id);

  if (!product) {
    return <div className="text-center py-20 text-xl">Product not found</div>;
  }

  const discountPrice = Math.round(
    product.price - (product.price * product.discount) / 100
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
       
          <div className="relative bg-white rounded-2xl shadow-xl p-6 border h-[450px] w-full">
            <Image
              src={product.image.replace(".co.com", ".co")}
              alt={product.title}
              fill
              style={{ objectFit: "cover", borderRadius: "1rem" }}
            />
          </div>

    
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              {product.title}
            </h1>
            <p className="text-gray-500 text-lg">{product.bangla}</p>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-yellow-500">
                <FaStar />
                <span className="font-semibold">{product.ratings}</span>
              </div>
              <span className="text-gray-400">({product.reviews} reviews)</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{product.sold} sold</span>
            </div>

            <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-4 w-fit">
              <span className="text-4xl font-bold text-primary">
                ৳{discountPrice}
              </span>
              <span className="line-through text-gray-400 text-xl">
                ৳{product.price}
              </span>
              <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                -{product.discount}%
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            
            <AddToCart />

        
            <div>
              <h2 className="text-xl font-semibold mb-3">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {product.info?.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border rounded-lg px-4 py-3 text-gray-600 shadow-sm"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Questions & Answers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {product.qna?.map((q, i) => (
              <div
                key={i}
                className="bg-white border rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <p className="font-semibold text-gray-800 mb-2">{q.question}</p>
                <p className="text-gray-600">{q.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;