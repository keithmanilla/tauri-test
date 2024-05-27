'use client'

import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri'

export default function Greet() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    invoke<string>('greet', { name: 'Next.js' })
      .then(result => setGreeting(result))
      .catch(console.error)
  }, [])

  // Necessary because we will have to use Greet as a component later.
  return (
    <div>
      <h1 className='text-6xl font-bold'>
        {greeting}
      </h1>
      <p className='mt-4 text-slate-300'>
        {'This is a Tauri Desktop Application powered by Rust and Next.js.'}
      </p>
      <p className='text-slate-300'>
        {'Styling engine used is TailwindCSS.'}
      </p>
    </div>
  );
}