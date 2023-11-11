'use client' 
import React from 'react'
import { Button } from '../../components/ui/button'
import Link from 'next/link'
import { PlusCircle } from 'lucide-react'

type Props = {}

const ButtonLink = (props: Props) => {
  return (
    <div className="rounded-md border-2 border-dashed border-slate-500 w-auto h-40 flex items-center justify-center">
    <Button>
      <Link href="/blog/createarticle">
        <PlusCircle />
      </Link>
    </Button>
  </div>
  )
}

export default ButtonLink