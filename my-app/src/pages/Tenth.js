import {Button, Col, DatePicker, Form, Input, Row, Select} from "antd"
import { useNavigate } from "react-router"
import { router } from "../constants/router";
import {country} from "../functions/countries"


export const Tenth = () => {
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
                                <span className="subtitle">Spouse's Full Name (include Maiden Name)</span>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="49. Spouse's Surnames" name="spouseSurename49">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="50. Spouse's Given Names" name="spouseGivenName">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="51. Spouse's Date of Birth" name="spouseBirthday51">
                                        <DatePicker/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="52. Relationship to You" name="relationshipToYou44">
                                        <Select
                                            initialvalue=""
                                            options={country()}/>
                                    </Form.Item>
                                </Col>
                                <span>53. Spouse's Place of Birth</span>
                                <Col offset={2} span={22}>
                                    <Form.Item rules={[{required: true,},]} label="53.1 City" name="city53">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={22}>
                                    <Form.Item rules={[{required: true,},]} label="53.2 Country/Region" name="country53">
                                    <Select
                                        initialvalue=""
                                        options={country()}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="54. Spouse's Address" name="spouseAddress54">
                                        <Select
                                            initialvalue=""
                                            options={[
                                                {
                                                    label: "a. Same as home address",
                                                    value: "a. Same as home address"
                                                },
                                                {
                                                    label: "b. Same as mailing address",
                                                    value: "b. Same as mailing address"
                                                },
                                                {
                                                    label: "c. Same as U.S. contact address",
                                                    value: "c. Same as U.S. contact address"
                                                },
                                                {
                                                    label: "d. Do not know",
                                                    value: "d. Do not know"
                                                },
                                                {
                                                    label: "e. Other (Specify address)",
                                                    value: "e. Other (Specify address)"
                                                }
                                            ]}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col offset={2} span={22}>
                    <Button type="primary" onClick={() => navigate(router.NINTH)}>previous</Button>
                    <Button type="primary" onClick={() => navigate(router.ELEVENTH)} htmlType="submit">next</Button>
                    <Form.Item label=" ">
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}
