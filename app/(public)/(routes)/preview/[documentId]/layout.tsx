import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function PublicLayout({ children }: Props) {
  return <div className='h-full dark:bg-[#1F1F1F]'>{children}</div>;
}
