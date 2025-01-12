// @dec Get all contact
// @route GET /api/contacts
// @access public
const getContacts = (req, res) => {
  res.status(200).json({ message: "get all contacts" });
};

// @dec create new contact
// @route POST /api/contacts
// @access public
const createNewContact = (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ message: "create the contacts" });
};

// @dec get contact
// @route GET /api/contacts:id
// @access public
const getContact = (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
};

// @dec update contact
// @route PUT /api/contacts:id
// @access public
const upDateContact = (req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
};

// @dec delete contact
// @route DELETE /api/contacts:id
// @access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createNewContact,
  getContact,
  upDateContact,
  upDateContact,
  deleteContact,
};
