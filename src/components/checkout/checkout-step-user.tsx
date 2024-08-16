type StepsType = "user" | "address" | "finish";

type Props = {
  setStep: (step: StepsType) => void;
};

export const CheckoutStepUser = ({ setStep }: Props) => {
  return (
    <div>
      <div onClick={() => setStep("address")}>address</div>
    </div>
  );
};
