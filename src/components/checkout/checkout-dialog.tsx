import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CheckoutDialog = ({ open, onOpenChange }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>head</DialogTitle>
        </DialogHeader>
        <Progress value={66} />
        <div className="flex flex-col gap-3 ">
          <div>1</div>
          <div>12</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
