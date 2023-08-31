import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { iceCreamActions } from '../../features/icecream/iceCreamSlice';

const { ordered, restocked } = iceCreamActions;

function IceCreamComponent() {


  const [value, setValue] = React.useState('');

  const iceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Ice Cream : {iceCreams}</h2>
      <button onClick={() => dispatch(ordered())} >Order Ice Cream</button>
      <input type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
      <button onClick={() => dispatch(restocked(value))} >Restock Ice Cream</button>
    </div>
  )
}

export default IceCreamComponent