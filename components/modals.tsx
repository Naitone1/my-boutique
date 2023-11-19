'use client'

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

interface Props {
  icon: JSX.Element,
  ModalSubComp:  JSX.Element,
  title: string
}

export default function EditModal({icon, ModalSubComp, title} : Props) {

  return (
    <>
    <Dialog>
      <DialogTrigger>{icon}</DialogTrigger>
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
