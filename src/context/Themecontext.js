import { createContext, useContext } from "react";

// using the context we can access this "Themecontext any where without using the props we just need to import the Themecontext "
const Themecontext=createContext("darkmode");

export default Themecontext;