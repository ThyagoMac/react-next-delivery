"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductsTabs } from "@/constants/ProductsTabs";
import { getAllProducts } from "@/services/ProductService";
import { ProductType } from "@/types/ProductType";
import { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
import { ProductsTabEmpty } from "@/components/products/products-tab-empty";
import { ProductItem } from "@/components/products/product-item";

export const ProductsTab = () => {
  const [tabs, setTabs] = useState(ProductsTabs);

  const fetchProducts = useCallback(async () => {
    try {
      const response: AxiosResponse = await getAllProducts();
      const products = response.data;

      const updatedTabs = ProductsTabs.map((tab) => ({
        ...tab,
        products: products.filter(
          (product: ProductType) => product.category === tab.value
        ),
      }));
      setTabs(updatedTabs);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Tabs defaultValue="sushi">
      <TabsList className="flex">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} className="flex-1" value={tab.value}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} className="mt-6" value={tab.value}>
          {tab.products.length > 0 && (
            <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {tab.products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          )}

          {tab.products.length === 0 && <ProductsTabEmpty />}
        </TabsContent>
      ))}
    </Tabs>
  );
};
