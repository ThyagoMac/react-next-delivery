import { StepsType } from "@/types/StepsType";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  //setStep: (step: StepsType) => void;
  setStep: Dispatch<SetStateAction<StepsType>>;
};

export const CheckoutStepFinish = ({ setStep }: Props) => {
  return (
    <div>
      <div className="flex justify-between mt-8 gap-4">
        <Button
          variant={"ghost"}
          type="submit"
          onClick={() => setStep("address")}
        >
          previous step
        </Button>
        <Button type="submit">finish</Button>
      </div>
    </div>
  );
};
