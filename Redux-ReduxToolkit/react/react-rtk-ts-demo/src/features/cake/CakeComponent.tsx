import { cakeActions } from '../cake/cakeslice';
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const { restocked, ordered } = cakeActions;

const CakeComponent = () => {

    const cakes = useAppSelector((state) => state.cake.numOfCakes);
    const dispatch = useAppDispatch();
  
    return (
      <div>
        <h2>Number of cakes : {cakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order Cake</button>
        <button onClick={() => dispatch(restocked(110))}>Restock cakes</button>
      </div>
    )
}

export default CakeComponent
