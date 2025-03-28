import Link from "next/link";
import UploadAvatar from "./UploadAvatar";

const ChannelEditInfo = ({ channelInfo }) => {
  const { username, fullName, avatar } = channelInfo || {};
  return (
    <div className="flex flex-wrap gap-4 pb-4 pt-6">
      {/*  */}
      <UploadAvatar avatar={avatar} username={username} />
      <div className="mr-auto inline-block">
        <h1 className="font-bolg text-xl"> {fullName} </h1>
        <p className="text-sm text-gray-400">@{username}</p>
      </div>
      <div className="inline-block">
        <Link
          href={`/channels/${username}`}
          className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto"
        >
          View channel
        </Link>
      </div>
    </div>
  );
};

export default ChannelEditInfo;
