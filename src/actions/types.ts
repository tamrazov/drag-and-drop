import { fetchCarts } from "./carts";
import { fetchColumns } from "./columns";

export enum ActionTypes {
	FETCH_COLUMNS = "FETCH_COLUMNS",
	FETCH_CARTS = "FETCH_CARTS"
}

export type Action = fetchColumns | fetchCarts;
