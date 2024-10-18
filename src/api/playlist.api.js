import { publicApi } from ".";

// get playlist by id
const getPlaylistById = async (id) => {
  try {
    const res = await publicApi.get(`/playlist/${id}`);
    return {
      data: res.data?.data,
    };
  } catch (e) {
    return {
      error: e.message,
    };
  }
};

// get user playlists
const getUserPlaylists = async (username) => {
  try {
    const res = await publicApi.get(`/playlist/user/${username}`);
    console.log("playlist:", res.data);
    return {
      data: res.data?.data,
    };
  } catch (e) {
    return {
      error: e.message,
    };
  }
};

export { getPlaylistById, getUserPlaylists };
