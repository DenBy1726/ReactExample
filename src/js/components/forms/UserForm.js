import React from 'react';
import AgeField from './Fields/AgeField.js';
import NameField from './Fields/NameField.js';

class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let name = this.refs.nameField.state.value;
        let age = this.refs.ageField.state.value;
        if(this.refs.nameField.state.valid && this.refs.ageField.state.valid){
            alert("Имя: " + name + " Возраст: " + age);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>{this.props.title}</h2>
                <NameField value="" ref="nameField" />
                <AgeField value="" ref="ageField" />
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}
UserForm.defaultProps = {title:"Форма"};
export default UserForm;