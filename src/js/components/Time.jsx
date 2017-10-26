import React from 'react';
class Time extends React.Component {

    constructor(props){
        super(props);
        this.state = {date: new Date()};

        this.tick = this.tick.bind(this);
    }

    componentDidMount() {

        this.timer = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {

        clearInterval(this.timer);
    }

    tick() {

        this.setState({date:new Date()});
    }

    render() {

        return <b>{this.state.date.toLocaleTimeString()}</b>;
    }
}

export default Time;


