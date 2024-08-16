import { StepsType } from "@/types/StepsType";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCheckoutStore } from "@/stores/checkout-store";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  setStep: Dispatch<SetStateAction<StepsType>>;
};

const formSchema = z.object({
  name: z.string().min(2),
});

export const CheckoutStepUser = ({ setStep }: Props) => {
  const { name, setName } = useCheckoutStore((state) => state);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setName(values.name);
    setStep("address");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input autoFocus placeholder="Name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between mt-8 gap-4">
          <div></div>
          <Button type="submit">next step</Button>
        </div>
      </form>
    </Form>
  );
};
