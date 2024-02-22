const express = require("express");
const router = express.Router();
const postController = require("../Controller/postController");
const upload = require("../utility/multer");

router.post("/", upload.single("photo"), postController.createPost);
router.get("/", postController.getPost);
router.get("/:id", postController.getPostById);
router.get("/category/:type", postController.getByCategory);
router.get("/limit/:limit", postController.getByLimit)
router.get("/limitType/:type/:limit", postController.getByLimitAndType)
router.delete("/:id", postController.deletePost);
router.put("/:id", upload.single("photo"), postController.updatePost);
router.post("/sendEmail", postController.sendEmail)

module.exports = router;
