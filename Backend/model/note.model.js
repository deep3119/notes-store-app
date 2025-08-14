import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    Image: String,
    title: String
})

const Note = mongoose.model("Note",noteSchema);

export default Note;