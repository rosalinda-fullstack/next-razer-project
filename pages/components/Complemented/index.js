import React from "react";
import {cardDetails} from "./cardDetails"

export default function Complemented() {
    // const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    return (
        <>
            <div className="mx-auto bg-regal-blue px-40  pt-20 pb-32  sm:pb-30 text-center"> 
            <div className="max-w-7xl m-auto">
                <div>
                    <h2 class="text-font-green font-small font-Montserrat  leading-tight text-2xl mt-0 mb-2 uppercase font-semibold">Complemented by Comfort</h2>
                    <p className="text-font-gray font-Montserrat mt-6 text-lg ">
                        The Razer Nari is designed so that its immersive technology is complemented by comfortable features, letting you escape into game worlds for hours without strain.
                    </p>
                </div>
                <div>
                <div className="grid grid-cols-3 mt-20 mx-32">
                {cardDetails.map((cardDetail, i) => (
                    <div key={i} className="text-left mb-16">
                        <img src={cardDetail.src} className="w-14" />
                        <h3 className="text-white font-Montserrat mt-6 uppercase font-semibold">{cardDetail.productName}</h3>
                        <p className="text-font-gray font-Montserrat ">{cardDetail.description}</p>
                    </div>
                ))}
                </div>
                </div>
                </div>
            </div>
        </>
    )
}