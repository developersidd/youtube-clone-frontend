import { formatCounting } from "@/lib/utils";
import { getChannelSubscribers } from "@/server-actions/subscription.action";

const DescriptionChannelInfo = async ({ videoOwner }) => {
  const { avatar, fullName, username, _id } = videoOwner || {};
  const {
    data,
    data: { subscribers } = {},
    error,
  } = (await getChannelSubscribers(_id)) || {};
  console.log(" data:", data);
  //console.log(" subscribers:", subscribers)
  return (
    <div className="flex items-center gap-x-4">
      <div className="mt-2 h-12 w-12 shrink-0">
        <img
          src={avatar?.url}
          alt={username}
          className="h-full w-full rounded-full"
        />
      </div>
      <div className="block">
        <p className="font-medium"> {fullName} </p>
        <p className="text-sm ">
          {formatCounting(subscribers) ?? 0} Subscribers
        </p>
      </div>
    </div>
  );
};

export default DescriptionChannelInfo;
