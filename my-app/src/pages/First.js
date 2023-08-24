import {Button, Col, DatePicker, Form, Input, Row, Select} from "antd"
import { useNavigate } from "react-router"
import { router } from "../constants/router";
import { useEffect, useState } from "react";
import { country } from "../functions/countries"


export const First = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false)
    const [form] = Form.useForm();
    const selectedValue = Form.useWatch("select", form);

    useEffect(()=>{
        if (selectedValue === "yes") {
            setVisible(true)
        } else{
            setVisible(false)
        }
    },[selectedValue, visible])


    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={24} justify="space-between">
                <Col offset={4} span={16} className="PersonalInform">Personal Information 1</Col>
                <Col offset={2} span={16}>
                    <Row gutter={24}>
                        <Col span={15}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="1. Surnames" name="Surnames">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="2. Given Names" name="givenName">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="3. Full Name" name="FullName">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item  label="4. Have you ever used other names (i.e., maiden, religious, professional, alias, etc.)?" name="select">
                                        <Select
                                            defaultValue=""
                                            options={[
                                                {
                                                    label: "no",
                                                    value: "no"
                                                },
                                                {
                                                    label: "yes",
                                                    value: "yes"
                                                }
                                            ]}/>
                                    </Form.Item>
                                </Col>
                                {visible && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="4.1 Other Surnames Used (maiden, religious, professional, aliases, etc.)" name="one">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="4.2 Other Given Names Used" name="two">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item  label="5. Do you have a telecode that represents your name?" name="select">
                                        <Select
                                            defaultValue=""
                                            options={[
                                                {
                                                    id : '2',
                                                    label: "no",
                                                    value: "no"
                                                },
                                                {
                                                    id : '2',
                                                    label: "yes",
                                                    value: "yes"
                                                }
                                            ]}/>
                                    </Form.Item>
                                </Col>
                                {visible && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item
                                                label="5.1 Telecode Surnames" name="three">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="5.2 Telecode Given Names" name="four">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item label="6. Sex" name="select3">
                                        <Select
                                            defaultValue=" "
                                            options={[
                                                {
                                                    label: "a. Male",
                                                    value: "a. Male"
                                                },
                                                {
                                                    label: "b. Female",
                                                    value: "b. Female"
                                                }
                                            ]}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="7. Marital Status" name="select4">
                                        <Select
                                            defaultValue=" "
                                            options={[
                                                {
                                                    label: "a. Married",
                                                    value: "a. Married"
                                                },
                                                {
                                                    label: "b. Common law marriage",
                                                    value: "b. Common law marriage"
                                                },
                                                {
                                                    label: "c. Civil Union/Domestic Partnership",
                                                    value: "c. Civil Union/Domestic Partnership"
                                                },
                                                {
                                                    label: "d. Single",
                                                    value: "d. Single"
                                                },
                                                {
                                                    label: "e. Widowed",
                                                    value: "e. Widowed"
                                                },
                                                {
                                                    label: "f. Divorced",
                                                    value: "f. Divorced"
                                                },
                                                {
                                                    label: "g. Legally separated",
                                                    value: "g. Legally separated"
                                                },
                                                {
                                                    label: "h. Other",
                                                    value: "h. Other"
                                                }
                                            ]}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="8. Date and Place of Birth" name="select5">
                                        <Col offset={2} span={22}>
                                            <Form.Item label="8.1 (Format: YYYY-MM-DD)" name="select6">
                                                <DatePicker/>
                                            </Form.Item>
                                        </Col>
                                        <Col offset={2} span={22}>
                                            <Form.Item
                                                label="8.2 Country/Region" name="select7">
                                                <Select
                                                    defaultValue=""
                                                    options={country()}/>
                                            </Form.Item>
                                        </Col>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="8.3 City" name="City">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="8.4 State/Province" name="State/Province">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col offset={2} span={6}>
                            <Row>
                                <Col span={24}>Application ID:</Col>
                                <Col span={24}>
                                    <Form.Item label="Picture" name="Picture">

                                    </Form.Item>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col offset={2} span={24}>
                    <Button type="primary" onClick={() => navigate(router.HOME)}>previous</Button>
                    <Button type="primary" onClick={() => navigate(router.SECOND)} htmlType="submit">next</Button>
                </Col>
            </Row>
        </Form>


    )
}
