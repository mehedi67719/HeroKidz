import { getcart } from "@/action/server/cart";
import DeleteButton from "@/Components/Buttons/DeleteButton";


const Page = async () => {
    const carts = await getcart();

    const totalPrice = carts.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="w-full flex justify-center py-10">
            <div className="w-11/12 max-w-7xl">
                <h1 className="text-3xl font-bold mb-10">
                    Shopping Cart ({carts.length})
                </h1>

                <div className="space-y-6">
                    {carts.map((item) => (
                        <div
                            key={item._id}
                            className="flex flex-col md:flex-row items-center gap-6 p-5 rounded-2xl border"
                        >
                            <img
                                src={item.image}
                                className="w-28 h-28 object-cover rounded-xl"
                            />

                            <div className="flex-1">
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                                <p className="text-sm text-gray-500">
                                    Quantity: {item.quantity}
                                </p>
                            </div>

                            <DeleteButton id={item._id} />
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex justify-between">
                    <h2 className="text-xl font-bold">
                        Total: ৳ {totalPrice.toFixed(2)}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Page;