import axios from "axios";

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
	return duckDale.get(`/shopitems/${username}`).then(({ data }) => {
		return data.items;
	});
};

export const getAllUserItems = (username) => {
	return duckDale.get(`/useritems/${username}`).then(({ data }) => {
		return data.items;
	});
};

export const getAllUserSeeds = (username) => {
	return duckDale
		.get(`/useritems/${username}?item_type=Seed`)
		.then(({ data }) => {
			return data.items;
		});
};

export const getAchievements = (username) => {
  return duckDale.get(`/achievements/${username}`).then(({ data }) => {
    return data.achievements;
  });
};

export const postUser = (username, password, first_name, last_name) => {
	return duckDale
		.post(`/users`, { username, password, first_name, last_name })
		.then(({ data }) => {
			return data.user;
		});
};


export const patchUser = (username, password, first_name, last_name) => {
	return duckDale
	.patch(`/users/${username}`, { username, password, first_name, last_name })
	.then(({data}) => {
		return data.user;
	})
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

export const patchUserItems = (username, item_name, quantity) => {
	return duckDale
		.patch(`/useritems/${username}/${item_name}`, { quantity })
		.then(({ data }) => {
			return data.item;
		});
};

export const patchShopItems = (username, item_name, quantity) => {
	return duckDale
		.patch(`/shopitems/${username}/${item_name}`, { quantity })
		.then(({ data }) => {
			return data.item;
		});
};

export const patchGarden = ({
	username,
	planted,
	state,
	stage,
	grid_square,
}) => {
	return duckDale.patch(`/farm/${username}/${grid_square}`, {
		username,
		planted,
		state,
		stage,
	});
};
