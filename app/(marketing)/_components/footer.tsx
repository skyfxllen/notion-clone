import React from "react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className='flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]'>
      <Logo />
      <div className='md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground'>
        <Button
          variant='ghost'
          size='sm'>
          Privace Policy
        </Button>
        <Button
          variant='ghost'
          size='sm'>
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
}
