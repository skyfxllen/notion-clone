"use client";
import Image from "next/image";
import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {};

export default function Documentspage({}: Props) {
  const { user } = useUser();
  const create = useMutation(api.documents.create);
  const router = useRouter();
  const onCreate = () => {
    const promise = create({ title: "Untitled Document" }).then((documentId) => {
      router.push(`/documents/${documentId}`);
    });

    toast.promise(promise, {
      loading: "creating a new document...",
      success: "new document created successfully",
      error: "creating a new document failed",
    });
  };
  return (
    <div className='h-full flex flex-col items-center justify-center space-y-4'>
      <Image
        src='/empty.png'
        height='300'
        width='300'
        alt='empty'
        className='dark:hidden'
      />
      <Image
        src='/empty-dark.png'
        height='300'
        width='300'
        alt='empty'
        className='hidden dark:block'
      />
      <h2 className='text-lg font-medium'>Welcome to {user?.firstName}&apos;s Jotion</h2>
      <Button onClick={onCreate}>
        <PlusCircle className='h-4 w-4 mr-2' />
        create a note
      </Button>
    </div>
  );
}
