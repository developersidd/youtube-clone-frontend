import VideoCard from "../common/cards/VideoCard";

const VideoList = ({ videos }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4 w-full">
      {videos?.map((video) => (
        <VideoCard key={video?._id} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
