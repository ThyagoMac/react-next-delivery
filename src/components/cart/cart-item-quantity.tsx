import { useCartStore } from "@/stores/cart-store";
import { Cart } from "@/types/Cart";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

type Props = {
  cartItem: Cart;
};

export const CartItemQuantity = ({ cartItem }: Props) => {
  const { upsertCartItem } = useCartStore((state) => state);

  const handlePlusBtn = () => {
    upsertCartItem(cartItem.product, 1);
  };
  const handleMinusBtn = () => {
    upsertCartItem(cartItem.product, -1);
  };

  return (
    <div className="flex content-between items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className="size-9"
        onClick={handlePlusBtn}
      >
        <PlusIcon className="size-4" />
      </Button>
      <div className="text-xs">{cartItem.quantity}</div>
      <Button
        variant="outline"
        size="icon"
        className="size-9"
        onClick={handleMinusBtn}
      >
        <MinusIcon className="size-4" />
      </Button>
    </div>
  );
};
