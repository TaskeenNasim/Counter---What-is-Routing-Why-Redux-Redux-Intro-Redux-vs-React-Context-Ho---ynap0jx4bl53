import { connect } from "react-redux";
import Counter from "./counter";
import { increment, decrement, reset } from "../actions";

const mapStateToProps = (state) => {
    return {
        counter: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset()),
    };
};

// Connect the Counter component with Redux
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;
