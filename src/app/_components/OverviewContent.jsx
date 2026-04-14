import React from "react";
import OverviewReadme from "./OverviewReadme";
import PinnedRespositories from "./PinnedRespositories";
import ContributionChart from "./ContributionChart";

export default async function OverviewContent() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/overview`,
    {
      next: { revalidate: 60 },
    }
  );

  const json = await res.json();
  const overviewData = json?.data;

  if (!overviewData) {
    return (
      <div className="flex-3 max-w-4xl">
        <p className="text-gray-500">Failed to load overview data.</p>
      </div>
    );
  }

  return (
    <div className="flex-3 max-w-4xl">
      <OverviewReadme content={overviewData.readmeContent} />
      <PinnedRespositories content={overviewData.pinnedContent} />
      <ContributionChart />
    </div>
  );
}
