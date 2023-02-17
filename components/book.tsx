import React from "react";
import Link from 'next/link'

interface Props{
    children?: React.ReactNode
}

export const BookContainer: React.FC<Props> = ({children}) => (
    <div className="grid grid-cols-1 lg:grid-cols-2">{children}</div>
)