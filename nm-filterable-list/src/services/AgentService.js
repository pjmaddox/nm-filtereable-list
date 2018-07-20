import axios from "axios";

export default async () => {
    try {
        const response = await axios.get("/api/agents");
        return response.data;
    } catch(error) {
        console.log("There was an error with the axios get: ");
        console.log(error);
    }
}