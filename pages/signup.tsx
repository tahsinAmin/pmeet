import Head from 'next/head'
import React, { useRef, useState } from 'react'

export default function Signup() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<any>(null);

  async function handleSignup(){

    const resp = await fetch('http://localhost:3000/api/signup', {
       method: 'POST',
       headers: {
          'Content-Type': 'application/json'
       },
       body: JSON.stringify({
          name: nameRef.current?.value,
          email:emailRef.current?.value,
          password: passRef.current?.value
       })
    });
    const json = await resp.json();
    setMessage(json);
 }

  return (
    <div className="">
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Login as Index */}
      <main>
         {JSON.stringify(message)}
         <input type="text" placeholder="Name" ref={nameRef} className='border p-2'/>
         <input type="text" placeholder='email' ref={emailRef} className='border p-2'/>
         <input type="text" placeholder='password' ref={passRef} className='border p-2'/>
         <button onClick={handleSignup} className='border p-2' >Submit</button>
      </main>
      Or <a as="/login" href="/login">Log in</a>
    </div>
  )
}
