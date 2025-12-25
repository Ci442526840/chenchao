import './index.css'
import emitter from '../../utils/eventBus'
interface CardProps {
    title?: string
    callback?: (params: string) => void
}
const emitFunc = () => {
    emitter.emit('cardClick', '点击发送事件');
}
export default function Card(props: CardProps) {
    return <div className='card'>
        <header>
            <div>{props.title}</div>
            <div>副标题</div>
        </header>
        <main>内容</main>
        <footer>
            <button onClick={() => { props.callback && props.callback('123123') }}>确认</button>
            <button onClick={emitFunc}>发送事件</button>
            <button>取消</button>
        </footer>
    </div>
}
