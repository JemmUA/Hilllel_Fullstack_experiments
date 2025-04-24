// import {useDispatch, useSelector} from "react-redux";
//
//
//
// function Counter() {
//     const count = useSelector((state) => state.counter); // Отримання стану зі Store. counter ми прописали для reducer
//     const dispatch = useDispatch(); // ми маємо дати useDispatch() екшн з
//
//
//     const handleIncreasing = () => { // Це event handler, ми маємо викликати dispatch
//         // dispatch(increment); // ми маємо дати useDispatch() екшн з
//     }
//     return (
//         <>
//             <div>Counter {count}</div>
//             <button onClick={handleIncreasing}>Increment</button>
//             {/*<button onClick={handleDecreasing}>Decrement</button>*/}
//         </>
//     )
// }
//
// export default Counter;