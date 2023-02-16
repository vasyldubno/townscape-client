import s from './Search.module.scss'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { filterData } from '../../utils/filterData'
import { Selected } from '../Select'

interface IProperty {
  areaMax: string
  bathsMin: string
  categoryExternalID: string
  furnishingStatus: string
  maxPrice: string
  minPrice: string
  purpose: string
  rentFrequency: string
  roomsMin: string
  sort: string
}

export const Search = () => {
  const router = useRouter()
  const [property, setProperty] = useState<IProperty>({
    areaMax: '',
    bathsMin: '',
    categoryExternalID: '',
    furnishingStatus: '',
    maxPrice: '',
    minPrice: '',
    purpose: '',
    rentFrequency: '',
    roomsMin: '',
    sort: '',
  })

  const handleButton = () => {
    router.push({ query: { ...property } })
  }

  useEffect(() => {
    handleButton()
  }, [property])

  return (
    <div className={s.wrapper}>
      <Box className={s.grid}>
        {filterData.map((item, index) => {
          return <Selected key={index} item={item} setProperty={setProperty} />
        })}
      </Box>
    </div>
  )
}
