'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import img1 from "public/picture/1.jpg"
import img2 from "public/picture/2.jpg"
import img3 from "public/picture/3.jpg"
import img4 from "public/picture/4.jpg"
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Props = {
  data : {
    src : string, 
    content : string,
    href: string
  }[]
}

const ImgSlider = (props: Props) => {

    
    {
        // We will start by storing the index of the current image in the state.
        const [currentImage, setCurrentImage] = useState(0);
      
        // We are using react ref to 'tag' each of the images. Below will create an array of
        // objects with numbered keys. We will use those numbers (i) later to access a ref of a
        // specific image in this array.
        const refs = props.data.reduce((acc, val, i) => {
          acc[i] = React.createRef();
          return acc;
        }, {});
      
        const scrollToImage = (i:number) => {
          // First let's set the index of the image we want to see next
          setCurrentImage(i);
          // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
          // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
          // your current view! To do so we pass an index of the image, which is then use to identify our current
          // image's ref in 'refs' array above.
          refs[i].current.scrollIntoView({
            //     Defines the transition animation.
            behavior: 'smooth',
            //      Defines vertical alignment.
            block: 'nearest',
            //      Defines horizontal alignment.
            inline: 'start',
          });
        };
      
        // Some validation for checking the array length could be added if needed
        const totalImages = props.data.length;
      
        // Below functions will assure that after last image we'll scroll back to the start,
        // or another way round - first to last in previousImage method.
        const nextImage = () => {
          if (currentImage >= totalImages - 1) {
            scrollToImage(0);
          } else {
            scrollToImage(currentImage + 1);
          }
        };
      
        const previousImage = () => {
          if (currentImage === 0) {
            scrollToImage(totalImages - 1);
          } else {
            scrollToImage(currentImage - 1);
          }
        };
      
        // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
        const arrowStyle =
          'absolute text-white text-2xl z-10 h-10 w-10 opacity-75 flex items-center justify-center';
      
        // Let's create dynamic buttons. It can be either left or right. Using
        // isLeft boolean we can determine which side we'll be rendering our button
        // as well as change its position and content.
        const sliderControl = isLeft => (
          <button
            type="button"
            onClick={isLeft ? previousImage : nextImage}
            className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
            // style={{ top: '40%' }}
          >
            <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
              {isLeft ? <ChevronLeft className="text-primary"/> : <ChevronRight className="text-primary"/>}
            </span>
          </button>
        );
      
        return (
    <>
    {/* // Images are placed using inline flex. We then wrap an image in a div
        // with flex-shrink-0 to stop it from 'shrinking' to fit the outer div.
        // Finally the image itself will be 100% of a parent div. Outer div is
        // set with position relative, so we can place our cotrol buttons using
        // absolute positioning on each side of the image. */}
          <div className="ml-40 flex justify-center items-center overflow-y-hidden w-full pl-40">
            <div className="relative w-1/2 xl:w-1/4 ">
              <div className="flex rounded-lg gap-5">
                {props.data.map((img, i, index) => (
                  <div className="w-full flex-shrink-0 relative" key={index} ref={refs[i]}>
                    <a href='/galerie' className='text-white'>
                    <div className=''>
                      <Image width={200} height={400} src={img.src} className="hover:drop-shadow-xl drop-shadow-lg w-full rounded-lg " alt='Test'/>
                      <div className='absolute w-full rounded-lg -mt-20 h-20 pt-5 pl-5 bg-gradient-to-b from-slate-900/0 to-slate-900/90'>
                        <p>{img.content}</p>
                      </div>
                    </div>
                    </a>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
          <div className='w-40 absolute left-80 bottom-20'>
            {sliderControl(true)}
            {sliderControl(false)}
          </div>
          </>
        );
      };
}

export default ImgSlider



