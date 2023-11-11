'use client' 
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import {Button} from '../../components/ui/button'
import Link from 'next/link'
import { ChevronRightIcon } from 'lucide-react'

type Props = {
  title: string
  date: string
  description: string
  link : string
  img: string
  cat : string
}

const CardBlog = ({title, date, description, link, img, cat} : Props) => {
  return (
    <Card className='h-96 w-80'>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle >{title}</CardTitle>
        <CardDescription>{date}{cat}</CardDescription>
      </CardHeader>
      <CardContent className='h-5/6 mt-5'>
        <div className='static'>
            <img className="rounded-md -z-10" src={img} alt="" />
            <div className='z-10'>
                <p className='text-muted-foreground mt-2'>{description}</p>
                <Button asChild className='float-right mb-4 mt-2'>
                    <Link href={link}>
                        <ChevronRightIcon className="h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
      </CardContent>
  </Card>
  )
}

export default CardBlog