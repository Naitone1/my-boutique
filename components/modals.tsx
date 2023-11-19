'use client'

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Props {
  icon: JSX.Element,
  ModalSubComp:  JSX.Element,
  title: string
}

export default function EditModal({icon, ModalSubComp, title} : Props) {

  return (
    <>
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <DialogTrigger><TooltipTrigger>{icon}</TooltipTrigger></DialogTrigger>
            <TooltipContent>
            <p>🔍</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-5">{title}</DialogTitle>
          <DialogDescription>
          {ModalSubComp}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
    
    </>
  );
}


    

