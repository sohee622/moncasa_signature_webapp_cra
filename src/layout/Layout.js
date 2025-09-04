import Hd from './hd/Hd'
import Ft from './ft/Ft'
import Quick from './quick/Quick'


export default function Layout({children, leng, data}) {
  return (
    <>
    <Hd leng={leng} data={data}></Hd>
    <div>
        {children}
        <Quick></Quick>
    </div>
    <Ft></Ft>
    </>
  )
}
