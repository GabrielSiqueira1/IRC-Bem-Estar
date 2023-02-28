import React from "react";
import Image from "next/image";

const Treat: React.FC = () => {
    return (
        <section className={`bg-white h-half-screen xl:min-h-screen`}>
            <div className="absolute overflow-hidden opacity-50">
                <img src="/assets/treat.png" alt="background" />
            </div>
            <div className="font-bold p-12 z-10 text-black drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">
                <h2 className="text-2xl xl:text-5xl p-5 text-right">
                    <span className="bg-lime-300 pb-5 p-7 border-2 border-lime-500 outline-2 outline-offset-8 border-spacing-96">
                        Tratamentos
                    </span>
                </h2>
            </div>
        </section>
    );
};

export default Treat;
