import VideoHorizontalCard from "@/components/common/cards/VideoHorizontalCard";

const LikedVideos = ({ videos }) => {
  return (
    <div className="flex w-full flex-col gap-y-4">
      {videos?.length > 0 ? (
        videos.map(({ video }) => (
          <div className="border" key={video?._id}>
            <VideoHorizontalCard video={video} />
          </div>
        ))
      ) : (
        <p className="text-gray-300">No videos found</p>
      )}
    </div>
  );
};

export default LikedVideos;
