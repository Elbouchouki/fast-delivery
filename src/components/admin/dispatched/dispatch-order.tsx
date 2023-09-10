"use client"

import * as React from "react"
import { cn } from "@/lib/utils";
import { Locale } from "@/i18n.config"
import { DictionaryEntry, PackedOrders } from "@/types"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AdminPackedOreders({ lang, dict, packedOrders }:
  { lang: Locale, dict: DictionaryEntry, packedOrders: PackedOrders[] })
  {

  const [succMsg, setSuccMsg] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState(false);

  const inputRef: React.Ref<HTMLInputElement> = React.useRef(null);
    
  const inputHandler = () => {
    if (!inputRef.current?.value) {
      return;
    }

    const order: PackedOrders[] = packedOrders.filter(order => order.id === inputRef.current?.value);
    
    if(order.length) {
      setSuccMsg(true);
      setErrMsg(false);
    } else {
      setSuccMsg(false);
      setErrMsg(true);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <Input ref={inputRef} name="sr-no" type="text" placeholder={dict.admin.dispatched.placeholder} />
      <Button onClick={inputHandler}>{dict.admin.dispatched.dispatch}</Button>
      {succMsg && <Alert className={cn("bg-[green] flex flex-col", {
        "items-end": lang == "ar"
      })}>
        <AlertTitle>{dict.admin.dispatched.alertTitle}!</AlertTitle>
        <AlertDescription>
          {dict.admin.dispatched.message}
        </AlertDescription>
      </Alert>}
      {errMsg && <Alert className={cn("bg-[red] flex flex-col", {
        "items-end": lang == "ar"
      })}>
        <AlertTitle>{dict.admin.dispatched.errTitle}!</AlertTitle>
        <AlertDescription>
          {dict.admin.dispatched.error}
        </AlertDescription>
      </Alert>}
    </div>
  );
}