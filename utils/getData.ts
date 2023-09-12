import SALE from '../assets/sale.json'

type Props = {
  query: any
}

export const getData = (props: Props) => {
  const areaMax = Number(props.query.areaMax) || 20000
  const bathsMin = Number(props.query.bathsMin) || 1
  const categoryExternalID = props.query.categoryExternalID || '16'
  const furnishingStatus = props.query.furnishingStatus || 'furnished'
  const maxPrice = Number(props.query.maxPrice) || 5000000
  const minPrice = Number(props.query.minPrice) || 10000
  const rentFrequency = props.query.rentFrequency || 'monthly'
  const roomsMin = Number(props.query.roomsMin) || 1
  const purpose = props.query.purpose

  const propertiesForSale = SALE.filter(
    (item) =>
      item.area <= areaMax &&
      item.baths >= bathsMin &&
      item.category.some((item) => item.externalID === categoryExternalID) &&
      item.location.some((item) => item.externalID === '5002') &&
      item.furnishingStatus === 'furnished' &&
      item.price <= maxPrice &&
      item.price >= minPrice &&
      item.purpose === (purpose || 'for-sale') &&
      item.rooms >= roomsMin
  )
  const result = [...propertiesForSale]

  const sortedResult = () => {
    if (props.query.sort === 'price-asc') {
      return result.sort((a, b) => a.price - b.price)
    }

    if (props.query.sort === 'price-desc') {
      return result.sort((a, b) => b.price - a.price)
    }

    if (props.query.sort === 'date-asc') {
      return result.sort((a, b) => b.updatedAt - a.updatedAt)
    }

    if (props.query.sort === 'date-desc') {
      return result.sort((a, b) => a.updatedAt - b.updatedAt)
    }

    return result
  }

  return sortedResult()
}
