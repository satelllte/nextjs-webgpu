import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { ExternalLink } from '../components/ExternalLink'

const WebGPUExample = dynamic<{}>(
  () => import('../components/WebGPUExample').then(({ WebGPUExample }) => WebGPUExample),
  { ssr: false }
)

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.JS with WebGPU</title>
        <meta name="description" content="Next.JS with WebGPU" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='min-h-screen p-4 flex flex-col justify-between'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl text-center font-bold my-8 lg:my-12'>
          Welcome to <ExternalLink href="https://nextjs.org">Next.js</ExternalLink> with WebGPU!
        </h1>
        <section className='flex-1 flex justify-center items-center'>
          <WebGPUExample/>
        </section>
      </main>
    </>
  )
}

export default Home
