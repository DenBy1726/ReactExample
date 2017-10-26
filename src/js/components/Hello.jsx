import React from 'react';
class Hello extends React.Component{
    constructor(){
        super();
    }
    render() {
        this.index = Math.round(Math.random()%this.props.hello.length);
        return <p>{this.props.hello[this.index]}, {this.props.name}</p>;
    }
}
Hello.defaultProps = {name:"React" ,hello: ["Hello","Nice to see you again"]};
export default Hello;