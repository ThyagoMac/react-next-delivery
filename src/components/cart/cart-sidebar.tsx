"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/stores/cart-store";
import { CartItem } from "./cart-item";

export const CartSideBar = () => {
  const { cart } = useCartStore((state) => {
    return state;
  });
  let subtotal = 0;
  let quantity = 0;

  cart.forEach((item) => {
    subtotal += item.quantity * item.product.price;
    quantity += item.quantity;
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          <ShoppingCart className="mr-2" />
          <p>Cart</p>
          {cart.length > 0 && (
            <div className="absolute flex size-5 bg-red-600 rounded-full -right-2 -top-2 text-white items-center text-xs ">
              <div className="text-center m-auto">{quantity}</div>
            </div>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Carrinho</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-5 my-3">
            {cart.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>

          <Separator className="my-4" />

          <div className="flex justify-between items-center text-xs">
            <div>Subtotal: </div>
            <div>$ {subtotal.toFixed(2)}</div>
          </div>

          <Separator className="my-4" />

          <div className="text-center">
            <Button disabled={cart.length === 0}>Continue</Button>
          </div>
        </SheetContent>
      </SheetContent>
    </Sheet>
  );
};
