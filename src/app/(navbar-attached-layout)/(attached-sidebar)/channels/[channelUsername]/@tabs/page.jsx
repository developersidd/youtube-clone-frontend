//"use server";
import MyChannelNoVideosFound from "@/app/(navbar-attached-layout)/_components/MyChannelNoVideosFound";
import NoVideosFound from "@/app/(navbar-attached-layout)/_components/NotFoundVideos";
import Error from "@/components/common/Error";
import { retrieveCurrentUser } from "@/server-actions/user.action";
import { getVideos } from "@/server-actions/video.action";
import dynamic from "next/dynamic";
const LazyInfiniteVideos = dynamic(() =>
  import("@/components/infinite-data-layout/InfiniteVideos")
);
const ChannelVideosPage = async ({ params: { channelUsername } }) => {
  const { data: user } = await retrieveCurrentUser();
  const { data: { videos } = {}, error } =
    (await getVideos({
      limit: 10,
      username: channelUsername,
    })) || {};
  const isMyChannel = user?.username === channelUsername;
  // decide what to render
  let content;
  if (error) {
    throw new Error("Error while getting My videos");
  } else if (videos?.length > 0) {
    content = <LazyInfiniteVideos initialVideos={videos} />;
  } else if (isMyChannel && videos?.length !== 0) {
    content = <MyChannelNoVideosFound />;
  } else {
    content = <NoVideosFound className="h-[450px]" />;
  }

  return <div className="w-full">{content}</div>;
};

export default ChannelVideosPage;
