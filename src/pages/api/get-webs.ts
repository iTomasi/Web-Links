import { NextApiRequest, NextApiResponse } from "next";
import mongodb from "databases/mongodb";
import Web from "models/Web";

const getWebs = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        try {
            await mongodb();

            const webs = await Web.find();

            const theData = webs.map((web: any) => {
                const theWebCopy = { ...web };
                const theWeb = theWebCopy._doc;
                theWeb._id = theWeb._id.toString();

                return theWeb;
            });

            return res.json({
                message: "OK",
                data: theData,
            });
        } catch (e) {
            console.log(e);
            console.log("get-webs.ts error");
            return res.json({ message: "Server Error" });
        }
    }
};

export default getWebs;
