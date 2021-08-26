import { NextApiRequest, NextApiResponse } from "next";
import urlExist from "url-exist";
import mongodb from "databases/mongodb";
import Web from "models/Web";

const editWeb = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "PUT") {
        console.log(req.query);
        const { id } = req.query;

        if (!id) return res.json({ message: "ID missing" });

        const { url, description, hashTags } = req.body;

        console.log(req.body);

        if (!url || !description || !hashTags)
            return res.json({ message: "Datas is missing" });
        else if (!Array.isArray(hashTags))
            return res.json({ message: "hashtags must be an array" });

        try {
            const webExists = await urlExist(url);

            if (!webExists)
                return res.json({ message: "Please check your url" });

            await mongodb();

            console.log(id);

            const web = await Web.findById(id.toString());

            if (!web) return res.json({ message: "Web id not found" });

            web.url = url;
            web.description = description;
            web.hashTags = hashTags;

            await web.save();

            return res.json({ message: "OK" });
        } catch (e) {
            console.log(e);
            console.log("edit-web.ts error");
            return res.json({ message: "Server Error" });
        }
    }
};

export default editWeb;
