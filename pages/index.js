import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
{/* Login as Index */}
      <main className="flex space-x-2"> 
        <Link as="/login" href="/login">
          <a>Log In</a>
        </Link>
        <Link as="/signup" href="/signup">
          <a>Sign Up</a>
        </Link>
      </main>
    </div>
  )
}
