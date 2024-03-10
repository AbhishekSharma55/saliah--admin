"use client";
import { type Editor } from "@tiptap/react";
import { Toggle } from "@/components/ui/toggle";
import {
  Bold,
  Heading2,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Heading1,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ToolbarProps {
  editor: Editor | null;
}

const headingList = [
  {
    Icon: Heading1,
    title: "H1",
  },
  {
    Icon: Heading2,
    title: "H2",
  },
  {
    Icon: Heading3,
    title: "H3",
  },
  {
    Icon: Heading4,
    title: "H4",
  },
  {
    Icon: Heading5,
    title: "H5",
  },
  {
    Icon: Heading6,
    title: "H6",
  },
];

const Toolbar = ({ editor }: ToolbarProps) => {
  if (!editor) return null;
  return (
    <div className="px-4 flex items-center border border-input bg-transparent rounded-br-none">
      <Toggle asChild size="sm">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Heading className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {headingList.map(({ title, Icon }, i) => (
              <DropdownMenuItem className="hover:bg-transparent" key={title}>
                <Toggle
                  onPressedChange={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleHeading({ level: (i + 1) as any })
                      .run()
                  }
                  size="sm"
                  className="w-full"
                  pressed={editor.isActive("heading", {
                    level: (i + 1) as any,
                  })}
                >
                  <Icon className="h-4 w-4" />
                </Toggle>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </Toggle>

      <Toggle
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
        size="sm"
        pressed={editor.isActive("bold")}
      >
        <Bold className="h-4 w-4" />
      </Toggle>

      <Toggle
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        size="sm"
        pressed={editor.isActive("italic")}
      >
        <Italic className="h-4 w-4" />
      </Toggle>

      <Toggle
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
        size="sm"
        pressed={editor.isActive("strike")}
      >
        <Strikethrough className="h-4 w-4" />
      </Toggle>

      <Toggle
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
        size="sm"
        pressed={editor.isActive("bulletList")}
      >
        <List className="h-4 w-4" />
      </Toggle>

      <Toggle
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
        size="sm"
        pressed={editor.isActive("orderedList")}
      >
        <ListOrdered className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default Toolbar;
