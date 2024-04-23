'use client;'

import { Image, Spacer, Text } from "@nextui-org/react";
import { title } from "@Ï/components/primitives";

export default function AlgorithmPage() {
    return (
        <div className='grid-cols-1 text-black'>

            <div className='grid-rows'>
                <p className="text-4xl justify-center my-40 py-0.5" css={{ fontFamily: "Poppins" }}>
                    About Us
                </p>
            </div>

            <div className='grid-rows'>
                <p className="justify-center font-normal text-lg text-justify" css={{ fontFamily: "Poppins" }}>
                    <b> dfkghdglkajdlkdj </b> 
                </p> <Spacer y={50} />

                <p className="text-2xl justify-center font-normal text-justify" css={{ fontFamily: "Poppins" }}>
                    Problem Statement
                </p> <br />

                <p className="justify-center font-normal text-lg text-justify" css={{ fontFamily: "Poppins" }}>
                    Given an image, can our machine identify the expression?
                </p> <Spacer y={50} />

                <p className="text-2xl justify-center font-normal text-justify" css={{ fontFamily: "Poppins" }}>
                    Methodology
                </p> <Spacer y={50} />

                {/* <Image
                    alt="NextUI hero Image"
                    src="AYRE.png"
                /> <Spacer y={50} /> */}

                <p className="justify-center font-normal text-lg text-justify" css={{ fontFamily: "Poppins" }}>
                </p> <br />

                <p className="justify-center font-normal text-lg text-justify" css={{ fontFamily: "Poppins" }}>
                    
                </p> <br />

                {/* <Image
                    alt="NextUI hero Image"
                    src="Segmentation.png"
                    isBlurred                    
                /> <Spacer y={50} /> */}

                <p className="justify-center font-normal text-lg text-justify" css={{ fontFamily: "Poppins" }}>
                </p> <br />

                {/* <Image
                    alt="NextUI hero Image"
                    src="Dual stream transofrmer.png"
                    className=""
                    isBlurred
                /> <Spacer y={50} /> */}

                <p className="justify-center font-normal text-lg text-justify" css={{ fontFamily: "Poppins" }}>
                </p> <br />

                {/* <Image
                    alt="NextUI hero Image"
                    src="Plutchik-wheel.png"
                    isBlurred
                /> <Spacer y={50} /> */}
            </div>
        </div >
    );
}