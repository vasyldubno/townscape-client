import s from './Banner.module.scss'

import { FC, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import millify from 'millify'

import { Box, Typography } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified'
import LocalHotelIcon from '@mui/icons-material/LocalHotel'
import BathroomIcon from '@mui/icons-material/Bathroom'
import { RxDividerVertical } from 'react-icons/rx'

import { motion, useInView } from 'framer-motion'
import { Property } from '../../types/PropertyType'

interface BannerPropd {
  item: Property
}

export const Banner: FC<BannerPropd> = ({ item }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: 0.1,
  })
  return (
    <>
      <motion.div ref={ref}>
        <div
          className={
            isInView
              ? 'scale-100 opacity-100 transition-all duration-300'
              : 'scale-0 opacity-0'
          }
        >
          <Link
            href={`/property/${item.externalID}`}
            className="grid justify-items-stretch"
          >
            <Box className="flex flex-col justify-between ">
              <Box className={s.image}>
                <Image
                  src={item.coverPhoto.url}
                  alt="photo"
                  fill
                  className="object-cover"
                />
              </Box>
              <Box>
                <Box className="flex my-2">
                  <Box className="flex">
                    {item.isVerified && <VerifiedIcon className="mr-2" />}
                  </Box>
                  <Typography>AED {millify(item.price)}</Typography>
                </Box>
                <Box className="flex items-center ">
                  {item.rooms} <LocalHotelIcon sx={{ ml: '0.25rem' }} />{' '}
                  <RxDividerVertical
                    style={{
                      display: 'inline',
                      strokeWidth: '1',
                      width: '2rem',
                    }}
                  />{' '}
                  {item.baths} <BathroomIcon sx={{ ml: '0.25rem' }} />{' '}
                  <RxDividerVertical
                    style={{
                      display: 'inline',
                      strokeWidth: '1',
                      width: '2rem',
                    }}
                  />{' '}
                  {millify(item.area)} sqft
                </Box>
              </Box>
            </Box>
          </Link>
        </div>
      </motion.div>
    </>
  )
}
