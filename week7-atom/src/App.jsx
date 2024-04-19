
import './App.css'
import  { RecoilRoot,useRecoilState} from 'recoil';
import { todosAtomFamily } from './atoms';
function App() {
  

  return (
    <>
    return <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2}/>
      <Todo id={2}/>
      <Todo id={2}/>
    </RecoilRoot>
    </>
  )
}

function Todo({id}){
  const [todo,setTodo] = useRecoilState(todosAtomFamily(id));
  return (
    <>
      {todo.title}
      {todo.description}
      <br></br>

    </>
  )
}

export default App
