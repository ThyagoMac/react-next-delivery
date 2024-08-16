import { StepsType } from "@/types/StepsType";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { useCheckoutStore } from "@/stores/checkout-store";
import Link from "next/link";
import { useGenerateMessage } from "@/lib/generate-message";

type Props = {
  //setStep: (step: StepsType) => void;
  setStep: Dispatch<SetStateAction<StepsType>>;
};

export const CheckoutStepFinish = ({ setStep }: Props) => {
  const { name } = useCheckoutStore((state) => state);

  const message = useGenerateMessage();
  const linkZap = `https://wa.me//${
    process.env.NEXT_PUBLIC_ZAP
  }?text=${encodeURI(message)}`;

  return (
    <div className="text-center flex flex-col gap-5">
      <p>
        Thank you <span className="font-bold">{name}</span>!
      </p>
      <p>Your order has been successfully recorded.</p>
      <p>Send your request via our WhatsApp.</p>

      <div className="flex justify-between mt-8 gap-4">
        <Button
          variant={"ghost"}
          type="submit"
          onClick={() => setStep("address")}
        >
          previous step
        </Button>
        <Button>
          {" "}
          <Link target="_blank" href={linkZap}>
            finish
          </Link>
        </Button>
      </div>
    </div>
  );
};
