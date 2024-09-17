Steps to set up redux-react

                    Store
                                reducers

useSelector(accessing data)                 useDispatch(send data)


1 - Set Up the Store

    import { configureStore } from "@reduxjs/toolkit";
    import todoReducer from "../features/todo/todoslice";

    export const store = configureStore({
    reducer: todoReducer,
    });


2 - Now we have use features in store
3 - Create Features/slice having followings
    a - name
    b - initialstate
    c - list reducers
    import { createSlice, nanoid } from "@reduxjs/toolkit";
    const initialState = {
    todos: [{ id: 1, text: "Hello world" }],
    };

    export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
        const todo = {
            id: nanoid(),
            text: action.payload,
        };
        state.todos.push(todo);
        },
        removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id != action.payload);
        },
    },
    });

4 - Now set up componant
    a - for accessing the data -->> useSelector
        const todos = useSelector((state) => state.todos);

    b - for sending the data -->> useDispacth
        const [input, setInput] = useState("");
        const dispatch = useDispatch();
        const addTodoHandler = (e) => {
            e.preventDefault();
            dispatch(addTodo(input));
            setInput("");
        };

5 - Add componant to App.jsx

6 - At the end some set up needed in main.jsx
import { Provider } from "react-redux";
import { store } from "./app/store.js";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);