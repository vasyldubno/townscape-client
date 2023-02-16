import { Box, Container, Typography } from '@mui/material'
import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { ImageScrollbar } from '../../components/ImageScrollbar'
import { fetchApi } from '../../utils/fetchApi'

interface PropertyProps {
  property: any
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context?.params?.id

  const data = await fetchApi(
    `https://bayut.p.rapidapi.com/properties/detail?externalID=${id}`
  )

  return {
    props: {
      property: data,
    },
  }
}

const Property = ({ property }: PropertyProps) => {
  console.log('property', property)

  return (
    <>
      <Head>
        <title>{property.title}</title>
      </Head>
      <Box>
        <ImageScrollbar property={property} />
      </Box>
      <Container maxWidth="lg">
        <Box>
          <Typography className="text-center my-5 font-bold text-lg md:text-3xl">
            {property.title}
          </Typography>
          <Typography
            dangerouslySetInnerHTML={{ __html: property.description }}
            className="flex flex-col gap-3 text-base md:text-2xl"
          ></Typography>
        </Box>
      </Container>
    </>
  )
}

export default Property
