
import { useState  } from 'react';

import App from './App'

import './moncasa.scss';
import navi from './data/navi.json'

// 언어선택에 따른 전체 컴포넌트 리셋
export default function Global() {
    const [leng, setLeng] = useState('kr');
    const globaldata = navi[leng];
  return (
    <App leng={leng} data={globaldata} />
  )
}

