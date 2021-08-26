import mongoose from "mongoose";

interface IWeb extends mongoose.Document {
    title: string;
    url: string;
    description: string;
    hashTags: string[];
}

const webSchema = new mongoose.Schema({
    title: { type: String },
    url: { type: String },
    description: { type: String },
    hashTags: { type: Array },
});

export default mongoose.models.Web || mongoose.model<IWeb>("Web", webSchema);
