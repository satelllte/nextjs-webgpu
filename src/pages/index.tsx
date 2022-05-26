import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.JS with WebGPU</title>
        <meta name="description" content="Next.JS with WebGPU" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='min-h-screen p-4 flex flex-col justify-center'>
        <h1 className='text-4xl text-center font-bold'>
          Welcome to <a className='text-blue-600 hover:underline' href="https://nextjs.org">Next.js</a> with WebGPU!
        </h1>
      </main>
    </>
  )
}

export default Home
