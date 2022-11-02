import { useStore, actions } from "./useContext"

function App() {
  const [state, dispatch] = useStore()
  const { todos, todoInput } = state
  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
    todoInput('')
  }
  console.log(todos);
  return (
    <div>
      <input
        value={state.todoInput}
        placeholder="Enter todo"
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))

        }}
      />
      <button onClick={handleAdd} >ADD</button>
      {todos.map((item, index) => {
        return (
          <li key={index}>{item}</li>
        )
      })}
    </div>
  )
}
export default App