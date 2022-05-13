---
title: 리덕스 배우기
---

## @reduxjs/toolkit, react-redux

[빠른 시작 | 리덕스 툴킷](https://redux-toolkit.js.org/tutorials/quick-start)

### Create a Redux Store ([link](https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-store))

```js (store.js)
import { configureStore } from '@reduxjs/toolkit';
...

export const store = configureStore({
  reducer: {},
})
```

```ts
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
```

스토어 생성 API, Redux DevTools 확장이 자동 구성됨

### Provide the Redux Store to React ([link](https://redux-toolkit.js.org/tutorials/quick-start#provide-the-redux-store-to-react))

### Create a Redux State Slice

### Add Slice Reducers to the Store

- 슬라이스 생성
  - 식별하기 위한 이름
  - 초기 상태 값
  - 상태 업데이트 방법을 정의하는 하나 이상의 리듀서 함수

슬라이스가 생성되면 Redux toolkit에 의해 생성된 Redux 액션 생성자와 전체 슬라이스에 대한 리듀서 기능을 내보낼 수 있다

### Use Redux State and Actions in React Components

리액트 컴포넌트에서 리덕스 스토어를 가져오고, reselect, dispatch 등...

### What You've Learned

```text
SUMMARY
Create a Redux store with configureStore
configureStore accepts a reducer function as a named argument
configureStore automatically sets up the store with good default settings
Provide the Redux store to the React application components
Put a React-Redux <Provider> component around your <App />
Pass the Redux store as <Provider store={store}>
Create a Redux "slice" reducer with createSlice
Call createSlice with a string name, an initial state, and named reducer functions
Reducer functions may "mutate" the state using Immer
Export the generated slice reducer and action creators
Use the React-Redux useSelector/useDispatch hooks in React components
Read data from the store with the useSelector hook
Get the dispatch function with the useDispatch hook, and dispatch actions as needed
```

### READ MORE

#### Extra Reducer?

Redux Thunk 관련, 비동기 작업의 경우...툴킷 기본 문서에서는 안나와 있으니 적절한 참고 아티클을 추가하기

아마 데이터 연동을 위한 API 비동기 호출 작성 -> Promise 상태에 따른 적절한 추가 스테이트 작성 -> createAsyncThunk 작성(testerSlice.js의 changeHelloAsync 참고) -> extraReducer 정의 -> 컴포넌트 반영

#### with Typescript

[TypeScript Quick Start | Redux Toolkit](https://redux-toolkit.js.org/tutorials/typescript)

#### reselect

- useSelector관련 이슈 찾아보기
- createSelector 적절한 예시 고려해보기

#### 그 외?

> ### 리마인드
>
> 1. 리덕스 스토어 생성
> 2. 리액트 앱에 스토어 제공 (Provider as a prop)
> 3. 리덕스 상태 슬라이스 만들기, 리덕스 스타일 가이드의 폴더 구조에 따르면 컴포넌트별 feature로 묶는것을 권장

<!-- TODO: 리덕스 구성 과정 다시 정리해보자 -->
---
