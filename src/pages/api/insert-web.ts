import { NextApiRequest, NextApiResponse } from "next";
import mongodb from "databases/mongodb";
import Web from "models/Web";
import urlExist from "url-exist";

const insertWeb = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        try {
            const { title, url, description, hashTags } = req.body;

            console.log(req.body);

            if (!title || !url || !description || !hashTags)
                return res.json({ message: "Datas is missing" });
            else if (!Array.isArray(hashTags))
                return res.json({ message: "Hash tags must be an array" });
            else if (title.length > 40)
                return res.json({
                    message: "Title must be until 40 characters",
                });
            else if (description.length > 150)
                return res.json({
                    message: "Description must be until 150 characters",
                });

            const existsWebsite = await urlExist(url);

            if (!existsWebsite)
                return res.json({ message: "Website url invalid" });

            await mongodb();

            const data = await Web.create({
                title,
                url,
                description,
                hashTags,
            });

            return res.json({ message: "OK", data });
        } catch (e) {
            console.log(e);
            console.log("api insert-web.ts error");
            return res.json({ message: "Server Error" });
        }
    }
};

export default insertWeb;
