import React from "react";
import { store } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { changeHello } from './testerSlice'

function Tester() {
  const test = useSelector(store => store.tester.value)
  const dispatch = useDispatch()

  return <div>
    {test} &nbsp;
    <button onClick={() => dispatch(changeHello())}>Change</button>
  </div>;
}

export default Tester;
