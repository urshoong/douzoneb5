import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
//우리가 slice를 등록한 js파일
import Store from "./store/Store";

//전역변수 등록한 store를 변수로 할당
const store = Store;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //Provider 에 store를 설정해주면 Provider하위의 모든 컴포넌트에서 사용 가능
    <Provider store={store}>
        <App />
    </Provider>
);