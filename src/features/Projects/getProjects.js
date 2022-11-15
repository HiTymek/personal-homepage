import axios from "axios";

export const getProjects = async () => {
    const response = await axios.get("https://api.github.com/users/hitymek/repos");
    return response.data;
};