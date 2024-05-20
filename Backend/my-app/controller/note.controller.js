import Note from "../model/note.model.js";

export const getNote = async(req,res)=>{
    try{

        const note = await Note.find()
        res.status(200).json(note)

    }catch(error){

        res.status(400).send("Error",error);
        res.json(error);

    }
}