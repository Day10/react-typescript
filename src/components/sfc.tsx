import * as React from 'react';
import { SFC } from 'react'
import { MouseEventHandler } from 'react'

interface IProps {
    onClick : MouseEventHandler<HTMLDivElement>,
}

const ButtonSFC: SFC<IProps> = ({onClick}) => {
    return (
        <div onClick={onClick}>
            click me
        </div>
    )
}

export default ButtonSFC