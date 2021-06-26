import axios from "axios";

import { api } from "../config";
import { Episode } from "../context/useApp";

const remove = (id: string) =>
  axios
    .delete<{ id: string; status: string }>(`${api}/episodes/${id}`)
    .catch(console.error);

const get = () =>
  axios.get<Array<Episode>>(`${api}/episodes`).catch(console.error);

const add = (obj: Episode) =>
  axios.post<Episode>(`${api}/episodes`, obj).catch(console.error);

const update = (id: string, data: Episode) =>
  axios.put<Episode>(`${api}/episodes/${id}`, data).catch(console.error);

export { remove, add, get, update };
