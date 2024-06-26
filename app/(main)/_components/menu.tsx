"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useUser } from "@clerk/clerk-react";

import { useMutation } from "convex/react";
import { MoreHorizontal, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

type Props = {
  documentId: Id<"documents">;
};

export default function Menu({ documentId }: Props) {
  const router = useRouter();
  const { user } = useUser();
  const archive = useMutation(api.documents.archive);
  const onArchive = () => {
    const promise = archive({ id: documentId });

    toast.promise(promise, {
      loading: "moving to trash",
      success: "moved to trash",
      error: "error",
    });
    router.push("/documents");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size='sm'
          variant='ghost'>
          <MoreHorizontal className='w-4 h-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-60'
        align='end'
        alignOffset={8}
        forceMount>
        <DropdownMenuItem onClick={onArchive}>
          <Trash className='h-4 w-4 mr-2' />
          Delete
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className='text-xs text-muted-foreground'>Last edited by: {user?.fullName}</div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
Menu.Skeleton = function MenuSkeleton() {
  return <Skeleton className='h-10 w-10' />;
};
