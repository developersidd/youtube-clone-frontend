import { getChannelByUsername, retrieveCurrentUser } from "@/api/user.api";
import ChannelInfo from "./@tabs/_components/ChannelInfo";
import ChannelMenu from "./@tabs/_components/ChannelMenu";

const ChannelLayout = async ({ tabs, params: { channelUsername } }) => {
  const { data: user } = await retrieveCurrentUser();
  const { data: channel } = await getChannelByUsername(
    channelUsername,
    user?._id
  );
  return (
    <section class="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <div class="relative min-h-[150px] w-full pt-[16.28%]">
        <div class="absolute inset-0 overflow-hidden">
          <img
            //width={1200}
            //height={250}
            className="object-cover w-full h-full"
            src={channel?.coverImage?.url}
            alt={channel?.username}
          />
        </div>
      </div>
      <div class="px-4 pb-4">
        <ChannelInfo loggedInUserId={user?._id} channelInfo={channel} />
        {/* Sidebar */}
        <ChannelMenu />
        {/* Tabs Content */}
        {tabs}
      </div>
    </section>
  );
};

export default ChannelLayout;
