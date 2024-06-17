'use client'
import axios from 'axios'
import Head from 'next/head'
import { ReactNode } from 'react'

// layouts
import LayoutNotApp from 'src/views/layouts/LayoutNotApp'

export default function Home() {
  const fetchApiUser = async () => {
    await axios("")
  }
  return (
    <>
      <Head>
        <title>Lập trình thật dễ</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  )
}

Home.getLayout = (page: ReactNode) => <LayoutNotApp>{page}</LayoutNotApp>
Home.guestGuard = false
Home.authGuard = false
