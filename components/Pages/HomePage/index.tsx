import s from './HomePage.module.scss'
import Head from 'next/head'
import { FC } from 'react'
import { Property } from '../../../types/PropertyType'
import { Banner } from '../../Banner'
import { Search } from '../../Search'

interface HomePageProps {
  properties: Property[]
}

export const HomePage: FC<HomePageProps> = ({ properties }) => {
  console.log('properties', properties)
  return (
    <>
      <Head>
        <title>TownScape</title>
      </Head>
      <Search />
      <div className={s.wrapperProperties}>
        {properties &&
          properties.map((item: any) => <Banner key={item.id} item={item} />)}
      </div>
    </>
  )
}
