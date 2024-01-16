import Image from "next/image";
import Text from "../components/Text";
import myPic from "../images/illustration.png";
import EmailForm from "../components/EmailForm";

export default function Home() {
  return (
    <main>
      <section className="pt-10">
        <div className="container max-w-container p-safety relative">
          <div className="absolute left-[1.875rem] top-[-10.625rem] w-[39.375rem] h-[39.375rem] bg-primary blur-[12.5rem] opacity-15"></div>

          <div className="mb-[15rem] pt-[11.125rem] pl-4 relative flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-7 max-w-[43.5rem]">
              <Text
                classes="font-poppins text-text-h1 text-grey-98 tracking-[-0.0869rem]"
                text="Unlock valuable insights from subscription data"
                tag="h1"
              />

              <Text
                classes="font-roboto text-[1.25rem] text-grey-94 tracing-[0.0219rem] max-w-[35.875rem]"
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
              <Text
                classes="mb-3.5 font-poppins text-[8.5rem] leading-[8.5rem] font-[275] tracking-[-0.34rem] lining-nums proportional-nums title__nums"
                text="3x"
                tag="h2"
              />

              <Text
                classes="mb-8 font-roboto text-[1.5rem] font-[400] text-grey-98 tracking-[0.03rem]"
                text="Faster Analysis Cycles"
                tag="p"
              />

              <div className="mb-8 h-[0.0625rem] bg-white opacity-10"></div>

              <Text
                classes="font-roboto text-[1.125rem] font-[300] text-grey-94 tracking-[0.025rem]"
                text="Stop the tedium of manual subscription data review. Quickly access essential information from all subscriptions."
                tag="p"
              />
            </li>
            <li className="max-w-[21.125rem] w-full">
              <Text
                classes="mb-3.5 font-poppins text-[8.5rem] leading-[8.5rem] font-[275] tracking-[-0.34rem] lining-nums proportional-nums title__nums"
                text="10%+"
                tag="h2"
              />

              <Text
                classes="mb-8 font-roboto text-[1.5rem] font-[400] text-grey-98 tracking-[0.03rem]"
                text="Savings on Costs"
                tag="p"
              />

              <div className="mb-8 h-[0.0625rem] bg-white opacity-10"></div>

              <Text
                classes="font-roboto text-[1.125rem] font-[300] text-grey-94 tracking-[0.025rem]"
                text="Insights into both subscription data and expenditure lead to rapid, smart cost-cutting strategies."
                tag="p"
              />
            </li>
            <li className="max-w-[21.125rem] w-full">
              <Text
                classes="mb-3.5 font-poppins text-[8.5rem] leading-[8.5rem] font-[275] tracking-[-0.34rem] lining-nums proportional-nums title__nums"
                text="30"
                tag="h2"
              />

              <Text
                classes="mb-8 font-roboto text-[1.5rem] font-[400] text-grey-98 tracking-[0.03rem]"
                text="Day Setup"
                tag="p"
              />

              <div className="mb-8 h-[0.0625rem] bg-white opacity-10"></div>

              <Text
                classes="font-roboto text-[1.125rem] font-[300] text-grey-94 tracking-[0.025rem]"
                text="Implement swiftly with straightforward, no-code processes and ready-to-use integrations."
                tag="p"
              />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
