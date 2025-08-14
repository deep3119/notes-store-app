import Contact from "../model/contact.model.js";

export const contactUs = async (req, res) => {
    try {

        const { firstName , lastName , email , phone ,  message } = req.body;

        const createdContact = new Contact({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message
        });

        await createdContact.save()
        res.status(201).json({
            message: "Contact successfully",
            user: {
                _id: createdContact._id,
                firstName: createdContact.firstName,
                lastName: createdContact.lastName,
                email: createdContact.email,
                phone: createdContact.phone,
                message: createdContact.message,
            }
        });
    } catch (error) {

        res.status(400).send("Error", error.message);
        res.status(500).json({ message: "Internal server error" });

    }
};