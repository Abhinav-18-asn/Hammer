import React from 'react'
const Marque = () => {
  const quote = [
    { text: "Pure sound. Perfect fit. Unmatched clarity.", color: "text-white" },
    { text: "Hear deeper. Feel closer. Sound perfected.", color: "text-white" },
    { text: "Precision audio. Sleek style. True comfort.", color: "text-white" },
    { text: "Immersive experience. Crystal clear.", color: "text-white" },
    { text: "Studio quality. Everyday comfort.", color: "text-white" },
    { text: "Pure sound. Bold design. Limitless vibe.", color: "text-white" }
  ]
  const reversedMessages = [...quote].reverse()
  return (
    <div>
<div className='mark1 flex items-center '>
<div className=" marquee-content whitespace-nowrap  -rotate-6 absolute -top-42 flex gap-10 items-center">
  {/* First set */}
  {quote.map((message, index) => (
    <h1 key={`first-${index}`} className={`${message.color} text-xl font-bold tracking-wide`}>
      {message.text}
    </h1>
  ))}
  {/* Duplicate for seamless loop */}
  {quote.map((message, index) => (
    <h1 key={`second-${index}`} className={`${message.color} text-xl font-bold tracking-wide`}>
      {message.text}
    </h1>
  ))}
</div>
</div>
<div className='mark2 absolute top-[48rem]'>
        <div className="marquee-content-reverse whitespace-nowrap absolute top-[26rem] rotate-7 flex gap-10 items-center">
          {reversedMessages.concat(reversedMessages).map((m, i) => (
            <h1 key={i} className={`${m.color} text-xl font- opacity-70 `}>
              {m.text}
            </h1>
          ))}
        </div>
      </div>

</div>

  )
}

export default Marque
