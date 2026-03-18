import Banner from "@/Components/Home/Banner";
import Products from "@/Components/Home/Products";
import { authOptions } from "@/Components/lib/authOptions";
import Test from "@/Components/Test";
import { getServerSession } from "next-auth";

import Image from "next/image";

export default async function Home() {
  const session=await getServerSession(authOptions)
  return (
    <div className="space-y-20">
      <p>{JSON.stringify(session)}</p>
      <Test/>
      <section>
        <Banner/>
      </section>

      <section>
        <Products/>
      </section>
    </div>
  );
}
