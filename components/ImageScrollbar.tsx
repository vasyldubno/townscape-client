import { Box } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs'
import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

interface ImageScrollBar {
  property: any
}

export const ImageScrollbar: FC<ImageScrollBar> = ({ property }) => {
  const settings = {
    indicators: false,
    scale: 1,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,

    // prevArrow: <BsArrowLeftSquare className="m-[200px]" />,
    // nextArrow: <BsArrowRightSquare className="m-[200px]" />,
  }
  return (
    <>
      <Box className="mt-5">
        <Zoom {...settings}>
          {property.photos.map((item: any, index: any) => (
            <Box
              className="flex justify-center h-[200px] sm:h-[400px] md:h-[500px]"
              key={index}
            >
              <Image
                src={item.url}
                // blurDataURL={item.url}
                alt="property"
                // width={1000}
                // height={700}
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
          ))}
        </Zoom>
      </Box>
    </>
  )
}
