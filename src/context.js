import { createContext } from "react";
import { store } from "./auth/userStore.js";

export const Context = createContext({ store });