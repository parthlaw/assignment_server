const { models } = require('../sequelize');
const addPdf = require('../utils/addPdf');
const addUser= async (req, res) => {
    const { name, dob, country,resume } = req.body;
    const resume_address= addPdf();
    const user = await models.user.create({ username: name, dob: dob, country: country, resume: resume_address });
    res.json(user);
}
module.exports = addUser;