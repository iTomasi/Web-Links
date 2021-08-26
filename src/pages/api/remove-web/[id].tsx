import { NextApiRequest, NextApiResponse } from "next";
import Web from "models/Web";
import mongodb from "databases/mongodb";

const removeWeb = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    if (!id) return res.json({ message: "Id params missing" });

    try {
        await mongodb();
        await Web.findByIdAndDelete(id.toString());

        res.json({ message: "OK" });
    } catch (e) {
        console.log(e);
        console.log("remove-web api error");
        return res.json({ message: "Server Error" });
    }
};

export default removeWeb;
