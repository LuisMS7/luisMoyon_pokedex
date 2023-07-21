import axios from "axios";
import { REACT_APP_API_URL } from "@env";

const client = axios.create({
	baseURL: REACT_APP_API_URL,
	timeout: 5000,
});

export default client;
