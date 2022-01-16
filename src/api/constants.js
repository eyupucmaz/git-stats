export const BASE_URL = "https://api.github.com/users/";
export const REPO_BASE_URL = "https://api.github.com/repos/";
export const CONFIG = {
	headers: { Authorization: `Token ${import.meta.env.VITE_APP_TOKEN}` },
};
