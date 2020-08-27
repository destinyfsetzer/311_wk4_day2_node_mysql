let userController = require("./controllers/users");

let mockResponse = {
  json: (body) => {
    console.log(body);
    return mockResponse;
  },
  send: (body) => {
    console.log(body);
    return mockResponse;
  },
  status: (code) => {
    console.log(code);
    return mockResponse;
  },
};

let mockRequest = {
  params: { id: 3, first_name: "bogus" },
  body: { first_name: "bogus", last_name: "user" },
};

//UNCOMMENT WHATEVER YOU ARE TRYING TO TEST
// userController.getAllUsers(mockRequest,mockResponse);
userController.getUserById(mockRequest,mockResponse);
//userController.createUser(mockRequest,mockResponse);
//userController.updateUserById(mockRequest,mockResponse);
//userController.deleteUserByFirstName(mockRequest,mockResponse);