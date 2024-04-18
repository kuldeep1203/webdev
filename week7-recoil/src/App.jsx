import { useRecoilValue,RecoilRoot } from 'recoil';
import { networkAtom } from './atoms';
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
function Main(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const finalValue = networkNotificationCount>= 100 ? "99+" : networkNotificationCount;
  return (
    <>
      <button> Home</button>
      <button >My network {finalValue}</button>
      <button >Jobs {}</button>
      <button >Messaging {}</button>
      <button>Notifications {}</button>
      <button>Me</button>
    </>
  );
}
export default App
