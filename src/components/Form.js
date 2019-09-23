import React from 'react';
import { Card, Form, Icon, Input, Button, Checkbox, Row, Col, message } from "antd";
import Swal from 'sweetalert2'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'hamza',
            code: '95942'
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                if(values.password == '95942') {
                    message.success('login succeed');
                    this.props.history.push('/home');
                } else {
                    message.warn('Code not matched');
                }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{ marginTop: 200 }}>
                <Row>
                    <Col span={16} offset={4}>

                        <Card>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item label="Student Name">
                                    {getFieldDecorator('username', {
                                        rules: [{ message: 'Please input your username!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder={this.state.name}
                                            disabled
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Enter Code">
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please enter code!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="enter code of 5 digits"
                                            value={this.state.code}
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    <Button block type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                </Button>
                        
                                </Form.Item>
                            </Form>

                        </Card>

                    </Col>
                </Row>

            </div>
        )
    }
}
const LoginForm = Form.create()(Login);

export default LoginForm;