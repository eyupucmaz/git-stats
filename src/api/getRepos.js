import { BASE_URL, CONFIG } from "./constants";
import axios from "axios";

export const getRepos = async (name) => {
	const { data: repos } = await await axios.get(
		`${BASE_URL}${name}/repos`,
		CONFIG
	);
	let getRepos = [];
	repos.forEach((repo) => getRepos.push(repo.name));
	return getRepos;
};
