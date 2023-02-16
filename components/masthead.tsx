import React from "react";
import Image from 'next/image';

const MastHead: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="absolute  object-cover opacity-10">
                <img src="/assets/header.jpg" alt="background"/>	
            </div>
            <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
                <Image src="/assets/logo.png" width={128/3} height={114/3} alt="logo" />
            </div>
            <div className="font-bold p-12 z-10 text-lime-900 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-1 items-center justify-center flex-col">
                <h1 className="mb-6 text-2xl xl:text-3xl">IRC - Bem Estar</h1>
                <h2 className="mb-2 text-2xl xl:text-xl tracking-tight">
                    <span>O bom da vida é bem estar</span>
                </h2>
            </div>
        </div>
    )
}

export default MastHead