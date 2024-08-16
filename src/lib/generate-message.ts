import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store";

export const useGenerateMessage = () => {
  const { name, address } = useCheckoutStore((state) => state);
  const { cart } = useCartStore((state) => state);

  let orderProducts: string[] = [];

  cart.forEach((item) => {
    orderProducts.push(`${item.quantity}x ${item.product.name}`);
  });

  return `**Customer Data:**
Name: ${name}
Addres: ${address.street}, ${address.number} (${address.complement})
${address.district}, ${address.city}/${address.state}
-------
**Order**
${orderProducts.join("\n")}
`;
};
