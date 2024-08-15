import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
/* import { ProductType } from "@/types/ProductType";
import { getAllProducts } from "@/services/ProductService"; */

export const ProductsTab = async () => {
  /*   const products: Promise<ProductType[]> = await getAllProducts;
  console.log('pipiproducts: ' products) */

  return (
    <Tabs defaultValue="tab1">
      <TabsList className="flex">
        <TabsTrigger className="flex-1" value="tab1">
          1
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="tab2">
          2
        </TabsTrigger>
      </TabsList>
      <TabsContent className="mt-6" value="tab1">
        tab1 blabla
      </TabsContent>
      <TabsContent className="mt-6" value="tab2">
        tab2 blabla
      </TabsContent>
    </Tabs>
  );
};
