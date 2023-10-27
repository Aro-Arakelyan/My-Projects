import {Button, Col, Form, Row, Select} from "antd"
import {useNavigate} from "react-router"
import {router} from "../constants/router";
import {useEffect, useState} from "react";


export const Seventeenth = () => {
    const navigate = useNavigate();

    const [visible72, setVisible72] = useState(false)
    const [visible73, setVisible73] = useState(false)


    const [form] = Form.useForm();

    const selectedValue72 = Form.useWatch("obtain-visa-by-fraud", form);
    const selectedValue73 = Form.useWatch("deported-from-country", form);



    useEffect(() => {
        if (selectedValue72 === "yes") {
            setVisible72(true)
        } else {
            setVisible72(false)
        }
    }, [selectedValue72, visible72])

    useEffect(() => {
        if (selectedValue73 === "yes") {
            setVisible73(true)
        } else {
            setVisible73(false)
        }
    }, [selectedValue73, visible73])


    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={24} justify="space-between">
                <Col offset={4} span={15} className="PersonalInform">Security and Background: Part 4</Col>
                <Col offset={2} span={16}>
                    <Row gutter={24}>
                        <Col span={15}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="89. Have you ever sought to obtain or assist others to obtain a visa, entry into the United States, or any other United States immigration benefit by fraud or willful misrepresentation or other unlawful means?"
                                        name="obtain-visa-by-fraud">
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
                                {visible72 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="89.1 Explain" name="explain89">
                                                <textarea id="textar89" name="textar89" rows="4" cols="60"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="90. Have you ever been removed or deported from any country?"
                                        name="deported-from-country">
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
                                {visible73 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="90.1 Explain" name="explain90">
                                                <textarea id="textar90" name="textar90" rows="4" cols="60"></textarea>
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
                        <Button type="primary" onClick={() => navigate(router.SIXTEENTH)}>
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
