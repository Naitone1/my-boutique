'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    data: {
        src : StaticImageData, 
        content : string,
        href: string
    }[]
}

const Galerie = ({data}: Props) => {

    return (
        <div className="columns-3">
            {data.map(img => {
                return <Image 
                    width={200} 
                    height={400} 
                    src={img.src} 
                    className="hover:drop-shadow-xl drop-shadow-lg rounded-lg mb-4" 
                    alt='test'
                    />
            })}
        </div>
    )
  
}

export default Galerie