import { Cart } from "@/types/Cart";
import { ProductType } from "@/types/ProductType";
import { create } from "zustand";

type StatesType = {
  cart: Cart[];
};

type Actions = {
  upsertCartItem: (product: ProductType, quantity: number) => void;
};

const initialStates: StatesType = {
  cart: [],
};

export const useCartStore = create<StatesType & Actions>()((set) => ({
  ...initialStates,
  upsertCartItem: (product, quantity) =>
    set((state) => {
      let newCart = state.cart;

      //check if the cart have the product already
      let productIndex = newCart.findIndex(
        (cart) => cart.product.id === product.id
      );

      if (productIndex < 0) {
        //add new product in newcart with quantity 0
        newCart.push({ product, quantity: 0 });
        //add new product index in productIndex
        productIndex = newCart.findIndex(
          (cart) => cart.product.id === product.id
        );
      }

      //add quantity
      newCart[productIndex].quantity += quantity;

      if (newCart[productIndex].quantity <= 0) {
        newCart = newCart.filter((cart) => cart.product.id !== product.id);
      }

      return { ...state, cart: newCart };
    }),
}));
