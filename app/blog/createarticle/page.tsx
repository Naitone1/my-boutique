import { Card } from "@/components/ui/card"
import TextEditor from "./textEditor"


type Props = {}

const page = async (props: Props) => {
  
  return (
    <div className="mx-20 mt-2">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Votre nouvel article peut être rédigé ! </h1>
      <p className="text-lg text-muted-foreground">Votre histoire n'attend que vous</p>
        <Card className="p-5 my-4">
          <TextEditor />
        </Card>
    </div>
  )
}

export default page