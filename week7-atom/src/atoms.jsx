import { atomFamily,atom } from "recoil";
import { TODOS } from "./todos";
export const todosAtomFamily = atomFamily({
    key : "todosAtomFamily",
    default : id=> {
        return TODOS.find(x=>x.id === id) // GIVEN  this id find this specific id data from TODOS 
    },
});
