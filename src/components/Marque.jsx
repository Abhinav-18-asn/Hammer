import React from "react";

const quotes = [
  "Pure sound. Perfect fit. Unmatched clarity.",
  "Hear deeper. Feel closer. Sound perfected.",
  "Precision audio. Sleek style. True comfort.",
  "Immersive experience. Crystal clear.",
  "Studio quality. Everyday comfort.",
  "Pure sound. Bold design. Limitless vibe.",
  "Hear deeper. Feel closer. Sound perfected.",
  "Precision audio. Sleek style. True comfort.",
  "Immersive experience. Crystal clear.",
  "Studio quality. Everyday comfort.",
  "Pure sound. Bold design. Limitless vibe.",
  "Hear deeper. Feel closer. Sound perfected.",
  "Precision audio. Sleek style. True comfort.",
  "Immersive experience. Crystal clear.",
  "Studio quality. Everyday comfort."
];

const Marque = () => {
  return (
    <div className="relative w-full overflow-hidden py-12 max-h-screen ">
      {/* Top Marquee */}
      <div className="w-full flex items-center -rotate-3">
        <div className="flex min-w-[200%] animate-marquee bg-zinc-400 p-2 gap-10 whitespace-nowrap">
          {[...quotes, ...quotes].map((text, i) => (
            <p
              key={`top-${i}`}
              className="text-white text-sm sm:text-base md:text-xl font-semibold tracking-wide"
            >
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="w-full flex items-center -rotate-3 mt-8">
        <div className="flex min-w-[200%] animate-marquee-reverse bg-zinc-300 p-2 gap-10 whitespace-nowrap">
          {[...quotes.reverse(), ...quotes.reverse()].map((text, i) => (
            <p
              key={`bottom-${i}`}
              className="text-white text-sm sm:text-base md:text-xl font-semibold tracking-wide"
            >
              {text}
            </p>
          ))}
        </div>
      </div>


      <div className="w-full flex items-center -rotate-3 mt-10">
        <div className="flex min-w-[200%] animate-marquee bg-zinc-400 p-2 gap-10 whitespace-nowrap">
          {[...quotes, ...quotes].map((text, i) => (
            <p
              key={`top-${i}`}
              className="text-white text-sm sm:text-base md:text-xl font-semibold tracking-wide"
            >
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="w-full flex items-center -rotate-3 mt-8">
        <div className="flex min-w-[200%] animate-marquee-reverse bg-zinc-300 p-2 gap-10 whitespace-nowrap">
          {[...quotes.reverse(), ...quotes.reverse()].map((text, i) => (
            <p
              key={`bottom-${i}`}
              className="text-white text-sm sm:text-base md:text-xl font-semibold tracking-wide"
            >
              {text}
            </p>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Marque;