import { caseStudiesData } from "@/lib/case-studies-data";
import CaseStudyPresenter from "@/components/CaseStudyPresenter";
import { notFound } from "next/navigation";

// Use pure dynamic rendering to prevent 404s during development/missing static slugs
export const dynamic = "force-dynamic";

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = caseStudiesData[resolvedParams.slug];

  if (!data) {
    notFound();
  }

  return <CaseStudyPresenter data={data} />;
}
