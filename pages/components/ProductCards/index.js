import { cardGridDetails } from "./CardGridDetails"
export default function ProductCards() {
    return (
        <>
            <div className="mx-auto bg-regal-blue px-40  pt-20 pb-32  sm:pb-30"> 
                <div className="max-w-7xl m-auto">
                    <div>
                        <h2 class="text-font-green font-small text-center font-Montserrat  leading-tight text-2xl mt-0 mb-2 uppercase font-semibold">Explore Other Products</h2>
                    </div>
                    <div className="flex gap-4"> 
                        {cardGridDetails.map((cards, i) => (
                                <div key={i} className=" bg-black ">
                                    <img  src={cards.src} alt="" />
                                <div className="p-5 bg-regal-blue border shadow-2xl border-b-2 border-b-font-green  border-t-transparent border-x-transparent  ">
                                        <h5 className=" font-Montserrat  mb-2 text-md font-semibold tracking-tight text-white dark:text-white">{cards.productName}</h5>
                                    <p class="mb-3 font-Montserrat font-normal text-font-gray dark:text-gray-400">{cards.description}</p>
                                    <a href="#" className=" font-Montserrat inline-flex items-center py-2 text-xs font-semibold text-center text-font-green uppercase">
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        ))}               

                    </div>            
                </div>
            </div>
        </>
    )
  }
  