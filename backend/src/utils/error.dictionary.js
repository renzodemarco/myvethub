export const dictionary = {
  patientNotFound: {
    status: 404,
    message: "Patient not found"
  },
  userNotFound: {
    status: 404,
    message: "User not found"
  },
  emailOrPassword: {
    status: 400,
    message: "Incorrect email or password"
  },
  emailExists: {
    status: 400,
    message: "The email is already registered"
  },
  authentication: {
    status: 401,
    message: "Not authenticated"
  },
  authorization: {
    status: 403,
    message: "No authorizated"
  }
}

export default dictionary