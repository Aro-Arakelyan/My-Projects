import { Button, Col, Form, Input, Row, Select } from "antd";
import { useNavigate } from "react-router";
import { router } from "../constants/router";
import { province } from "../functions/countries";


export const Eighth = () => {
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
                        navigate(router.NINTH);
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
                <Col offset={8} span={16} className="PersonalInform">U.S. Point of Contact Information</Col>
                <div>
                    <div>
                        <Col offset={2} span={21}>
                            <Row gutter={11}>
                                <Col span={21}>
                                    <Row className="inp">
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="41. Contact Person Surnames" name="contactPerson41">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="42. Given Names " name="givenNames42">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="43. Organization Name " name="organizationName43">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="44. Relationship to You" name="relationshipToYou44">
                                        <Select
                                            initialvalue=""
                                            options={[
                                                {
                                                    label: "a. RELATIVE",
                                                    value: "a. RELATIVE"
                                                },
                                                {
                                                    label: "b. SPOUSE",
                                                    value: "b. SPOUSE"
                                                },
                                                {
                                                    label: "c. FRIEND",
                                                    value: "c. FRIEND"
                                                },
                                                {
                                                    label: "d. BUSINESS ASSOCIATE",
                                                    value: "d. BUSINESS ASSOCIATE"
                                                },
                                                {
                                                    label: "e. EMPLOYER",
                                                    value: "e. EMPLOYER"
                                                },
                                                {
                                                    label: "f. SCHOOL OFFICIAL",
                                                    value: "f. SCHOOL OFFICIAL"
                                                },
                                                {
                                                    label: "g. OTHER",
                                                    value: "g. OTHER"
                                                }
                                            ]}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <span>Address and Phone Number of Point of Contact</span>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="44.1 Street" name="street44">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="44.2 City" name="city44">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="44.3 State" name="state44">
                                                <Select
                                                    initialvalue=""
                                                    options={province()}/>
                                            </Form.Item>
                                        </Col>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="44.4 Zip Code" name="zipCode44">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="44.5 Phone Number" name="phoneNumber44">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="44.6 Email Address" name="emailAddress44">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </div>
                <Col className="buttons" offset={6} span={18}>
                    <Form.Item label=" ">
                        <Button type="primary" onClick={() => navigate(router.SEVENTH)}>
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
