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
import { CartItem } from "@/components/cart/cart-item";
import { useState } from "react";
import { CheckoutDialog } from "@/components/checkout/checkout-dialog";

export const CartSideBar = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { cart } = useCartStore((state) => state);

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
      <SheetContent aria-describedby={undefined} className="overflow-auto">
        <SheetHeader>
          <SheetTitle>Cart Summary</SheetTitle>
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
          <Button
            disabled={cart.length === 0}
            onClick={() => setIsCheckoutOpen(true)}
          >
            Continue
          </Button>
        </div>

        <CheckoutDialog
          open={isCheckoutOpen}
          onOpenChange={setIsCheckoutOpen}
        />
      </SheetContent>
    </Sheet>
  );
};
