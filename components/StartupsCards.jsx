import { formateDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StartupsCards = ({post}) => {
  return (
    <li className='startup-card group'>
        <div className="flex-between">
            <p className='startup_card_date'>{formateDate(post._createdAt)}</p>
            <div className="flex gap-1.5">
                <EyeIcon className='size-6 text-primary'/>
                <span className='text-16-medium'>{post.views}</span>
            </div>
        </div>
        <div className="flex-between mt-5 gap-5">
            <div className="flex-1">
                <Link href={`/user/${post.author?._id}`}>
                    <p className='text-16-medium line-clamp-1'>{post.author.name}</p>
                </Link>
                <Link href={`/startups/${post._id}`}>
                    <h3 className='text-20-semibold line-clamp-1'>{post.title}</h3>
                </Link>
            </div>
        </div>
        <Link href={`/user/${post.author?._id}`}>
            <Image src="https://placehold.co/600*400" alt='placeholder' width={48} height={48} className='rounded-full'/>
        </Link>
    </li>
  )
}

export default StartupsCards