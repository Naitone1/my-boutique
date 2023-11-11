interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
        <div className="mx-20 my-10">{children}</div>
    </>
  )
}
