import api from "@/services/api";

export const getAllProducts = async () => {
  return await api.get("/products");
};
