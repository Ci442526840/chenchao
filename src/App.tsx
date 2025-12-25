import './App.css'
import Card from './components/Card'
import Card2 from './components/Card2'
import Test from './components/Test'
const fn = (params: string) => {
  console.log(params);
}
//react只能局部引用 
function App() {
  return (
    <>
      <button onClick={() => window.onShow()}>显示message</button>
      {/* <Card title={'123'} callback={fn}></Card> */}
      <Card title={'456'}></Card>
      <Card2 title={'456'}></Card2>
      <Test title={'自定义标题'}
        id={1}
        obj={{ a: 1, b: 2 }}
        arr={[1, 2, 3]}
        cb={(a: number, b: number) => a + b}
        empty={null}
        element={<div>123123</div>}>
        <div>
          <i>i标签</i>
          <div>div标签</div>
        </div>
      </Test>
    </>
  )
}

export default App