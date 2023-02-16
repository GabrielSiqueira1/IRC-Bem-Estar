import React from "react";
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    id: string 
    name: string
}

const Equipe: React.FC<Props> = ({ id, name}) => (
    <div>
        <Image className="p-5" src={`/assets/img/pessoas/face_${id}.png`} alt={name} width={1280} height={720}/>
        <div className="text-2x xl:text-3xl pt-5">{name}</div>
    </div>
)

export default Equipe