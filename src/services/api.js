import axios from "axios";

export const fetchImages = async (query, perPage = 5) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: query,
      hitsPerPage: perPage,
    },
    headers: {
      Authorization: "Client-ID _RVMbxFxle_btNsnmTnVfxCjqoCqelfbyHk3DugkKBM",
    },
  });
  return response.data.results;
};
