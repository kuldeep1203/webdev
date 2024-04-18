
import { atom,selector } from "recoil";

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


// this is basically very similar to useMemo it =calculates totalnotification when the other values change 
export const totalNotificationsSelector = selector({
    key: "totalNotifications",
    get : ({get})=>{
        const networkAtomCount = get(networkAtom);
        const jobCount = get(jobsAtom);
        const notificationCount = get(notificationsAtom);
        const messageCount = get(messagesAtom);

        return networkAtomCount + jobCount + notificationCount + messageCount;
    }
});