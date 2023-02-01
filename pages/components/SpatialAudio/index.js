/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'



export default function SpatialAudio() {
  return (
        <div className="relative px-6 lg:px-8 bg-center bg-bg-spatial bg-no-repeat bg-cover" >
          <div className="mx-auto max-w-full px-40   flex pt-20 pb-32 sm:pt-48 sm:pb-30">
            <div className='flex-auto w-64' >
              <div >
                <h1 className="uppercase font-Montserrat text-4xl font-semibold text-font-green tracking-tight sm:text-2xl">
                  THX Spatial Audio
                </h1>
                <p className="font-Montserrat mt-6 text-lg  w-[50%] text-[#8B8383]">
                    THX Spatial Audio goes beyond traditional surround sound by simulating sound in a 360 sphere around you. With the Naru Ultimate, you can now react to any in-game movement, even if it's coming above ot beneath you, giving you heightened senses during your game. Unlease your predatory instincts with sound as a weapon.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-start">
                  <div
                    className="inline-block rounded-lg px-4 py-1.5"
                  >
                     <img className='w-24' src="/razer-nari-thx-logo.png/" />
                  </div>
                </div>
              </div >
            </div>
          </div>
        </div>
  )
}
