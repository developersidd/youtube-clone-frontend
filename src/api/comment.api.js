import { apiClient } from ".";
const getVideoComments = async (videoId) => {
  try {
    const response = await apiClient.get(`/comments/${videoId}`);
    //console.log("comment response:", response);
    return { data: response.data?.data };
  } catch (e) {
    console.error("Failed to get video comments", e);
    return {
      error: e.message,
    };
  }
};

export { getVideoComments };
