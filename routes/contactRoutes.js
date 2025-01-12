const express = require("express");

const router = express.Router();

const {
  getContacts,
  createNewContact,
  getContact,
  upDateContact,
  deleteContact,
} = require("../controllers/contactController");

router.route("/").get(getContacts).post(createNewContact);

router.route("/:id").get(getContact).put(upDateContact).delete(deleteContact);

module.exports = router;
