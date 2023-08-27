import {Button, Col, DatePicker, Form, Input, Row, Select} from "antd"
import {useNavigate} from "react-router"
import {router} from "../constants/router";
import {country} from "../functions/countries"

export const Eleventh = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={24} justify="space-between">
                <Col offset={4} span={15} className="PersonalInform">Family Information: Spouse</Col>
                <Col offset={2} span={16}>
                    <Row gutter={24}>
                        <Col span={15}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="55. Primary Occupation" name="primaryOccupation55">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item label="55.1 Present Employer or School Name " name="schoolName55">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item label="55.2 Street Address" name="streetAddress55">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item label="55.3 City" name="city55">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item label="55.4 State/Province" name="state55">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item label="55.5 Postal Zone/ZIP Code" name="zipCode55">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item label="55.6 Phone Number" name="phoneNumber55">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item
                                        label="55.7 Country/Region" name="country55">
                                        <Select
                                            initialvalue=""
                                            options={country()}/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item label="55.8 Start Date" name="startDate55">
                                        <DatePicker/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item label="55.9 Monthly Income in Local Currency (if employed)"
                                               name="mountlyIncome55">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item label="55.10 Briefly describe your duties:" name="duties55">
                                        <textarea id="textar55" name="textar55" rows="6" cols="50"></textarea>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col offset={2} span={22}>
                    <Button type="primary" onClick={() => navigate(router.TENTH)}>previous</Button>
                    <Button type="primary" onClick={() => navigate(router.TWELFTH)} htmlType="submit">next</Button>
                </Col>
            </Row>
        </Form>
    )
}
