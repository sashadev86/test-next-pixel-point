import Image from "next/image";
import Text from "../components/Text";
import myPic from "../images/illustration.png";

export default function Home() {
  return (
    <main>
      <section className="pt-10">
        <div className="container max-w-container p-safety hero__container">
          <div className="pt-[11.125rem] pl-4 relative flex flex-col gap-y-10">
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

            <form>
              <input type="email" placeholder="email" />
            </form>

            <Image
              className="absolute top-[-6.25rem] right-[-6.25rem] m-w-[51.25rem] w-full z-[-1]"
              src={myPic}
              width={716}
              height={797}
              priority={false}
              alt="Acme Corp"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
