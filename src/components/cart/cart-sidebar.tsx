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

export const CartSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <ShoppingCart className="mr-2" />
          <p>Cart</p>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Carrinho</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-5 my-3">
            <div>1.1</div>
            <div>1.2</div>
            <div>1.3</div>
            <div>1.4</div>
          </div>

          <Separator className="my-4" />

          <div className="flex justify-between items-center text-xs">
            <div>Subtotal: </div>
            <div>...</div>
          </div>

          <Separator className="my-4" />

          <div className="text-center">
            <Button>Continue</Button>
          </div>
        </SheetContent>
      </SheetContent>
    </Sheet>
  );
};
