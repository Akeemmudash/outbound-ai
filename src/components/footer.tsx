function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="font-circular-std flex flex-col items-center justify-center gap-12 p-8">
      <div className="bg-black-text-variant-5 w-full max-w-[1280px] rounded-3xl text-center text-white">
        <div className="flex flex-col items-center space-y-8 px-4 py-8 lg:pt-[89px] lg:pb-[219px]">
          <div className="space-y-3 lg:w-[627px]">
            <h5 className="text-3xl font-bold lg:text-5xl lg:leading-[68px]">
              Want to take your business to the next level?
            </h5>
            <p className="text-white-text-variant-1 text-base leading-6 md:text-2xl md:leading-[32px] md:font-[450px]">
              Are you willing to take your business to the next level, register
              with us today.
            </p>
          </div>
          <button className="border-blue-border-variant-1 text-black-text-variant-3 mt-[12px] cursor-pointer rounded-xl border bg-white py-[12px] pr-[16px] pl-[24px]">
            Get Started
          </button>
        </div>
      </div>
      <p className="text-grey-text-variant-3 py-4 text-center text-base">
        © {year}, Powered by HNG12
      </p>
    </footer>
  )
}

export default Footer
