import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

type Props = {
  product: ProductType;
};

export const ProductItem = ({ product }: Props) => {
  const { toast } = useToast();
  const handleAddButton = () => {
    console.log("pipi");
    toast({
      title: "Added to cart",
      description: product.name,
      action: <ToastAction altText="close">Close</ToastAction>,
    });
  };
  return (
    <div>
      <div className="rounded-md overflow-hidden">
        <Image
          width={286}
          height={214}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg">{product.name}</p>
        <p className="text-sm opacity-70">$ {product.price.toFixed(2)}</p>
        <Button variant="outline" onClick={handleAddButton}>
          Add
        </Button>
      </div>
    </div>
  );
};
