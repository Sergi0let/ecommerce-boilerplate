import { cn } from "@/lib/utils";
import Wrapper from "../Wrapper";
import ThemeToggler from "./ThemeToggler";

interface Props {
  className?: string;
}

const Navbar = ({ className = "" }: Props) => {
  return (
    <header className={cn("bg-blue-main", className)}>
      <Wrapper className="flex h-[56px] items-center justify-between px-4 lg:h-[72px]">
        <div className="text-accent-foreground text-4xl font-black">Logo</div>
        <ul className="hidden max-w-1/2 flex-1 items-center justify-between space-x-2 lg:flex">
          <li className="flex items-center">
            <span className="text-xs xl:text-sm">Доставка від 69 грн</span>
          </li>
          <li className="flex items-center">
            <span className="text-xs xl:text-sm">14 днів на повернення</span>
          </li>
          <li className="flex items-center">
            <span className="text-xs xl:text-sm">
              У вас за 2-7 робочих днів
            </span>
          </li>
        </ul>
        <div className="flex items-center">
          <span className="mr-4 hidden text-sm font-medium md:text-base lg:block">
            У нас завжди є що купити!
          </span>
          <ThemeToggler />
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
