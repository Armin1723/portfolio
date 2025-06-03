"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/Components/ui/toast"
import { useToast } from "@/Components/ui/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider >
      {toasts.map(function ({ id, title, description, action, variant, ...props }) {
        return (
          <Toast key={id} className={`${variant === 'default' ? 'bg-zinc-800 text-white border-2 hover:bg-neon-green/20 border-neon-green' : ''}`} {...props}>
            <div className={`grid gap-1`}>
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className=" text-white"/>
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
