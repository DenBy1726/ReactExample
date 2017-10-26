import React from 'react';
class SwitchableButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {class: "off", label: "Нажми"};

        this.press = this.press.bind(this);
    }



    componentWillMount(){
        //перед рендерингом
    }
    componentDidMount(){
        //после рендеринга
    }
    componentWillUnmount(){
        //посел удаления из дома
    }
    shouldComponentUpdate(){
        //когда обновилось свойство
        return true;
    }
    componentWillUpdate(){
        //перед обновлением свойства
    }
    componentDidUpdate(){
       //после обновления свойства
    }

    press(){
        let className = (this.state.class==="off")?"on":"off";
        this.setState({class: className});
    }
    render() {
        let classElement = `switchableButton ${this.state.class}`;
        return <button onClick={this.press} className={classElement}>{this.state.label}</button>;
    }
}

export default SwitchableButton;