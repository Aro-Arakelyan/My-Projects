import {Button, Col, DatePicker, Form, Input, Row, Select} from "antd"
import {useNavigate} from "react-router"
import {router} from "../constants/router";
import {useEffect, useState} from "react";
import {country} from "../functions/countries"


export const Seventh = () => {
    const navigate = useNavigate();
    const [visible33, setVisible33] = useState(false)
    const [visible34, setVisible34] = useState(false)

    const [form] = Form.useForm();
    const selectedValue33 = Form.useWatch("Passport-book-number", form);
    const selectedValue34 = Form.useWatch("passport-lost-stolen", form);



    useEffect(() => {
        if (selectedValue33 === "yes") {
            setVisible33(true)
        } else {
            setVisible33(false)
        }
    }, [selectedValue33, visible33])

    useEffect(() => {
        if (selectedValue34 === "yes") {
            setVisible34(true)
        } else {
            setVisible34(false)
        }
    }, [selectedValue34, visible34])



    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={24} justify="space-between">
                <Col offset={4} span={15} className="PersonalInform">Passport Information</Col>
                <Col offset={2} span={16}>
                    <Row gutter={24}>
                        <Col span={15}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="35.P Passport/Travel Document Type"
                                        name="select36">
                                        <Select
                                            initialvalue=""
                                            options={[
                                                {
                                                    label: "a. REGULAR",
                                                    value: "a. REGULAR"
                                                },
                                                {
                                                    label: "b. OFFICIAL",
                                                    value: "b. OFFICIAL"
                                                },
                                                {
                                                    label: "c. DIPLOMATIC",
                                                    value: "c. DIPLOMATIC"
                                                },
                                                {
                                                    label: "d. LAISSEZ-PASSER",
                                                    value: "d. LAISSEZ-PASSER"
                                                },
                                                {
                                                    label: "e. OTHER",
                                                    value: "e. OTHER"
                                                }
                                            ]}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="36. Passport/Travel Document Number" name="passportNumber36">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="37. Passport Book Number" name="Passport-book-number">
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
                                {visible33 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <span>
                                                <p className="text">Does Not Apply</p>
                                                <Form.Item rules={[{required: true,},]}
                                                    label="37.1"
                                                    name="37.1">
                                                    <Input/>
                                                </Form.Item>
                                            </span>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="38. Country/Authority that Issued Passport/Travel Document" name="country38">
                                        <Select
                                            initialvalue=""
                                            options={country()}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="39. Where was the Passport/Travel Document Issued?" name="passportIssued39">
                                        <div>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="39.1 City" name="city39">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="39.2 State/Province" name="state39">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]}
                                                    label="39.3 Country/Region" name="country39">
                                                    <Select
                                                        initialvalue=""
                                                        options={country()}/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <div className="lengthOfStay">
                                                    <Form.Item rules={[{required: true,},]} label="39.4 Issuance Date" name="issuanceDate39">
                                                        <DatePicker/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]} label="39.5 Expiration Date" name="expirationDate39">
                                                        <DatePicker/>
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                        </div>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="40. Have you ever lost a passport or had one stolen?" name="passport-lost-stolen">
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
                                {visible34 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="40.1 Passport/Travel Document Number" name="passportNumber40">
                                                    <Input/>
                                                </Form.Item>
                                        </Col>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="40.2 Country/Authority that Issued Passport/Travel Document" name="authority40">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="40.3 Explain" name="explain40">
                                                <textarea id="textar40" name="textar40" rows="6" cols="50"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col offset={2} span={22}>
                    <Form.Item label=" ">
                        <Button type="primary" onClick={() => navigate(router.SIXTH)}>
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
