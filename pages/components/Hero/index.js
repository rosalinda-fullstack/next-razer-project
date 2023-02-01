export default function Hero() {
  return (
        <div className="relative px-6 lg:px-8 bg-center bg-hero_pattern bg-no-repeat bg-cover" >
          <div className="mx-auto max-w-full px-40   flex pt-20 pb-32 sm:pt-48 sm:pb-30">
            <div className='flex-auto w-64' >
              <div >
                <h1 className="uppercase font-Montserrat text-4xl font-bold text-white tracking-tight sm:text-6xl">
                  Supreme Wireless Immersion
                </h1>
                <p className="font-Montserrat mt-6 text-lg  pr-60 text-[#8B8383]">
                  When it comes to gaming immersion sound plays a critical role. It engages your sense of hearing to determine the atmosphere and mood, creating a lifelike experience that lets you truly embody your game character. Standing by this philosophy, we've build a  headset with THX Spatial Audio to bring you 360 positional sound, giving you greater spatial awareness. We've also added ergonomic design features to make this one of the most comfortable daily drivers for gaming. This is the Razer Nari.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-start">
                  <div
                    className="inline-block rounded-lg "
                  >
                    <img className='w-24' src="/razer-nari-chroma-logo.png/" />
                  </div>
                  <div
                    className="inline-block rounded-lg px-4 py-1.5"
                  >
                     <img className='w-24' src="/razer-nari-thx-logo.png/" />
                  </div>
                </div>
              </div >
            </div>
            <div className='flex-auto w-32'>
             <div className='relative'> 
             <img className='w-60 absolute right-0 top-[30rem]' src="/razer-nari-logo.svg/" />  
            </div>
            </div>
          </div>
        </div>
  )
}
