import React from 'react';

class NameField extends React.Component{
    constructor(props){
        super(props);
        let isValid = this.validate(props.value);
        this.state = {value: props.value, valid: isValid};
        this.onChange = this.onChange.bind(this);
    }

    validate(val){
        return val.length>2;
    }

    onChange(e) {
        let val = e.target.value;
        let isValid = this.validate(val);
        this.setState({value: val, valid: isValid});
    }
    render() {
        let color = this.state.valid===true?"green":"red";
        return   <p>
            <label>Имя:</label>
            <input defaultValue="" type="text" value={this.state.value} className={"formInput"} onChange={this.onChange} placeholder="Введите имя"
                   style={{borderColor:color}}/>
        </p>;
    }
}

export default NameField;