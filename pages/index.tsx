import { shuffle } from 'lodash'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { HomePage } from '../components/Pages/HomePage'
import { Property } from '../types/PropertyType'
import { getData } from '../utils/getData'

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

interface HomeProps {
  properties: Property[]
  query: IProperty
}

export default function Home({ query }: HomeProps) {
  const [propertyList, setPropertyList] = useState<Property[] | null>(null)
  const router = useRouter()

  useEffect(() => {
    router.push({ query: { ...query } }, undefined, { shallow: true })
  }, [])

  useEffect(() => {
    setPropertyList(getData({ query: router.query }))
  }, [router.query])

  return (
    <>
      {propertyList ? (
        <HomePage properties={propertyList} />
      ) : (
        <p>LOADING...</p>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const areaMax = Number(context.query.areaMax) || 20000
  const bathsMin = Number(context.query.bathsMin) || 1
  const categoryExternalID = context.query.categoryExternalID || '16'
  const furnishingStatus = context.query.furnishingStatus || 'furnished'
  const maxPrice = Number(context.query.maxPrice) || 5000000
  const minPrice = Number(context.query.minPrice) || 10000
  const rentFrequency = context.query.rentFrequency || 'monthly'
  const roomsMin = Number(context.query.roomsMin) || 1
  const purpose = context.query.purpose || 'for-rent'
  const sort = context.query.sort || 'date-asc'

  // const properties = getData({
  //   query: {
  //     areaMax,
  //     bathsMin,
  //     maxPrice,
  //     minPrice,
  //     categoryExternalID,
  //     furnishingStatus,
  //     rentFrequency,
  //     roomsMin,
  //     purpose,
  //   },
  // })

  const defaultQuery = {
    areaMax,
    bathsMin,
    categoryExternalID,
    furnishingStatus,
    maxPrice,
    minPrice,
    purpose,
    rentFrequency,
    roomsMin,
    sort,
  }

  return {
    props: {
      // properties: shuffle(properties) as Property[],
      query: defaultQuery,
    },
  }
}
