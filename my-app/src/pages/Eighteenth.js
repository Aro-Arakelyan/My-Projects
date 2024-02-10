import { Button, Col, Form, Row, Select } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { router } from "../constants/router";


export const Eighteenth = () => {
    const navigate = useNavigate();

    const [visible74, setVisible74] = useState(false)
    const [visible75, setVisible75] = useState(false)
    const [visible76, setVisible76] = useState(false)


    const [form] = Form.useForm();

    const selectedValue74 = Form.useWatch("deny-of-guardianship", form);
    const selectedValue75 = Form.useWatch("voted-in-violation", form);
    const selectedValue76 = Form.useWatch("renounced-US-citizenship", form);


    useEffect(() => {
        if (selectedValue74 === "yes") {
            setVisible74(true)
        } else {
            setVisible74(false)
        }
    }, [selectedValue74, visible74])

    useEffect(() => {
        if (selectedValue75 === "yes") {
            setVisible75(true)
        } else {
            setVisible75(false)
        }
    }, [selectedValue75, visible75])

    useEffect(() => {
        if (selectedValue76 === "yes") {
            setVisible76(true)
        } else {
            setVisible76(false)
        }
    }, [selectedValue76, visible76])


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
                <Col offset={8} span={16} className="PersonalInform">Security and Background: Part 5</Col>
                <div className="asd">
                    <div>
                        <Col offset={2} span={21}>
                            <Row gutter={11}>
                                <Col span={21}>
                                    <Row className="inp">
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="91. Have you ever withheld custody of a U.S. citizen child outside the United States from a person granted legal custody by a U.S. court?"
                                        name="deny-of-guardianship">
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
                                {visible74 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="91.1 Explain" name="explain91">
                                                <textarea id="textar91" name="textar91" rows="8" cols="30"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="92. Have you voted in the United States in violation of any law or regulation?"
                                        name="voted-in-violation">
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
                                {visible75 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="92.1 Explain" name="explain92">
                                                <textarea id="textar92" name="textar92" rows="8" cols="30"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="93. Have you ever renounced United States citizenship for the purposes of avoiding taxation?"
                                        name="renounced-US-citizenship">
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
                                {visible76 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="93.1 Explain" name="explain93">
                                                <textarea id="textar93" name="textar93" rows="8" cols="30"></textarea>
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
                        <Button type="primary" onClick={() => navigate(router.SEVENTEENTH)}>
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
