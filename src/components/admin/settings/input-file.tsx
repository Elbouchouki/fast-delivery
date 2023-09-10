'use client';

import { Input } from "@/components/ui/input"
import { ClassDictionary } from "clsx"
 
export function InputFile(className: ClassDictionary | undefined) {
  return (
    <Input id="picture" type="file" {...className} />
  )
}