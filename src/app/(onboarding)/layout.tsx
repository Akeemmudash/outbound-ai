export default function OnboardingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <body
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/onboarding-bg.png')",
        backgroundColor: "#1E1E1EBF",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-6 md:gap-16 md:px-[4.5%]">
        <div
          className="h-[60px] w-[240px] md:h-[72px] md:w-[284px]"
          style={{
            backgroundImage: "url('/images/Logo.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
        {children}
      </div>
    </body>
  )
}
