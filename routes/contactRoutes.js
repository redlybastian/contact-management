const express = require("express");

const router = express.Router();

const {
  getContacts,
  createNewContact,
  getContact,
  upDateContact,
  deleteContact,
} = require("../controllers/contactController");

router.route("/").get(getContacts);

router.route("/").post(createNewContact);

router.route("/:id").get(getContact);

router.route("/:id").put(upDateContact);

router.route("/:id").delete(deleteContact);
module.exports = router;
