"use server";
import { apiClient, fetchWithAuth } from ".";
const getAllVideos = async (queries) => {
  let url = "/videos";
  if (Object.keys(queries).length > 0) {
    const searchParams = new URLSearchParams(queries);
    url += `?${searchParams.toString()}`;
  }
  try {
    const res = await apiClient.get(url);
    return {
      data: res.data?.data,
    };
  } catch (error) {
    return {
      error:
        error?.response?.data?.message ||
        error?.message ||
        "API request failed",
    };
  }
};

const getVideoById = async (id, userId) => {
  try {
    let url = `/videos/${id}`;
    if (userId) {
      url += `?userId=${userId}`;
    }
    const res = await apiClient.get(url);
    return {
      data: res.data?.data,
    };
  } catch (error) {
    // Handle connection-related errors
    let errorMessage;
    if (error.response) {
      // Server responded with non-2xx status
      errorMessage = error.response.data?.message || "API request failed";
    } else if (error.request) {
      // Request was made but no response received
      errorMessage = error.message || "Network connection failed";
    } else {
      // Other errors (e.g., in request setup)
      errorMessage = error.message || "Unknown error occurred";
    }

    return {
      error: errorMessage,
    };
  }
};

const getRelatedVideos = async (videoId) => {
  try {
    const res = await apiClient.get(`/videos/related/${videoId}`);
    return {
      data: res.data?.data,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

const getLikedVideos = async () => {
  try {
    const res = await fetchWithAuth(`/videos/liked`, {
      method: "GET",
    });
    console.log("data", res);
    return {
      data: res?.data,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export { getAllVideos, getLikedVideos, getRelatedVideos, getVideoById };
