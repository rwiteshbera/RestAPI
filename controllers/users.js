import { v4 as uuidv4 } from "uuid";
let users = [];

// let users = data;
// Get All Users Data
export const getAllUsers = (req, res) => {
  res.send(users);
};

// Add new user
export const createNewUser = (req, res) => {
  // users.push
  const user = req.body;

  // Creating unique id and adding it to routes
  users.push({ ...user, id: uuidv4() });

  res.send(`new user has been added to the database`);
};

// Get specific user information
export const getSpecificUser = (req, res) => {
  const id = req.params.id;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

// Delete specific user information from database
export const deleteUser = (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => user.id === id);
  res.send(`Users with ${id} deleted successfully!`);
};

// Update a user information
export const updateUser = (req, res) => {
  const id = req.params.id;
  const { firstname, lastname, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstname) user.firstname = firstname;

  if (lastname) user.lastname = lastname;

  if (age) user.age = age;

  res.send(`Users with id ${id} has been updated`);
};
