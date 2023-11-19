'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import { Button, buttonVariants } from "./ui/button"
import Link from "next/link"

export default function LoginBtn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="flex gap-4">
        <Link
          target="_blank"
          rel="noreferrer"
          href='#'
          className={buttonVariants({ variant: "outline" })}
        >
          {session?.user?.name}
        </Link>
      <Button variant={"secondary"}        onClick={() => signOut()}>
          Sign out
        </Button>
      </div>
    )
  }
  return (
    <div className="flex gap-4">
      <Link
          target="_blank"
          rel="noreferrer"
          href='/register'
          className={buttonVariants({ variant: "outline" })}
        >
          Créer un compte
        </Link>
      <Button className={buttonVariants({ variant: "default" } )} onClick={() => signIn()}>Sign in</Button>
    </div>
  )
}