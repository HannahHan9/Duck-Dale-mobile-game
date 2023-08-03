import axios from "axios";
import { logger } from "react-native-logs";

const duckDale = axios.create({
	baseURL: "https://be-project-x36t.onrender.com/api",
});

export const getAllUsers = () => {
	return duckDale.get(`/users`).then(({ data }) => {
		return data.users;
	});
};

export const getUser = (username) => {
	return duckDale.get(`/users/${username}`).then(({ data }) => {
		return data.user;
	});
};

export const getAllShopItems = () => {
	return duckDale.get(`/shopitems`).then(({ data }) => {
		return data.items;
	});
};

export const getAllUserItems = () => {
	return duckDale.get(`/useritems`).then(({ data }) => {
		return data.items;
	});
};

export const postUser = (username, password, first_name, last_name) => {
	return duckDale
		.post(`/users`, { username, password, first_name, last_name })
		.then(({ data }) => {
			return data.user;
		});
};

export const patchUserCoins = (username, coins) => {
	return duckDale.patch(`/users/${username}`, { coins }).then(({ data }) => {
		return data.user.coins;
	});
};

export const postUserItems = (
	username,
	item_name,
	description,
	price,
	quantity
) => {
	return duckDale
		.post(`/useritems`, {
			username,
			item_name,
			description,
			price,
			quantity,
		})
		.then(({ data }) => {
			return data.item;
		});
};

export const postShopItems = (
	username,
	item_name,
	description,
	price,
	quantity
) => {
	return duckDale
		.post(`/shopitems`, {
			username,
			item_name,
			description,
			price,
			quantity,
		})
		.then(({ data }) => {
			return data.item;
		});
};

export const patchUserItems = (item_id, quantity) => {
	return duckDale
		.patch(`/useritems/${item_id}`, { quantity })
		.then(({ data }) => {
			return data.item;
		});
};

export const patchShopItems = (item_id, quantity) => {
	return duckDale
		.patch(`/shopitems/${item_id}`, { quantity })
		.then(({ data }) => {
			return data.item;
		});
};

// GET all users - https://be-project-x36t.onrender.com/api/users
// GET all user items - https://be-project-x36t.onrender.com/api/useritems
// GET all shop items - https://be-project-x36t.onrender.com/api/shopitems
// GET user - https://be-project-x36t.onrender.com/api/users/64c7bd2dc612cf6fcd492d99
// GET user item - https://be-project-x36t.onrender.com/api/useritems/64c7bd2dc612cf6fcd492da0
// GET shop item - https://be-project-x36t.onrender.com/api/shopitems/64c7bd2dc612cf6fcd492da0
