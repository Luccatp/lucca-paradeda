'use client'

import { FC, useState } from 'react'
import Button from './ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import { AlignRight, Menu } from 'lucide-react'

interface HamburguerMenuProps {
  options: {
    name: string
    href: string
    icon: React.ReactNode
  }[]
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
                <Link href={option.href}>
                  {option.name} 
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