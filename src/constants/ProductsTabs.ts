import { ProductType } from "@/types/ProductType";

type Tab = {
  title: string;
  value: string;
  products: ProductType[];
};

export const ProductsTabs: Tab[] = [
  {
    title: "Sushi",
    value: "sushi",
    products: [],
  },
  {
    title: "Temaki",
    value: "temaki",
    products: [],
  },
  {
    title: "Combos",
    value: "pack",
    products: [],
  },
  {
    title: "Drinks",
    value: "drinks",
    products: [],
  },
];
