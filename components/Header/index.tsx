import Router from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '@mui/material'

export const Header = () => {
  return (
    <header className="max-w-[1440px] my-0 mx-auto mt-3 px-3">
      <Link href={'/'} className="flex items-center justify-center gap-5">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <Typography component={'h1'} className="text-3xl font-bold">
          TownScape
        </Typography>
      </Link>
    </header>
  )
}
