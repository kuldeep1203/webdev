
import { atom } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 105
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
});

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 12
});

export const messagesAtom = atom({
    key: "messagesAtom",
    default: 0
});
