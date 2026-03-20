import { getcart } from "@/action/server/cart";
import DeleteButton from "@/Components/Buttons/DeleteButton";
import Link from "next/link";

const Page = async () => {
  const carts = await getcart();

  const totalPrice = carts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full md:w-11/12 max-w-7xl">
        <h1 className="text-3xl font-bold mb-10">
          Shopping Cart ({carts.length})
        </h1>

        {carts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-xl font-semibold mb-4">
              Your cart is empty
            </h2>
            <Link href="/">
              <button className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
                Go Shopping
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {carts.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col md:flex-row items-center gap-6 p-5 rounded-2xl border shadow-sm"
                >
                  <img
                    src={item.image}
                    className="w-28 h-28 object-cover rounded-xl"
                  />

                  <div className="flex-1 w-full">
                    <h2 className="text-lg font-semibold">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <DeleteButton id={item._id} />
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
              <h2 className="text-xl md:text-2xl font-bold">
                Total: ৳ {totalPrice.toFixed(2)}
              </h2>

              <Link href="/checkout">
                <button className="w-full md:w-auto bg-black text-white px-8 py-3 rounded-xl hover:opacity-90 transition">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;