import { Button } from "@/components/ui/button"

export const DashboardNavbar = () => {

  // TODO: we will use the shadcn command component and fetch all the repos  at once and then like cache we use TrPC for that right now I use like this we use trpc everything so that will catch it automatically and then will not fetch it again we use a refresh a button there (so that in bg react query wont frtch thos one agia and agian) and there is a search button as well the user can search by name and then get the repose accordingly in the command itself 

  
  const handleAddProject = async () => {
    const response = await fetch("/api/github/import", {
      method: "GET",
    })

    const data = await response.json()

    if (response.ok) {
      console.log("GitHub Repositories:", data.allUserRepos)
    }
  }
  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-700 bg-gray-800 px-4 py-2">
      <Button
        onClick={handleAddProject}
        className="rounded-xl border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
      >
        Add Project
      </Button>
    </nav>
  )
}
