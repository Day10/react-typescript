import * as React from 'react';

interface IProps {
    color: string,
    size?: string,
};

interface IState{
    count: number
}

export default class Test extends React.Component<IProps, IState> {
    public state = {
        count: 1,
    }

    public render () {
        return (
            <div style={{color: this.props.color}}>hello world</div>
        )
    }
}
