import React from 'react'
import { iceCreamActions } from '../icecream/iceCreamSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const { ordered, restocked } = iceCreamActions;

function IceCreamComponent() {
    
  const [value, setValue] = React.useState<string>('');

  const iceCreams = useAppSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Number of Ice Cream : {iceCreams}</h2>
      <button onClick={() => dispatch(ordered())} >Order Ice Cream</button>
      <input type='number' value={value} onChange={(e) => setValue(e?.target?.value)} />
      <button onClick={() => dispatch(restocked(Number(value)))} >Restock Ice Cream</button>
    </div>
  )
}

export default IceCreamComponent