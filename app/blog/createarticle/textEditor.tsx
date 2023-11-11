'use client'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm';
import {useState} from 'react'
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { PlusCircle, FileImage } from "lucide-react"
import { PostBlogPosts } from "@/hooks/BlogDataFetch"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

type Props = {}

const TextEditor = (props: Props) => {

    // const [file, setFile] = useState(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')



    let val = {
        slug: value,
        title: title,
        description: description,
        catSlug: 'test',
        userEmail: "test@test.com",
    }

    const onSubmit = async (val) => {
        console.log(val)
        toast.success('submited')
        await PostBlogPosts(val)
    }
    return (
        <div>
            <Input type="text" placeholder="Titre" className="text-xl h-18 border-none mb-2" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Input type="text" placeholder="Description" className="text-xl h-12 border-none" value={description} onChange={(e) => setDescription(e.target.value)} />
            <div className="my-4">
                <DropdownMenu>
                    <DropdownMenuTrigger><PlusCircle/></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <Label htmlFor="image" className="flex"><FileImage /> <span className="pt-2 pl-2">Image</span></Label>
                            {/* <Input className="hidden" type="file" id="image" onChange={e => setFile(e.target.files[0])} /> */}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Label htmlFor="video" className="flex"><FileImage /> <span className="pt-2 pl-2">Video</span></Label>
                            {/* <Input className="hidden" type="file" id="video" onChange={e => setFile(e.target.files[0])} /> */}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Label htmlFor="video" className="flex"><FileImage /> <span className="pt-2 pl-2">Fichier</span></Label>
                            {/* <Input className="hidden" type="file" id="video" onChange={e => setFile(e.target.files[0])} /> */}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className='display grid grid-cols-2 gap-2'>
                <Card>
                    <Textarea 
                        rows={50}
                        cols={50}
                        placeholder="Ecrivez votre article..."
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </Card>
                <Card>
                    <ReactMarkdown className="prose dark:prose-invert">
                        {value} 
                    </ReactMarkdown>
                </Card>
            </div>
            <Button className='mt-5 float-right' onClick={() => onSubmit(val)}>Soumettre</Button>
        </div>
    )
}

export default TextEditor