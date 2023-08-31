import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { cakeActions } from '../../features/cake/cakeslice';

const { ordered, restocked } = cakeActions;

function CakeComponent() {

  const cakes = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes : {cakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(110))}>Restock cakes</button>
    </div>
  )
}

export default CakeComponent
