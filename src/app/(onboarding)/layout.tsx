import Image from "next/image"

export default function OnboardingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main
      className="h-screen w-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/onboarding-bg.svg')",
        backgroundColor: "#1E1E1EBF",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex h-dvh flex-col items-center justify-center space-y-20 px-[4.5%]">
        <Image
          src={"/images/Logo.svg"}
          width={284}
          height={72}
          alt=""
          draggable="false"
          tabIndex={-1}
          className="pointer-events-none h-15 w-[260px] select-none sm:h-[72px] sm:w-[284px]"
        />
        {children}
      </div>
    </main>
  )
}
