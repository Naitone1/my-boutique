'use client'

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

interface Props {
  icon: JSX.Element,
  ModalSubComp:  JSX.Element,
}

export default function EditModal({icon, ModalSubComp} : Props) {

  return (
    <>
    <Dialog>
      <DialogTrigger>{icon}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ajouter un nouveau mouvement</DialogTitle>
          <DialogDescription>
          {ModalSubComp}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
    
    </>
  );
}
