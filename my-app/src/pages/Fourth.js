import {Button, Col, Form, Input, Row, Select} from "antd"
import {useNavigate} from "react-router"
import {router} from "../constants/router";
import {useEffect, useState} from "react";

export const Fourth = () => {
    const navigate = useNavigate();
    const [visible18, setVisible18] = useState(false)
    const [visible19, setVisible19] = useState(false)
    const [visible20, setVisible20] = useState(false)

    const [form] = Form.useForm();
    const selectedValue18 = Form.useWatch("select18", form);
    const selectedValue19 = Form.useWatch("select19", form);
    const selectedValue20 = Form.useWatch("select20", form);


    useEffect(() => {
        if (selectedValue18 === "yes") {
            setVisible18(true)
        } else {
            setVisible18(false)
        }
    }, [selectedValue18, visible18])

    useEffect(() => {
        if (selectedValue19 === "yes") {
            setVisible19(true)
        } else {
            setVisible19(false)
        }
    }, [selectedValue19, visible19])

    useEffect(() => {
        if (selectedValue20 === "no") {
            setVisible20(true)
        } else {
            setVisible20(false)
        }
    }, [selectedValue20, visible20])


    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={23} justify="space-between">
                <Col offset={4} span={15} className="PersonalInform">Travel Companions Information</Col>
                <Col offset={2} span={15}>
                    <Row gutter={23}>
                        <Col span={15}>
                            <Row>
                                <Col span={23}>
                                    <Form.Item label="21. Are there other persons traveling with you?" name="select18">
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
                                {visible18 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={21}>
                                            <Form.Item
                                                label="21.1 Are you traveling as part of a group or organization?"
                                                name="select19">
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
                                        {visible19 && <Col span={24}>
                                            <Row>
                                                <Col offset={4} span={19}>
                                                    <Form.Item label="21.1.1 Group Name" name="groupName">
                                                        <Input/>
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </Col>}
                                        {visible20 && <Col span={23}>
                                            <Row>
                                                <Col offset={2} span={21}>
                                                    <Form.Item label="21.1.2 Surnames of Person Traveling With You"
                                                               name="surnamesWithYou">
                                                        <Input/>
                                                    </Form.Item>
                                                    <Form.Item label="21.1.3 Given Names of Person Traveling With You"
                                                               name="namesWithYou">
                                                        <Input/>
                                                    </Form.Item>
                                                    <Form.Item label="21.1.4 Relationship with Person"
                                                               name="relationshipWithPerson">
                                                        <Input/>
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </Col>}
                                    </Row>
                                </Col>}
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col offset={2} span={21}>
                    <Button type="primary" onClick={() => navigate(router.THIRD)}>previous</Button>
                    <Button type="primary" onClick={() => navigate(router.FIFTH)} htmlType="submit">next</Button>
                </Col>
            </Row>
        </Form>
    )
}
