import AxiosBase from "../AxiosBase";

interface IInsertWeb {
    title: string;
    url: string;
    description: string;
    hashTags: string[];
}

const insertWeb = async (payload: IInsertWeb) => {
    const { title, url, description, hashTags } = payload;

    if (!title) return { error: "Title is missing" };
    else if (!url) return { error: "Url is missing" };
    else if (!description) return { error: "Description is missing" };
    else if (!Array.isArray(hashTags)) return { error: "Hash tags missing" };

    try {
        const { data } = await AxiosBase.post("/api/insert-web", payload, {
            headers: { "Content-Type": "application/json" },
        });

        if (data.message !== "OK") return { error: data.message };

        return {
            data: data.data,
        };
    } catch (e) {
        console.log(e);
        console.log("insertWeb.ts error");
        return { error: "Error connection with the server" };
    }
};

export default insertWeb;
