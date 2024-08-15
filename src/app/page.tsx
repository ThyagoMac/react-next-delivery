import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductsSkeleton } from "@/components/products/products-skeleton";
import { ProductsTab } from "@/components/products/products-tab";
import { Suspense } from "react";

const Page = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Header />
      <div className="mx-3">
        {/* load a fallback until it's not loaded */}
        <Suspense fallback={<ProductsSkeleton />}>
          <ProductsTab />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
