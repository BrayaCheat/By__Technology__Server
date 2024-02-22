const PostModel = require("../Model/postModel");
const nodemailer = require("nodemailer");

const createPost = async (req, res) => {
  try {
    const sendData = new PostModel({
      title: req.body.title,
      article: req.body.article,
      photo: req.file.filename,
      type: req.body.type,
    });

    const result = await sendData.save();
    res.status(201).json({
      data: result,
      message: "Creating Success!",
    });
  } catch (error) {
    console.log(error);
  }
};

const getPost = async (req, res) => {
  try {
    const getData = await PostModel.find();
    res.status(201).json({
      data: getData,
      message: "Getting Success!",
    });
  } catch (error) {
    console.log(error);
  }
};

const getPostById = async (req, res) => {
  try {
    const id = req.params.id;
    const getById = await PostModel.findById(id);
    res.status(201).json({
      data: getById,
      message: "Getting By Id Success!",
    });
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteData = await PostModel.findByIdAndDelete(id);
    res.status(201).json({
      message: "Deleting Success!",
    });
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const option = { new: true };
    const updateData = {
      title: req.body.title,
      article: req.body.article,
      photo: req.file.filename,
      type: req.body.type,
    };
    const result = await PostModel.findByIdAndUpdate(id, updateData, option);
    res.status(201).json({
      message: "Updating Success!",
    });
  } catch (error) {
    console.log(error);
  }
};

const getByCategory = async (req, res) => {
  try {
    const type = req.params.type;
    const getType = await PostModel.find({ type });
    res.status(201).json({
      data: getType,
      message: "Getting type success!",
    });
  } catch (error) {
    console.log(error);
  }
};

const getByLimit = async (req, res) => {
  const limit = req.params.limit;
  const getLimit = await PostModel.find().limit(limit);
  res.status(201).json({
    data: getLimit,
    message: "Success!",
  });
};

const getByLimitAndType = async (req, res) => {
  try {
    const limit = req.params.limit;
    const type = req.params.type;
    const getList = await PostModel.find({ type }).limit(limit);
    res.status(201).json({
      data: getList,
      message: "Success!",
    });
  } catch (error) {
    console.log(error);
  }
};

const sendEmail = (req, res) => {
  try {
    const emailObj = {
      sender: req.body.sender,
      subject: req.body.subject,
      text: req.body.text
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "prayacheat@gmail.com",
        pass: "mysxxkgdiakffjau"
      },
    });

    const mailOptions = {
      from: emailObj.sender,
      to: "prayacheat@gmail.com",
      subject: emailObj.subject,
      text: emailObj.text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).json('Email sent: ' + info.response);
    });
  } catch (error) {
    console.log(error);
  }
};

// const getByPhoto = async (req, res) => {
//   try {
//     const photo = req.params.photo;
//     const getPhoto = await PostModel.find({ photo });
//     res.status(201).json({
//       data: getPhoto,
//       message: "Getting photo success!",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = {
  createPost,
  getPost,
  deletePost,
  getPostById,
  updatePost,
  getByCategory,
  getByLimit,
  getByLimitAndType,
  sendEmail,
};
