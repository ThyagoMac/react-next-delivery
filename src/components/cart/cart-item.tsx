import { CartType } from "@/types/CartType";
import Image from "next/image";
import { CartItemQuantity } from "@/components/cart/cart-item-quantity";

type Props = {
  item: CartType;
};

export const CartItem = ({ item }: Props) => {
  return (
    <div className="flex items-center gap-5">
      <div className="w-16 overflow-hidden">
        <Image
          width={68}
          height={48}
          src={item.product.image}
          alt={item.product.name}
          className="w-16 h-12 object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-md">{item.product.name}</p>
        <p className="text-xs opacity-70">$ {item.product.price.toFixed(2)}</p>
      </div>
      <div>
        <CartItemQuantity cartItem={item} />
      </div>
    </div>
  );
};
