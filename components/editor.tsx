"use client";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";

import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";

type Props = {
  onChange: (value: string) => void;
  initialData?: string;
  editable?: boolean;
};

export default function Editor({ onChange, initialData, editable }: Props) {
  const { edgestore } = useEdgeStore();
  const { resolvedTheme } = useTheme();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });
    return response.url;
  };
  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: initialData ? (JSON.parse(initialData) as PartialBlock[]) : undefined,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    },
    uploadFile: handleUpload,
  });
  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  );
}
