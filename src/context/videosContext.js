import { createContext } from "react";

// using the context we can access this "Themecontext any where without using the props we just need to import the Themecontext "
const videosContext=createContext(null);

export default videosContext;