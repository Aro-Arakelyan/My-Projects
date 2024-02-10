import { Button, Col, Form, Row, Select } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { router } from "../constants/router";


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
                        navigate(router.EIGHTEENTH);
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
                <Col offset={8} span={16} className="PersonalInform">Security and Background: Part 4</Col>
                <div className="asd">
                    <div>
                        <Col offset={2} span={21}>
                            <Row gutter={11}>
                                <Col span={21}>
                                    <Row className="inp">
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
                                                <textarea id="textar89" name="textar89" rows="8" cols="30"></textarea>
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
                                                <textarea id="textar90" name="textar90" rows="8" cols="30"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </div>
                <Col className="buttons" offset={6} span={18}>
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
