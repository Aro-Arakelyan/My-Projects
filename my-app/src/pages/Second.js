import {Button, Col, Form, Input, Row, Select} from "antd"
import {useNavigate} from "react-router"
import {router} from "../constants/router";
import {useEffect, useState} from "react";
import {country} from "../functions/countries";

export const Second = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false)
    const [form] = Form.useForm();
    const selectedValue = Form.useWatch("select", form);

    useEffect(() => {
        if (selectedValue === "yes") {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [selectedValue, visible])


    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={24} justify="space-between">
                <Col offset={4} span={16} className="PersonalInform">Personal Information 2</Col>
                <Col offset={2} span={16}>
                    <Row gutter={24}>
                        <Col span={15}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item
                                        label="9. Country/Region of Origin (Nationality)" name="select8">
                                        <Select
                                            initialvalue=""
                                            options={country()}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item
                                        label="10. Do you hold or have you held any nationality other than the one indicated above on nationality?"
                                        name="select">
                                        <Select
                                            initialvalue=""
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
                                            <Form.Item label="10.1 Other Country/Region of Origin (Nationality)"
                                                       name="five">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col offset={2} span={22}>
                                            <Form.Item
                                                label="10.2 Do you hold a passport for the other country/region of origin (nationality) indicated above?"
                                                name="select">
                                                <Select
                                                    initialvalue=""
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
                                                <Col offset={4} span={20}>
                                                    <Form.Item label="10.2.1 Passport Number" name="tenTwoOne">
                                                        <Input/>
                                                    </Form.Item>
                                                </Col>

                                            </Row>
                                        </Col>}
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item
                                        label="11. Are you a permanent resident of a country/region other than your country/region of origin (nationality) indicated above?"
                                        name="select">
                                        <Select
                                            initialvalue=""
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
                                            <Form.Item
                                                label="11.1 Other Permanent Resident Country/Region" name="elevenOne">
                                                <Select
                                                    initialvalue=""
                                                    options={[
                                                        {
                                                            label: "Aruba",
                                                            value: "Aruba"
                                                        },
                                                        {
                                                            label: "Armenia",
                                                            value: "Armenia"
                                                        },
                                                        {
                                                            label: "Argentina",
                                                            value: "Argentina"
                                                        },
                                                        {
                                                            label: "Brazil",
                                                            value: "Brazil"
                                                        },
                                                        {
                                                            label: "Germany",
                                                            value: "Germany"
                                                        },
                                                        {
                                                            label: "Denmark",
                                                            value: "Denmark"
                                                        },
                                                        {
                                                            label: "Georgia",
                                                            value: "Georgia"
                                                        },
                                                        {
                                                            label: "Spain",
                                                            value: "Spain"
                                                        },
                                                        {
                                                            label: "Russia",
                                                            value: "Russia"
                                                        },
                                                        {
                                                            label: "USA",
                                                            value: "USA"
                                                        },
                                                        {
                                                            label: "UK",
                                                            value: "UK"
                                                        },
                                                        {
                                                            label: "Wales",
                                                            value: "Wales"
                                                        }
                                                    ]}/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item label="12. National Identification Number" name="select">
                                        <Select
                                            initialvalue=""
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
                                    <Col offset={7}>
                                        <span className="text">
                                            If Yes, fill
                                        </span>
                                        <span>
                                            <input className="input1" type="text"/>
                                        </span>
                                    </Col>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="13.1.2.3 U.S. Social Security Number" name="select">
                                        <Select
                                            initialvalue=""
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
                                    <Col offset={7}>
                                            <span className="text">
                                                If Yes, fill
                                            </span>
                                            <span className="ssn">SSN1</span>
                                            <span className="ssn">SSN2</span>
                                            <span className="ssn">SSN3</span>
                                            <span>
                                                <input className="input2" type="text"/>
                                            </span>

                                    </Col>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="14. U.S. Taxpayer ID Number" name="select">
                                        <Select
                                            initialvalue=""
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
                                    <Col offset={7}>
                                        <span className="text">
                                            If Yes, fill
                                        </span>
                                        <span>
                                            <input className="input1" type="text"/>
                                        </span>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col offset={2} span={24}>
                    <Button type="primary" onClick={() => navigate(router.FIRST)}>previous</Button>
                    <Button type="primary" onClick={() => navigate(router.THIRD)} htmlType="submit">next</Button>
                </Col>
            </Row>
        </Form>
    )
}
