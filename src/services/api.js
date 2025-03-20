import axios from "axios";
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getTrucks = async (query) => {
  console.log(query);
  const response = await axios.get("/campers", {
    params: { page: query.page, limit: query.limit },
  });
  console.log("API response:", response.data.items);
  return response.data;
};

export const getTruckById = async (id) => {
  const response = await axios.get(`/campers/${id}`);
  return response.data;
};
