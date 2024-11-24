import React from 'react'
import { Input } from '../ui/input'

import { KeyRound, Mail } from 'lucide-react'

export default function SignInForm() {
  return (
    <div className='flex items-center justify-center flex-col gap-2 w-80 h-48  sm:w-96 sm:h-64 border rounded-lg shadow-sm'>
    <h1 className='font-bold'>Login</h1>
    <div className='relative w-8/12'>
      <Input type='email' className='w-full border-2 border-black pl-10' placeholder='Email or Username' />
      <Mail className='absolute left-2 top-1/2 transform -translate-y-1/2' />
    </div>
    <div className='w-8/12 relative'>
    <Input type='password' className='w-full border-2 border-black pl-10' placeholder='Password' />
    <KeyRound className='absolute left-2 top-1/2 -translate-y-1/2' />
    </div>
  </div>
  )
}

