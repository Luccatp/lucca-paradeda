'use client'

import { FC, useState } from 'react'
import Button from './ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import { AlignRight, Menu } from 'lucide-react'
import { MenuLinks } from '@/app/(landing)/page'

interface HamburguerMenuProps {
  options: MenuLinks[]
}

const HamburguerMenu: FC<HamburguerMenuProps> = ({options}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className='sm:hidden relative'>
      <div className='h-full w-min'>
        <AlignRight onClick={() => setIsOpen((prev) => !prev)} className='hover:cursor-pointer' color='white'/>
      </div>
      { isOpen ? (
        <div className='absolute inset-x-0 rounded-md border-2 -left-[550%] w-min bg-white p-8 z-10'>
          <div className='flex flex-col items-end space-y-8'>
            {options.map((option) => (
              <div  key={option.name} className='flex gap-2'>
                <Link href={option.href} target={option.aboutBlank ? '_blank' : '_self'} className='group transition duration-300'>
                  {option.name} 
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-950"></span>
                </Link>
                {option.icon && option.icon}
              </div>
            ))}
          </div>
        </div>
        ) : null}
    </div>
  )
}

export default HamburguerMenu