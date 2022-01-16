import { REPO_BASE_URL, CONFIG } from "./constants";
import axios from "axios";
import { getRepos } from "./getRepos";

const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);

export const getLangs = async (username) => {
	let repoUsage = [];
	let langPer = {};
	const userRepos = await getRepos(username);

	for (let i = 0; i < userRepos.length; i++) {
		const { data: langs } = await axios.get(
			`${REPO_BASE_URL}${username}/${userRepos[i]}/languages`,
			CONFIG
		);
		Object.entries(langs).forEach((lang) => {
			let keys = Object.keys(repoUsage);

			if (keys.includes(lang[0])) {
				repoUsage[lang[0]] = repoUsage[lang[0]] + lang[1];
			} else {
				repoUsage[lang[0]] = lang[1];
			}
		});
	}
	let totalValue = sumValues(repoUsage);
	Object.entries(repoUsage).forEach((lang) => {
		langPer[[lang[0]]] = Math.floor((lang[1] * 100) / totalValue);
	});
	const sortedPer = Object.fromEntries(
		Object.entries(langPer).sort(([, a], [, b]) => b - a)
	);

	return sortedPer;
};
