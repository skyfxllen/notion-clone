"use client";

import React, { useState, useEffect } from "react";
import { SettingsModal } from "../modals/settings-modal";
import CoverImageModal from "@/components/modals/coverImageModal";

type Props = {};

export default function ModalProvider({}: Props) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  );
}
