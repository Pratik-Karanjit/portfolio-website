import { Schema } from "mongoose";

export let userSchema = Schema({
  fName: {
    type: String,
    trim: true,
    required: [true, "fName field is required"],
    minLength: [2, "fname must be at least 4 character long"],
    maxLength: [20, "fname must be at most 20 character"],

    validate: (value) => {
      if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
        throw new Error("Only alphabet and space is allowed.");
      }
    },
  },
  lName: {
    type: String,
    trim: true,
    required: [true, "lName field is required"],
    minLength: [2, "lname must be at least 2 character long"],
    maxLength: [20, "lname must be at most 20 character"],

    validate: (value) => {
      if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
        throw new Error("Only alphabet and space is allowed.");
      }
    },
  },
 


  email: {
    type: String,
    unique: true,
    validate: (value) => {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
        throw new Error("email is wrong.");
      }
    },
  },
});
