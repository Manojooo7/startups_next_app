"use client"
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SearchFromReset = () => {
        const reset = () =>{
            const form = document.querySelector(".search-form")
            if(form) form.reset()
        }
    
  return (
    <div>
        <Button type='reset' onClick={reset}>
            <Link href="/" className='search-btn text-white'>
               <X className='size-5' />
            </Link>
        </Button>
    </div>
  )
}

export default SearchFromReset