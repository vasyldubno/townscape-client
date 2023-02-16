import lodash from 'lodash'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { HomePage } from '../components/Pages/HomePage'
import { Property } from '../types/PropertyType'
import { fetchApi } from '../utils/fetchApi'

interface HomeProps {
  properties: Property[]
}

export default function Home({ properties }: HomeProps) {
  return <HomePage properties={properties} />
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const purpose = context.query.purpose || 'for-sale'
  const areaMax = context.query.areaMax || '1000'
  const bathsMin = context.query.bathsMin || '2'
  const categoryExternalID = context.query.categoryExternalID || '16'
  const furnishingStatus = context.query.furnishingStatus || 'furnished'
  const maxPrice = context.query.maxPrice || '100000'
  const minPrice = context.query.minPrice || '10000'
  const rentFrequency = context.query.rentFrequency || 'monthly'
  const roomsMin = context.query.roomsMin || '2'
  const sort = context.query.sort || 'price-des'

  const propertyForSale = await fetchApi(
    `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&hitsPerPage=20&areaMax=${areaMax}&bathsMin=${bathsMin}&categoryExternalID=${categoryExternalID}&furnishingStatus=${furnishingStatus}&maxPrice=${maxPrice}&minPrice=${minPrice}&purpose=for-sale&rentFrequency=${rentFrequency}&roomsMin=${roomsMin}&sort=${sort}`
  )

  const propertyForRent = await fetchApi(
    `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&hitsPerPage=20&areaMax=${areaMax}&bathsMin=${bathsMin}&categoryExternalID=${categoryExternalID}&furnishingStatus=${furnishingStatus}&maxPrice=${maxPrice}&minPrice=${minPrice}&purpose=for-rent&rentFrequency=${rentFrequency}&roomsMin=${roomsMin}&sort=${sort}`
  )

  return {
    props: {
      properties: lodash.shuffle([
        ...propertyForSale?.hits,
        ...propertyForRent?.hits,
      ]) as Property[],
      query: context.query,
    },
  }
}
