import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { changeHello, changeHelloAsync } from './testerSlice'

function Tester() {
  // TODO: 이런 부분에서 타입 반영이 필요하겠구나
  const { value, status } = useSelector(store => store.tester)
  const dispatch = useDispatch()

  return <div>
    {value} &nbsp;
    <button onClick={() => dispatch(changeHello())}>Change</button>
    <button onClick={() => dispatch(changeHelloAsync())}>Change Async 3s</button>
    <div>
      {status === 'loading' && 'fetching value...'}
    </div>
  </div>;
}

export default Tester;
