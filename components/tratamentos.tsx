import React from "react";

const Tratamento: React.FC = () => {
    return (
        <div className="text-white bg-black">
            <div className="min-h-screen max-w-7xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-xl md:text-2xl lg:text-3xl tracking-tight font-semibold">
                <div>
                    <div className="text-center p-10 text-xl md:text-3xl">
                        Existem quatro tipos de tratamentos que podem ser:
                    </div>
                    <div className="font-light text-xl md:text-2xl grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
                        <div className="xl:mr-5">
                            <div className="bg-lime-500 text-black p-10 list-item">
                                <li>
                                    <p>
                                        <strong className="font-bold">
                                            Conservador e pré-dialítico:{" "}
                                        </strong>
                                        que consiste em retardar a progressão da
                                        doença, reduzindo a toxicidade urêmica,
                                        a dieta hipoproteica e com baixo teor de
                                        fósforo é recomendada para beneficar o
                                        paciente, de modo a evitar sintomas
                                        urêmicos;
                                    </p>
                                </li>
                            </div>
                            <div className="bg-lime-500 text-black pb-10 pt-3 px-10 mt-10 list-item">
                                <li className="mt-10">
                                    <p>
                                        <strong className="font-bold">
                                            Diálise Peritoneal:{" "}
                                        </strong>
                                        que consta em um procedimento no qual
                                        utiliza a membrana semipermeável do
                                        pertônio. Um catéter é implantado
                                        cirugicamente no abdome até a cavidade
                                        peritoneal. Um líquido dialisador rico
                                        em dextrose é infundido, e, por difusão,
                                        os produtos de excreção presentes no
                                        sangue são levados por osmose através da
                                        membrana peritoneal para o líquido
                                        dialisador. Esse líquido é retirado e
                                        descartado;
                                    </p>
                                </li>
                            </div>
                        </div>
                        <div className="xl:ml-5">
                            <div className="bg-lime-500 text-black pt-12 px-10 pb-24 list-item mt-10 xl:mt-0">
                                <li>
                                    <p>
                                        <strong className="font-bold">
                                            Hemodiálise:{" "}
                                        </strong>
                                        que resume-se em um tratamento mais
                                        comum, no qual o sangue passa pela
                                        membrana semipermeável do rim
                                        artificial;
                                    </p>
                                </li>
                            </div>
                            <div className="bg-lime-500 text-black pt-14 px-10 pb-32 list-item mt-10">
                                <li>
                                    <p>
                                        <strong className="font-bold">
                                            Transplante renal:{" "}
                                        </strong>
                                        é uma opção de tratamento para os
                                        pacientes que sofrem de doença renal
                                        crônica avançada, é considerado a mais
                                        completa alternatiava de substituição da
                                        função renal, tendo como principal
                                        vantagem a melhor qualidade de vida,
                                        pois o transplante renal garante mais
                                        liberdade na rotina diária do paciente.
                                    </p>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tratamento;
