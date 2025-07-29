import { useSelector } from "react-redux";
import {RootState} from '../redux/store';

const Counter = () => {
    const count: number = useSelector((state: RootState)  => state.counter.value);

    return (
        <div>
        Counter:  {count};
            <div>
                <button>Inc</button>
                <button>Dec</button>
            </div>
        </div>
    );
};

export default Counter;