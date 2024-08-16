type StepsType = "user" | "address" | "finish";

type Props = {
  setStep: (step: StepsType) => void;
};

export const CheckoutStepAddress = ({ setStep }: Props) => {
  return (
    <div>
      <div onClick={() => setStep("finish")}>finish</div>
    </div>
  );
};
