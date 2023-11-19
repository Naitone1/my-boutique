'use client'
import React, {useState} from 'react'
import Galerie from './galerie'

type Props = {}

const SliderData = [
    {
        'src' : '/picture/1.jpg', 
        'content' : 'test',
        'href': '/',
        'galerie': 0
    },
    {
      'src' : '/picture/2.jpg',
      'content' : 'test2',
      'href': '/',
      'galerie': 0
    },
    {
      'src' : '/picture/3.jpg',
      'content' : 'test3',
      'href': '/',
      'galerie': 0
    },
    {
        'src' : '/picture/4.jpg',
        'content' : 'test5',
        'href': '/',
        'galerie': 0
    },
    {
        'src' : '/picture/5.jpg',
        'content' : 'test3',
        'href': '/',
        'galerie': 1
    },
    {
        'src' : '/picture/6.jpg',
        'content' : 'test3',
        'href': '/',
        'galerie': 1
    },
    {
        'src' : '/picture/7.jpg',
        'content' : 'test3',
        'href': '/',
        'galerie': 1
    },
    {
        'src' : '/picture/8.jpg',
        'content' : 'test3',
        'href': '/',
        'galerie': 1
    },
    {
        'src' : '/picture/11.jpg',
        'content' : 'test3',
        'href': '/',
        'galerie': 2
    },
    {
        'src' : '/picture/12.jpg',
        'content' : 'test3',
        'href': '/',
        'galerie': 2
    },
    {
        'src' : '/picture/13.jpg',
        'content' : 'test3',
        'href': '/',
        'galerie': 2
    },
    {
        'src' : '/picture/14.jpg',
        'content' : 'test3',
        'href': '/',
        'galerie': 2
    },
    {
        'src' : '/picture/15.jpg',
        'content' : 'test3',
        'href': '/',
        'galerie': 1
    },
    {
        'src' : '/picture/16.jpg',
        'content' : 'test3',
        'href': '/',
        'galerie': 2
    },
  ]

const GalerieContent = (props: Props) => {

    let [activeVal, setActiveVal] = useState(0)
    const classInit = 'border-l-2 mb-2 pl-2'
    const classActive = classInit+' font-bold'

  return (
    <div className="flex w-full gap-20 mt-10">
          <div className="w-20">
            <button onClick={() => setActiveVal(0)} className={activeVal === 0 ? classActive : classInit}>Venice</button>
            <button onClick={() => setActiveVal(1)} className={activeVal === 1 ? classActive : classInit}>Croatia</button>
            <button onClick={() => setActiveVal(2)} className={activeVal === 2 ? classActive : classInit}>Crete</button>
            <button onClick={() => setActiveVal(3)} className={activeVal === 3 ? classActive : classInit}>Toutes</button>
          </div>
          {activeVal === 0 && <Galerie data={SliderData.filter(e => e.galerie === activeVal)} />}
          {activeVal === 1 && <Galerie data={SliderData.filter(e => e.galerie === activeVal)} />}
          {activeVal === 2 && <Galerie data={SliderData.filter(e => e.galerie === activeVal)} />}
          {activeVal === 3 && <Galerie data={SliderData} />}
    </div>
)
}

export default GalerieContent