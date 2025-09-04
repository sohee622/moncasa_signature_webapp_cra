import Layout from "./layout/Layout"

export default function App({leng, data}) {
  return (
    <Layout leng={leng} data={data}>
        <div>언어 {leng} : {
          console.log(data)
        }</div>
    </Layout>
  )
}
