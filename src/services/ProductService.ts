import { ProductType } from "@/types/ProductType";

export const getAllProducts = async (): Promise<ProductType[]> => {
  return [
    {
      id: 1,
      category: "sushi",
      name: "Sushi 1",
      image: "/images/sushi/sushi1.png",
      price: 49,
    },
  ];
};
