"use server";
import { apiClient, fetchWithAuth } from "../axios";

const getChannelSubscribers = async (channelId) => {
  try {
    const res = await apiClient.get(`/subscriptions/u/${channelId}`);
    return {
      data: res?.data?.data,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

// Get user subscribed channels
const getUserSubscribedChannels = async (subscriberName, queries) => {
  let url = `/subscriptions/c/${subscriberName}`;
  if (queries?.search) {
    url += `?search=${queries?.search}`;
  }
  console.log("url:", url);
  try {
    const res = await apiClient.get(url);
    console.log("res:", res.data?.data);
    return {
      data: res.data?.data,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

// check if user is subscribed to a channel
const checkUserSubscription = async (channelId) => {
  try {
    const res = await fetchWithAuth(`/subscriptions/status/c/${channelId}`);
    //console.log("res:", res);
    return {
      data: res.data,
    };
  } catch (error) {
    console.error(error);
    return {
      error: error.message,
    };
  }
};

export {
  checkUserSubscription,
  getChannelSubscribers,
  getUserSubscribedChannels,
};
