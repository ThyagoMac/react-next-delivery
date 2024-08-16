"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { CheckoutStepUser } from "./checkout-step-user";
import { CheckoutStepAddress } from "./checkout-step-address";
import { CheckoutStepFinish } from "./checkout-step-finish";

type StepsType = "user" | "address" | "finish";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CheckoutDialog = ({ open, onOpenChange }: Props) => {
  const [step, setStep] = useState<StepsType>("user");

  let progressPct = 0;
  switch (step) {
    case "user":
      progressPct = 30;
      break;
    case "address":
      progressPct = 60;
      break;
    case "finish":
      progressPct = 100;
      break;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {step === "user" && "Fill in your details "}
            {step === "address" && "Fill in delivery address "}
            {step === "finish" && "Finish and end to our WhatsApp "}
          </DialogTitle>
        </DialogHeader>
        <Progress value={progressPct} />
        <div className="flex flex-col gap-3 ">
          {step === "user" && <CheckoutStepUser setStep={setStep} />}
          {step === "address" && <CheckoutStepAddress setStep={setStep} />}
          {step === "finish" && <CheckoutStepFinish setStep={setStep} />}
        </div>
      </DialogContent>
    </Dialog>
  );
};
