<<<<<<< HEAD
import Nav from "../components/ComingSoonNav";

const ComingSoon: React.FC = () => {
  return (
    <>
      <Nav />
      <main className="container flex h-full flex-col items-center justify-center pt-28 pb-14">
        <h1 className="mb-6 text-center text-2xl leading-tight font-bold md:text-4xl lg:text-5xl">
          Smarter Connections, Seamless Experiences
        </h1>
        <p className="mb-14 text-center text-lg leading-relaxed font-medium md:text-xl lg:text-2xl">
          Automating outbound calls with AI-driven efficiency.
        </p>
        <div className="mb-16">
          <video
            src="/coming-soon/glitch-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            width="800px"
            height="299px"
            className="max-h-[299px] rounded-xl object-cover"
          ></video>
        </div>
        <p className="text-center text-xl leading-tight font-bold text-gray-800 md:text-2xl lg:text-3xl">
          Be the first to know!
        </p>
        <p className="mb-10 text-center text-base leading-relaxed text-gray-800 sm:text-lg md:text-xl lg:text-2xl">
          Signup to get exclusive access when we launch
        </p>
        <form
          action=""
          className="flex w-11/12 flex-col items-center sm:w-[346px] xl:w-lg"
        >
          <input
            type="text"
            placeholder="Enter your email"
            className="border-silver focus:border-charcoal mb-6 w-full max-w-md rounded-lg border px-4 py-2.5 ring-0 focus:ring-0 focus:outline-0"
          />
          <button className="bg-charcoal hover:bg-primary mx-auto w-full cursor-pointer rounded-lg px-20 py-3 text-white transition duration-150 active:scale-[0.98] sm:w-auto">
            Notify
          </button>
        </form>
      </main>
    </>
  );
};
=======
import Image from "next/image"
import React from "react"
import img from "../../../public/comingSoonImg.svg"

const ComingSoon = () => {
  return (
    <div className="mb-44 flex flex-col items-center justify-center px-4 pt-20 md:px-8 lg:px-16">
      <h1 className="mb-6 text-center text-3xl leading-tight font-bold text-gray-800 md:text-4xl lg:text-5xl">
        Smarter Connections, Seamless Experiences
      </h1>
      <p className="mb-14 text-center text-lg leading-relaxed font-medium text-gray-800 md:text-xl lg:text-2xl">
        Automating outbound calls with AI-driven efficiency.
      </p>
      <Image src={img} alt="Coming Soon" className="mb-16 w-full max-w-md" />
      <p className="text-center text-xl leading-tight font-bold text-gray-800 md:text-2xl lg:text-3xl">
        Be the first to know!
      </p>
      <p className="mb-10 text-center text-lg leading-relaxed text-gray-800 md:text-xl lg:text-2xl">
        Signup to get exclusive access when we launch
      </p>
      <input
        type="text"
        placeholder="Enter your email"
        className="mb-6 w-full max-w-md rounded border border-gray-300 px-4 py-2"
      />
      <button className="rounded bg-black px-20 py-3 text-white">Notify</button>
    </div>
  )
}
>>>>>>> 318cd8f0dd9de2100fd4473f01121363f53a2af5

export default ComingSoon;
