import { Button, Col, Form, Row, Select } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { router } from "../constants/router";


export const Fifteenth = () => {
    const navigate = useNavigate();
    const [visible53, setVisible53] = useState(false)
    const [visible54, setVisible54] = useState(false)
    const [visible55, setVisible55] = useState(false)
    const [visible56, setVisible56] = useState(false)
    const [visible57, setVisible57] = useState(false)
    const [visible58, setVisible58] = useState(false)
    const [visible59, setVisible59] = useState(false)


    const [form] = Form.useForm();
    const selectedValue53 = Form.useWatch("arrested-or-convicted", form);
    const selectedValue54 = Form.useWatch("violated-or-engaged", form);
    const selectedValue55 = Form.useWatch("prostitution-or-procuring-prostitutes", form);
    const selectedValue56 = Form.useWatch("money-laundering", form);
    const selectedValue57 = Form.useWatch("human-trafficking", form);
    const selectedValue58 = Form.useWatch("human-trafficking-outside-US", form);
    const selectedValue59 = Form.useWatch("relative-human-trafficking", form);



    useEffect(() => {
        if (selectedValue53 === "yes") {
            setVisible53(true)
        } else {
            setVisible53(false)
        }
    }, [selectedValue53, visible53])

    useEffect(() => {
        if (selectedValue54 === "yes") {
            setVisible54(true)
        } else {
            setVisible54(false)
        }
    }, [selectedValue54, visible54])

    useEffect(() => {
        if (selectedValue55 === "yes") {
            setVisible55(true)
        } else {
            setVisible55(false)
        }
    }, [selectedValue55, visible55])

    useEffect(() => {
        if (selectedValue56 === "yes") {
            setVisible56(true)
        } else {
            setVisible56(false)
        }
    }, [selectedValue56, visible56])

    useEffect(() => {
        if (selectedValue57 === "yes") {
            setVisible57(true)
        } else {
            setVisible57(false)
        }
    }, [selectedValue57, visible57])

    useEffect(() => {
        if (selectedValue58 === "yes") {
            setVisible58(true)
        } else {
            setVisible58(false)
        }
    }, [selectedValue58, visible58])

    useEffect(() => {
        if (selectedValue59 === "yes") {
            setVisible59(true)
        } else {
            setVisible59(false)
        }
    }, [selectedValue59, visible59])


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
                        navigate(router.SIXTEENTH);
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
            <Row gutter={1} justify="space-between">
                <Col offset={8} span={16} className="PersonalInform">Security and Background: Part 2</Col>
                <div className="asd">
                    <div>
                        <Col offset={2} span={21}>
                            <Row gutter={11}>
                                <Col span={21}>
                                    <Row className="inp">
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="70. Have you ever been arrested or convicted for any offense or crime, even though subject of a pardon, amnesty, or other similar action?"
                                        name="arrested-or-convicted">
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
                                {visible53 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="70.1 Explain" name="explain70">
                                                <textarea id="textar70" name="textar70" rows="8" cols="30"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="71. Have you ever violated, or engaged in a conspiracy to violate, any law relating to controlled substances?"
                                        name="violated-or-engaged">
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
                                {visible54 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="71.1 Explain" name="explain71">
                                                <textarea id="textar71" name="textar71" rows="8" cols="30"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="72. Are you coming to the United States to engage in prostitution or unlawful commercialized vice or have you been engaged in prostitution or procuring prostitutes within the past 10 years?"
                                        name="prostitution-or-procuring-prostitutes">
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
                                {visible55 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="72.1 Explain" name="explain72">
                                                <textarea id="textar72" name="textar72" rows="8" cols="30"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="73. Have you ever been involved in, or do you seek to engage in, money laundering?"
                                        name="money-laundering">
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
                                {visible56 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="73.1 Explain" name="explain73">
                                                <textarea id="textar73" name="textar73" rows="8" cols="30"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="74. Have you ever committed or conspired to commit a human trafficking offense in the United States or outside the United States?"
                                        name="human-trafficking">
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
                                {visible57 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="74.1 Explain" name="explain74">
                                                <textarea id="textar74" name="textar74" rows="8" cols="30"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="75. Have you ever knowingly aided, abetted, assisted or colluded with an individual who has committed, or conspired to commit a severe human trafficking offense in the United States or outside the United States?"
                                        name="human-trafficking-outside-US">
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
                                {visible58 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="75.1 Explain" name="explain75">
                                                <textarea id="textar75" name="textar75" rows="8" cols="30"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="76. Are you the spouse, son, or daughter of an individual who has committed or conspired to commit a human trafficking offense in the United States or outside the United States and have you within the last five years, knowingly benefited from the trafficking activities?"
                                        name="relative-human-trafficking">
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
                                {visible59 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="76.1 Explain" name="explain76">
                                                <textarea id="textar76" name="textar76" rows="8" cols="30"></textarea>
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
                        <Button type="primary" onClick={() => navigate(router.FOURTEENTH)}>
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
