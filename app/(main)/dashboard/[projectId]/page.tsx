import { ProjectDetail } from "@/features/projects/components/project-detail"

type PageProps = {
  params: Promise<{ projectId: string }>
}

export default async function ProjectPage({ params }: PageProps) {
  const { projectId } = await params
  return <ProjectDetail projectId={projectId} />
}
