import './App.css'
import {Action, configureStore} from "@reduxjs/toolkit";
import {Provider, useDispatch, useSelector} from "react-redux";

// Action types
enum ActionType {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT"
}

// Action creators
const increment = () : Action => ({type: ActionType.INCREMENT});
const decrement = () : Action => ({type: ActionType.DECREMENT});

// Reducer ("Клерк". Функція, що приймає в себе state та action)
const counterReducer = (state = 0, action: Action) => {
    console.log("Counter reducer:", "State: ", state, "Action: ", action);
    switch (action.type) {
        case ActionType.INCREMENT:
            return ++state;
        case ActionType.DECREMENT:
            return --state;
        default:
            return state;
    }
}

// Store

const store = configureStore({
    reducer: { //необхідний ключ reducer
        counter: counterReducer
    }
})


function Counter() {
    const count = useSelector((state) => state.counter); // Отримання стану зі Store. counter ми прописали для reducer
    const dispatch = useDispatch(); // ми маємо дати useDispatch() екшн з


    const handleIncreasing = () => { // Це event handler, ми маємо викликати dispatch
        dispatch(increment()); // ми маємо дати useDispatch() екшн з
    }

    const handleDecreasing = () => { // Це event handler, ми маємо викликати dispatch
        dispatch(decrement()); // ми маємо дати useDispatch() екшн з
    }

    return (
        <>
            <div>Counter {count}</div>
            <button onClick={handleIncreasing}>Increment</button>
            <button onClick={handleDecreasing}>Decrement</button>
        </>
    )
}


function App() {

  return (
    <Provider store={store}>
        <div>Вітаю в Redux! </div>
        <Counter/>
    </Provider>
  )
}

export default App
