import style from './hd.module.scss';
import { Link } from 'react-router-dom';

export default function Hd({leng, data}) {
  return (
     <header className={` ${style.hd }`}>
                <div class="d-flex justify-content-between align-items-center mainColor-bg px-4 px-sm-5 py-3 py-sm-4">
                    <h1><a href=""><img src="./img/logo_w.svg" alt="" class="logo" /></a></h1>
                    <div class="gnb_container d-flex align-items-center justify-content-between">
                        <nav>
                            <ul class={`${style.gnb} d-xl-flex d-none px-5 gap-5`} id="mon_navi">

                                { 
                                     Object.entries(data).map((v, i)=>{
                                        return <li class="gnb_li" key={i}>
                                                   <Link to={ v[1]['path']} 
                                                     class="gnb_li_a d-block text-white">
                                                        {v[1]['label']}
                                                    </Link> 
                                                </li>
                                     })
                                }
                            </ul>
                        </nav>
                        <button class={`${style.global_bt} d-flex align-items-center justify-content-between text-white fw-500`}>
                            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.52 14C27.52 15.7072 27.1837 17.3976 26.5304 18.9749C25.8771 20.5521 24.9195 21.9852 23.7124 23.1924C22.5052 24.3995 21.0721 25.3571 19.4949 26.0104C17.9176 26.6637 16.2272 27 14.52 27C12.8128 27 11.1224 26.6637 9.54512 26.0104C7.96789 25.3571 6.53479 24.3995 5.32763 23.1924C4.12047 21.9852 3.16289 20.5521 2.50958 18.9749C1.85627 17.3976 1.52002 15.7072 1.52002 14C1.52002 10.5522 2.88966 7.24558 5.32763 4.80761C7.7656 2.36964 11.0722 1 14.52 1C17.9678 1 21.2744 2.36964 23.7124 4.80761C26.1503 7.24558 27.52 10.5522 27.52 14Z" stroke="currentColor" stroke-width="1.86"/>
                                <path d="M19.7252 13.9999C19.7252 15.7068 19.59 17.398 19.3287 18.9748C19.0688 20.5516 18.6853 21.9841 18.2017 23.1918C17.7194 24.3994 17.1462 25.3562 16.5157 26.01C15.8839 26.6626 15.208 26.9993 14.5255 26.9993C13.843 26.9993 13.1671 26.6626 12.5366 26.01C11.9048 25.3562 11.3316 24.3981 10.8493 23.1918C10.3657 21.9841 9.98222 20.5529 9.72093 18.9748C9.45432 17.33 9.32216 15.6662 9.32575 13.9999C9.32575 12.2931 9.45965 10.6019 9.72093 9.0251C9.98222 7.44828 10.3657 6.01575 10.8493 4.80811C11.3316 3.60048 11.9048 2.64373 12.5353 1.98986C13.1671 1.33859 13.843 1.00061 14.5255 1.00061C15.208 1.00061 15.8839 1.33729 16.5144 1.98986C17.1462 2.64373 17.7194 3.60178 18.2017 4.80811C18.6853 6.01575 19.0688 7.44698 19.3287 9.0251C19.5913 10.6019 19.7252 12.2931 19.7252 13.9999Z" stroke="currentColor" stroke-width="1.86"/>
                                <path d="M1.52002 14H27.5187" stroke="currentColor" stroke-width="1.86" stroke-linecap="round"/>
                            </svg>
                            KOR
                        </button>
                    </div>
                </div>
                <ul class={`${style.gnb} d-flex d-xl-none gap-3 py-3 px-3 justify-content-start 
                justify-content-md-center mainColor-bg`} id="m_mon_navi"></ul>
   </header>
  )
}
