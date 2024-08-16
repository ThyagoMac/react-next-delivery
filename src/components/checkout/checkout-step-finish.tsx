type StepsType = "user" | "address" | "finish";

type Props = {
  setStep: (step: StepsType) => void;
};

export const CheckoutStepFinish = ({ setStep }: Props) => {
  return (
    <div>
      <div onClick={() => setStep("user")}>user</div>
    </div>
  );
};
