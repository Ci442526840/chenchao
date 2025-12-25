import React from "react"
interface Props {
    title?: string
    id: number
    obj: {
        a: number
        b: number
    }
    arr: number[]
    cb: (a: number, b: number) => number
    empty: null
    element: React.ReactNode
    children?: React.ReactNode
}

const defaultProps: Partial<Props> = {
    title: '默认标题',
}

const Test: React.FC<Props> = (props) => {
    const { title } = { ...defaultProps, ...props }
    return <div>
        <div>{title}</div>
        <div>{props.children}</div>
    </div>
}

export default Test 
