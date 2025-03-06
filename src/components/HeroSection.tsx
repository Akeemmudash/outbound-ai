import Image from "next/image"
import Link from "next/link"
import Button from "./ui/button"

const brandImages = [
  "logo2.svg",
  "logo3.svg",
  "logo4.svg",
  "logo5.svg",
  "logo6.svg",
  "logo7.svg",
  "logo8.svg",
  "logo9.svg",
]
const HeroSection = () => {
  return (
    <div className="bg-blue-40 relative overflow-hidden border p-6 md:max-h-[907px] lg:py-10 xl:px-20 2xl:max-h-[1400px]">
      <div className="flex h-full flex-col gap-10 md:flex-row md:justify-between xl:gap-[94px]">
        {/* text */}
        <div className="flex max-w-[675px] flex-col gap-20 md:w-[50%] md:py-[98px] xl:w-[60%] xl:gap-[168px]">
          <div className="gap-6 space-y-6 lg:space-y-8">
            <h1 className="text-black-text-variant-2 text-4xl font-bold sm:text-5xl md:text-4xl lg:text-5xl xl:text-[56px] xl:leading-16">
              Reach More Customers, Follow Up With Ease
            </h1>
            <p className="text-grey-text-variant-2 text-base lg:text-2xl lg:leading-10">
              This AI-powered calling solution helps you connect with customers
              effortlessly, track conversations in real-time, and never miss an
              opportunity.
            </p>

            {/* buttons */}
            <div className="mt-20 flex items-center gap-8 md:mt-0">
              <Button variant="secondary" size="lg" asChild>
                <Link href={"/login"}>
                  Get started
                  <Image
                    src="/images/arrow-right.svg"
                    alt="right arrow"
                    className=""
                    width={20}
                    height={20}
                  />
                </Link>
              </Button>

              <Link href="/" className="text-black-text-variant-2 text-base">
                Learn more
              </Link>
            </div>
          </div>

          {/* metrics */}
          <div className="flex items-start px-1">
            <div className="w-1/2 max-w-[221px] space-y-3">
              <h2 className="text-black-text-variant-3 text-xl font-extrabold lg:text-[32px]">
                2k+
              </h2>
              <p className="text-grey-text-variant-4 text-sm">
                Business Owners
              </p>
            </div>

            <div className="w-1/2 max-w-[221px] space-y-3">
              <h2 className="text-black-background-variant-4 text-xl font-extrabold lg:text-[32px]">
                20+
              </h2>
              <p className="text-grey-text-variant-4 text-sm">
                Countries Supported
              </p>
            </div>
          </div>
        </div>

        {/* image */}
        <div
          className="mx-auto aspect-[5/8] w-full max-w-sm justify-self-center bg-cover md:mx-0 md:w-[50%] md:max-w-[511px] xl:max-w-[800px] 2xl:max-h-[900px]"
          style={{ backgroundImage: 'url("/images/hero_image.png")' }}
        ></div>
      </div>

      {/* bottom banner */}
      <div className="bg-black-background-variant-4 absolute right-0 bottom-0 left-0 grid w-screen items-center py-6 md:-bottom-10 md:translate-y-2 md:bg-transparent">
        <div className="relative z-10 mx-auto flex w-full flex-wrap items-center justify-center gap-6 px-6 md:absolute md:justify-between md:gap-10 lg:-rotate-1 lg:gap-14 xl:px-[80px]">
          {brandImages.map((brandImage, index) => (
            <Image
              key={index}
              src={`/images/${brandImage}`}
              alt="brand image"
              width={40}
              height={40}
            />
          ))}
        </div>
        <Image
          src="/images/hero_banner_background.svg"
          alt="slanted rectangle"
          width={200}
          height={200}
          className="z-0 hidden w-full md:block"
        />
      </div>
    </div>
  )
}

export default HeroSection
