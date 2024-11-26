const User = require('../models/User')

module.exports = (req,res) => {
    try {
        User.create(req.body).then(() => {
            console.log("Successfully storing data")
        }).catch((error) =>{
            console.error("Error storing data:", error); // log error
            res.status(500).send('Error saving data!'); 
        })
    } catch (error) {
        console.error("Server error:", error); // log error
        res.status(500).send('Internal Server Error!');
    }
}