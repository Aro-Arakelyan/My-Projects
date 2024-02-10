import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { useNavigate } from "react-router";
import { router } from "../constants/router";
import { country } from "../functions/countries";
import { Occupation } from "../functions/occupation";

export const Eleventh = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const handleSubmit = () => {
        form
            .validateFields()
            .then((values) => {
                console.log('Form values:', values);
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('Server response:', data);
                        navigate(router.TWELFTH);
                    })
                    .catch((error) => {
                        console.error('An error occurred:', error);
                    });
            })
            .catch((error) => {
                console.error('Form validation failed:', error);
            });
    };

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={11} justify="space-between">
                <Col offset={8} span={16} className="PersonalInform">Family Information: Spouse</Col>
                    <div className="asd">
                        <div>
                            <Col offset={2} span={21}>
                                <Row gutter={11}>
                                    <Col span={21}>
                                        <Row className="inp">
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="55. Primary Occupation" name="primaryOccupation55">
                                        <Select
                                            initialvalue=""
                                            options={Occupation()}/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item rules={[{required: true,},]} label="55.1 Present Employer or School Name " name="schoolName55">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item rules={[{required: true,},]} label="55.2 Street Address" name="streetAddress55">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item rules={[{required: true,},]} label="55.3 City" name="city55">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item rules={[{required: true,},]} label="55.4 State/Province" name="state55">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item rules={[{required: true,},]} label="55.5 Postal Zone/ZIP Code" name="zipCode55">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item rules={[{required: true,},]} label="55.6 Phone Number" name="phoneNumber55">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="55.7 Country/Region" name="country55">
                                        <Select
                                            initialvalue=""
                                            options={country()}/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item rules={[{required: true,},]} label="55.8 Start Date" name="startDate55">
                                        <DatePicker/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item rules={[{required: true,},]} label="55.9 Monthly Income in Local Currency (if employed)"
                                               name="mountlyIncome55">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item rules={[{required: true,},]} label="55.10 Briefly describe your duties:" name="duties55">
                                        <textarea id="textar55" name="textar55" rows="10" cols="30"></textarea>
                                    </Form.Item>
                                </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                    </div>
                <Col className="buttons" offset={6} span={18}>
                    <Form.Item label=" ">
                        <Button type="primary" onClick={() => navigate(router.TENTH)}>
                            previous
                        </Button>
                        <Button type="primary" htmlType="submit">
                            next
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}
