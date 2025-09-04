import style from './quick.module.scss'

export default function Quick() {
  return (
      <nav class={`${style.quick_menu} position-fixed`}>
            <ul>
                <li>
                <a href="" className='basic-text'>
                    <span class="label">더 많은<br />제품보기</span>
                    <span class={`${style.icon} prod mainColor-bg`}><img src="./img/quick_icon_1.png" alt="" class="img_s" /></span>
                </a>
                </li>
                <li>
                <a href=""  className='basic-text'>
                    <span class="label">매장찾기</span>
                    <span class={`${style.icon} store mainColor-bg`}><img src="./img/quick_icon_2.png" alt="" class="img_s" /></span>    
                </a>
                </li>
                <li>
                <a href=""  className='basic-text'>
                    <span class="label">고객센터</span>
                    <span class={`${style.icon} cs mainColor-bg`}><img src="./img/quick_icon_3.png" alt="" class="img_s" /></span>    
                </a>
            </li>
            </ul>
            <button id="mobile_quick" class="d-lg-none">
                <span class="icon open">
                    <img src="./img/quick_icon_4.png" alt="" class="img_s d-none close" />
                    <img src="./img/quick_icon_5.png" alt="" class="img_s open" />
                </span>    
            </button>
        </nav>
  )
}
