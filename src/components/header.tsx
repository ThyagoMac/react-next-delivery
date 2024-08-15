import { Logo } from "@/components/logo";
import { ThemeBtn } from "@/components/theme/theme-btn";
import { CartSideBar } from "@/components/cart/cart-sidebar";

export const Header = () => {
  return (
    <header className="flex justify-between items-center my-5 mx-3">
      <div className="flex items-center gap-4">
        <Logo />
        <ThemeBtn />
      </div>
      <div className="flex items-center gap-4">
        <CartSideBar />
      </div>
    </header>
  );
};
