import { getUserPlaylists } from "@/api/playlist.api";
import NoPlaylist from "@/app/(navbar-attached-layout)/_components/playlist/NoPlaylist";
import PlaylistList from "@/app/(navbar-attached-layout)/_components/playlist/PlaylistList";

const ChannelPlaylistPage = async ({ params: { channelUsername } }) => {
  const { data } = await getUserPlaylists(channelUsername);
  return (
    <div>
      {data?.length > 0 ? <PlaylistList playlists={data} /> : <NoPlaylist />}
    </div>
  );
};

export default ChannelPlaylistPage;
