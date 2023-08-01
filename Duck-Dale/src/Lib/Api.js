import axios from "axios";
import { logger } from "react-native-logs";

const duckDale = axios.create({
    baseURL: "https://be-project-x36t.onrender.com/api/"
});

export const getAllUsers = () => {
    return duckDale.get(`/users`).then(({data}) => {
        log.info(data)
        return data.users
    })
}

// GET all users - https://be-project-x36t.onrender.com/api/users
// GET all user items - https://be-project-x36t.onrender.com/api/useritems
// GET all shop items - https://be-project-x36t.onrender.com/api/shopitems
// GET user - https://be-project-x36t.onrender.com/api/users/64c7bd2dc612cf6fcd492d99
// GET user item - https://be-project-x36t.onrender.com/api/useritems/64c7bd2dc612cf6fcd492da0
// GET shop item - https://be-project-x36t.onrender.com/api/shopitems/64c7bd2dc612cf6fcd492da0