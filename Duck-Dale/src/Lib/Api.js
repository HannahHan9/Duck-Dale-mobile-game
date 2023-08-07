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

export const getAllShopItems = (username) => {
	return duckDale.get(`/shopitems/users/${username}`).then(({ data }) => {
		return data.items;
	});
};

export const getAllUserItems = (username) => {
	return duckDale.get(`/useritems/users/${username}`).then(({ data }) => {
		return data.items;
	});
};

export const getAllUserSeeds = (username) => {
	return duckDale
		.get(`/useritems/users/${username}?item_type=Seed`)
		.then(({ data }) => {
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

export const patchUserImage = (username, character_img) => {
	return duckDale
		.patch(`/users/${username}`, { character_img })
		.then(({ data }) => {
			return data.user.character_img;
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

export const patchGarden = () => {
	return duckDale.patch(``);
};
