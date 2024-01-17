import Image from "next/image";
import Text from "../Text/index";
import myPic from "../../images/illustration.png";
import EmailForm from "../EmailForm/index";

const HeroSection = () => {
  return (
    <section className="pt-10">
      <div className="container max-w-container p-safety relative">
        <div className="absolute left-[1.875rem] top-[-10.625rem] w-[39.375rem] h-[39.375rem] bg-primary-1 blur-[12.5rem] opacity-15 z-[-1]"></div>

        <div className="mb-[15.1rem] pt-[11.125rem] pl-4 relative flex flex-col gap-y-[2.4375rem]">
          <div className="flex flex-col gap-y-7 max-w-[43.5rem]">
            <Text
              classes="font-poppins text-[4.75rem] leading-[5.3438rem] text-grey-98 tracking-[-.0963rem]"
              text="Unlock valuable insights from subscription data"
              tag="h1"
            />

            <Text
              classes="font-roboto text-[1.25rem] text-grey-94 tracking-[.0125rem] opacity-55 max-w-[35.875rem]"
              text="Analyze your subscription ecosystem for cost optimization and risk management"
              tag="p"
            />
          </div>

          <EmailForm />

          <Image
            className="absolute top-[-6.25rem] right-[-6.25rem] max-w-[57.25rem] w-full z-[-1]"
            src={myPic}
            width={716}
            height={797}
            priority={false}
            alt="Acme Corp"
          />
        </div>

        <ul className="mb-[10rem] pl-[0.9375rem] flex items-center gap-x-[10.375rem]">
          <li className="max-w-[21.125rem] w-full">
            <div className="relative mb-[.6875rem] inline-block">
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-primary-2 opacity-30 blur-[6.25rem] rounded-full"></div>
              <Text
                classes="font-poppins text-[8.5rem] leading-[8.4rem] font-[275] tracking-[-0.34rem] lining-nums proportional-nums title-nums"
                text="3x"
                tag="h2"
              />
            </div>

            <Text
              classes="mb-[1.5rem] font-roboto text-[1.5rem] font-[400] text-grey-98 tracking-[0.03rem]"
              text="Faster Analysis Cycles"
              tag="p"
            />

            <div className="mb-[2.1875rem] h-[0.0625rem] bg-white opacity-10"></div>

            <Text
              classes="font-roboto text-[1.125rem] font-[300] text-grey-94 tracking-[0.025rem]"
              text="Stop the tedium of manual subscription data review. Quickly access essential information from all subscriptions."
              tag="p"
            />
          </li>
          <li className="max-w-[21.125rem] w-full">
            <div className="relative mb-[.6875rem] inline-block">
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-primary-2 opacity-30 blur-[6.25rem] rounded-full"></div>
              <Text
                classes="font-poppins text-[8.5rem] leading-[8.4rem] font-[275] tracking-[-0.34rem] lining-nums proportional-nums title-nums"
                text="10%+"
                tag="h2"
              />
            </div>

            <Text
              classes="mb-[1.5rem] font-roboto text-[1.5rem] font-[400] text-grey-98 tracking-[0.03rem]"
              text="Savings on Costs"
              tag="p"
            />

            <div className="mb-[2.1875rem] h-[0.0625rem] bg-white opacity-10"></div>

            <Text
              classes="font-roboto text-[1.125rem] font-[300] text-grey-94 tracking-[0.025rem]"
              text="Insights into both subscription data and expenditure lead to rapid, smart cost-cutting strategies."
              tag="p"
            />
          </li>
          <li className="max-w-[21.125rem] w-full">
            <div className="relative mb-[.6875rem] inline-block">
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-primary-2 opacity-30 blur-[6.25rem] rounded-full"></div>
              <Text
                classes="font-poppins text-[8.5rem] leading-[8.4rem] font-[275] tracking-[-0.34rem] lining-nums proportional-nums title-nums"
                text="30"
                tag="h2"
              />
            </div>

            <Text
              classes="mb-[1.5rem] font-roboto text-[1.5rem] font-[400] text-grey-98 tracking-[0.03rem]"
              text="Day Setup"
              tag="p"
            />

            <div className="mb-[2.1875rem] h-[0.0625rem] bg-white opacity-10"></div>

            <Text
              classes="font-roboto text-[1.125rem] font-[300] text-grey-94 tracking-[0.025rem]"
              text="Implement swiftly with straightforward, no-code processes and ready-to-use integrations."
              tag="p"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
