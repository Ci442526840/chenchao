import './index.css'
import emitter from '../../utils/eventBus'
emitter.on('cardClick', (e) => {
    console.log(e);
});
emitter.on('*', (type, e) => {
    console.log(type, e);
});
interface CardProps {
    title?: string
    callback?: (params: string) => void
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
            <button>取消</button>
        </footer>
    </div>
}
