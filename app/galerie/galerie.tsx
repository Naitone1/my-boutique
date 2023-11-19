'use client'
import EditModal from '@/components/modals'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    data: {
        src : string, 
        content : string,
        href: string
    }[]
}

const Galerie = ({data}: Props) => {

    return (
        <div className="columns-3">
        {data.map(img => {
            return <EditModal 
                        icon={<Image 
                        width={200} 
                        height={400} 
                        src={img.src} 
                        className="hover:drop-shadow-xl drop-shadow-lg rounded-lg mb-4" 
                        alt='test'
                        />} 
                        ModalSubComp={<Image 
                        width={500} 
                        height={800} 
                        src={img.src} 
                        className="hover:drop-shadow-xl drop-shadow-lg rounded-lg mb-4" 
                        alt='test'
                        />}
                        title={img.content.toUpperCase()}/>
        })}
        </div>
    )
  
}

export default Galerie