import Button from "../Button";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <header className="py-3.5">
      <div className="container max-w-container p-safety header__container flex items-center justify-end">
        <Navigation />
        <div className="max-w-[31.1875rem] w-full flex items-center justify-end gap-x-8">
          <Button
            classes="font-roboto text-grey-98 font-medium hover:text-primary-1 opacity-90 transition-colors ease-in-out"
            text="Contact Sales"
          />
          <Button
            classes="font-roboto py-[.375rem] px-[1.0625rem] text-text-15 text-black font-semibold tracking-[-0.0125rem] bg-grey-98 rounded-[2.5rem] hover:text-grey-98 hover:bg-primary-1 transition-colors"
            text="Book a Demo"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
