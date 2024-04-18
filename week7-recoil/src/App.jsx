import { useRecoilValue,RecoilRoot,useRecoilState } from 'recoil';
import { networkAtom,jobsAtom,notificationsAtom,messagesAtom } from './atoms';
import { totalNotificationsSelector } from './atoms';
import './App.css'

function App() {
   return(
    <>
    <RecoilRoot>
    <Main/>
  </RecoilRoot>
    </>
    
   ) ;
  
}
//selectors is derived from other atoms 
//example : count of all the notifications 
function Main(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationsAtom);
  const[messageCount,setMessageCount] = useRecoilState(messagesAtom);
  const totalNotifications = useRecoilValue(totalNotificationsSelector);
  const finalValue = networkNotificationCount>= 100 ? "99+" : networkNotificationCount;
 
  return (
    <>
      <button> Home</button>
      <button >My network {finalValue}</button>
      <button >Jobs {jobsAtomCount}</button>
      <button >Messaging {messageCount}</button>
      <button>Notifications {notificationCount}</button>
      <button >Me{totalNotifications}</button>
    </>
  );
}
export default App
