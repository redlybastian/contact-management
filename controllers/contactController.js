const asyncHandler = require("express-async-handler");

const Contact = require("../models/contactModel");
// @dec Get all contact
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

// @dec create new contact
// @route POST /api/contacts
// @access public
const createNewContact = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(404).json({
      message: "All fields are mandatory",
    });
  }
  try {
    const contact = await Contact.create({
      name,
      email,
      phone,
    });
    res.status(201).json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "An error occurred while creating the contact",
    });
  }
});

// @dec get contact
// @route GET /api/contacts:id
// @access public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

// @dec update contact
// @route PUT /api/contacts:id
// @access public
const upDateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
});

// @dec delete contact
// @route DELETE /api/contacts:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createNewContact,
  getContact,
  upDateContact,
  upDateContact,
  deleteContact,
};
