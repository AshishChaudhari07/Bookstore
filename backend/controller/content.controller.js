import Content from "../models/content.model.js";

const authContent = async(req,res) =>{
    try {
        const { fullname, email, message } = req.body;

        // Check if fullname, email, and message are present
        if (!fullname || !email || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const createUser = new Content({ fullname, email, message });
        await createUser.save();
        res.status(200).json({ message: "Content saved successfully" });
    } catch (error) {
        console.log("Data not saved", error.message);
        res.status(400).json({ message: "Content not saved" });
    }
}


export default authContent;