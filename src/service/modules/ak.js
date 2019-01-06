import { $http as axios } from "@/utils/ak/http";

export const getList = data => axios.post2("100171", data);
