import { toast } from "sonner"
import { useTRPC } from "@/trpc/client"
import { useMutation } from "@tanstack/react-query"

export const useSendMessage = () => {
  const trpc = useTRPC()

  return useMutation(
    trpc.sendMessage.mutationOptions({
      onSuccess: () => {
        toast.success("Project queued!")
        console.log("Message sent successfully")
      },
      onError: (error) => {
        toast.error(`Error: ${error.message}`)
      }, 
    })
  )
}
