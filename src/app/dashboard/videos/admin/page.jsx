import { retrieveCurrentUser } from "@/server-actions/user.action";
import { getVideos } from "@/server-actions/video.action";
import DashboardVideosTable from "../_components/DashboardVideosTable";
const DashboardVideosPage = async ({ searchParams }) => {
  const { page, limit, search, status, sortOrder, sortBy } = searchParams || {};
  console.log(" searchParams:", searchParams);
  const {
    data: { username },
  } = (await retrieveCurrentUser()) || {};

  const { data: { totalPages, videos } = {} } = await getVideos({
    page: page || 1,
    limit: limit || 20,
    q: search || "",
    status: status || "all",
    sortOrder: sortOrder || "desc",
    sortBy: sortBy || "createdAt",
    expandQuery: true,
  });
  console.log(" data:", JSON.stringify(videos[0], null, 2));
  return (
    <section className="px-8  ">
      <DashboardVideosTable totalPages={totalPages} videos={videos} />
    </section>
  );
};

export default DashboardVideosPage;
