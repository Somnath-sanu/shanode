"use client"

import { Button } from "@/components/ui/button"
import { DashboardNavbar } from "./navbar"
import { useSendMessage } from "../hooks/useSendMessage"

export const Dashboard = () => {
  const sendMessage = useSendMessage()

  return (
    <>
      <DashboardNavbar />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button
          onClick={async () =>
            await sendMessage.mutateAsync({
              repoUrl: "https://github.com/orgs/Raghvendra9402yt/repositories",
            })
          }
        >
          Dummy Send Message
        </Button>
      </div>
    </>
  )
}
