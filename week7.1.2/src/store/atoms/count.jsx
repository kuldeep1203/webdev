import {atom} from "recoil";
export const countAtom = atom({ 
    key : "countAtom",
    default : 0
});//dont create same keys for two different atoms