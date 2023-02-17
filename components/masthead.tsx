import React from "react";
import Image from 'next/image';
import { useCallback, useContext, useRef, useState } from 'react';
import { ScrollContext } from "../utils/scroll-observer";

const MastHead: React.FC = () => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const refContainer = useRef<HTMLDivElement>(null)
    const {scrollY} = useContext(ScrollContext)

    let progress = 0

    const {current: elContainer } = refContainer
    if(elContainer){
        progress = Math.min(1, scrollY/elContainer.clientHeight)
    }

    const handleImageLoaded = useCallback(() => {
        setImageLoaded(true)
    }, [])

    return (
        <div ref={refContainer} className="min-h-screen flex flex-col items-center justify-center
        sticky top-0 -z-10" style={{
            transform: `transformY(-${progress * 20}vh)`
        }}>
            <div className="absolute  object-cover opacity-10">
                <img src="/assets/header.jpg" alt="background"/>	
            </div>
            <div className={`flex-grow-0 pt-10 transition-opacity duration-1000 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <Image src="/assets/logo.png" width={128/3} height={114/3} alt="logo" />
            </div>
            <div className="font-bold p-12 z-10 text-lime-900 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-1 items-center justify-center flex-col">
                <h1 className="mb-6 text-2xl xl:text-3xl">IRC - Bem Estar</h1>
                <h2 className="mb-2 text-2xl xl:text-xl tracking-tight">
                    <span>O bom da vida é bem estar</span>
                </h2>
            </div>
            <div className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000
        ${
            imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'
        }`}>
                <Image onLoad={handleImageLoaded} src="/assets/arrow-down.png" width={145/3} height={75/3} alt="scroll-down"/>	
            </div>
        </div>
    )
}

export default MastHead