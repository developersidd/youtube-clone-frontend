import { getUserSubscribedChannels } from "@/server-actions/subscription.action";
import SubscribedChannelList from "./_components/SubscribedChannelList";

const SubscribedChannelsPage = async ({
  params,
  searchParams: { search },
}) => {
  const { channelUsername } = await params;
  const { data: { totalSubscribedChannels, subscribedChannels } = {} } =
    await getUserSubscribedChannels(channelUsername, {
      search,
    });
  return (
    <div className="flex flex-col gap-y-4 py-4">
      <SubscribedChannelList
        search={search}
        data={{
          subscribedChannels,
          totalSubscribedChannels,
        }}
      />
    </div>
  );
};

export default SubscribedChannelsPage;
