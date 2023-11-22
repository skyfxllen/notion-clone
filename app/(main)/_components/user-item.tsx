"use client";

import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsLeftRight } from "lucide-react";
import { SignOutButton, useUser } from "@clerk/clerk-react";
type Props = {};

const UserItem = (props: Props) => {
  const { user } = useUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role='button'
          className='flex items-center text-sm p-3 w-full hover:bg-primary/5'>
          <div className='gap-x-2 flex items-center max-width-[150px]'>
            <Avatar className='h-5 w-5'>
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
            <span className='text-start font-medium line-clamp-1'>{user?.fullName}&apos;s Jotion</span>
          </div>
          <ChevronsLeftRight className='rotate-90 ml-2 text-muted-foreground h-4 w-4' />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-80'
        align='start'
        alignOffset={11}
        forceMount>
        <div className='flex flex-col space-y-4 p-2'>
          <p className='text-xs font-medium leading-none text-muted-foreground'>
            {user?.emailAddresses[0].emailAddress}
          </p>
          <div className='flex items-center gap-x-2'>
            <div className='rounded0md bg-secondary p-1'>
              <Avatar className='h-8 w-8'>
                <AvatarImage src={user?.imageUrl} />
              </Avatar>
            </div>
            <div className='space-y-1'>
              <p className='text-sm line-clamp-1'>{user?.fullName}&apos;s Jotion</p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          asChild
          className='w-full cursor-pointer'>
          <SignOutButton>Log out</SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserItem;