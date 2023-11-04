import {Button, Col, Form, Row, Select} from "antd"
import {useNavigate} from "react-router"
import {router} from "../constants/router";
import {useEffect, useState} from "react";


export const Sixteenth = () => {
    const navigate = useNavigate();
    const [visible60, setVisible60] = useState(false)
    const [visible61, setVisible61] = useState(false)
    const [visible62, setVisible62] = useState(false)
    const [visible63, setVisible63] = useState(false)
    const [visible64, setVisible64] = useState(false)
    const [visible65, setVisible65] = useState(false)
    const [visible66, setVisible66] = useState(false)
    const [visible67, setVisible67] = useState(false)
    const [visible68, setVisible68] = useState(false)
    const [visible69, setVisible69] = useState(false)
    const [visible70, setVisible70] = useState(false)
    const [visible71, setVisible71] = useState(false)


    const [form] = Form.useForm();
    const selectedValue60 = Form.useWatch("espionage-sabotage", form);
    const selectedValue61 = Form.useWatch("terrorist-activities", form);
    const selectedValue62 = Form.useWatch("terrorists-support", form);
    const selectedValue63 = Form.useWatch("member-or-representative", form);
    const selectedValue64 = Form.useWatch("relative-of-terrorists-support", form);
    const selectedValue65 = Form.useWatch("participated-in-genocide", form);
    const selectedValue66 = Form.useWatch("participated-in-torture", form);
    const selectedValue67 = Form.useWatch("acts-of-violence", form);
    const selectedValue68 = Form.useWatch("recruitment-of-child-soldiers?", form);
    const selectedValue69 = Form.useWatch("violations-of-religious-freedom?", form);
    const selectedValue70 = Form.useWatch("forcing to abortion", form);
    const selectedValue71 = Form.useWatch("coercive-transplantation", form);



    useEffect(() => {
        if (selectedValue60 === "yes") {
            setVisible60(true)
        } else {
            setVisible60(false)
        }
    }, [selectedValue60, visible60])

    useEffect(() => {
        if (selectedValue61 === "yes") {
            setVisible61(true)
        } else {
            setVisible61(false)
        }
    }, [selectedValue61, visible61])

    useEffect(() => {
        if (selectedValue62 === "yes") {
            setVisible62(true)
        } else {
            setVisible62(false)
        }
    }, [selectedValue62, visible62])

    useEffect(() => {
        if (selectedValue63 === "yes") {
            setVisible63(true)
        } else {
            setVisible63(false)
        }
    }, [selectedValue63, visible63])

    useEffect(() => {
        if (selectedValue64 === "yes") {
            setVisible64(true)
        } else {
            setVisible64(false)
        }
    }, [selectedValue64, visible64])

    useEffect(() => {
        if (selectedValue65 === "yes") {
            setVisible65(true)
        } else {
            setVisible65(false)
        }
    }, [selectedValue65, visible65])

    useEffect(() => {
        if (selectedValue66 === "yes") {
            setVisible66(true)
        } else {
            setVisible66(false)
        }
    }, [selectedValue66, visible66])

    useEffect(() => {
        if (selectedValue67 === "yes") {
            setVisible67(true)
        } else {
            setVisible67(false)
        }
    }, [selectedValue67, visible67])

    useEffect(() => {
        if (selectedValue68 === "yes") {
            setVisible68(true)
        } else {
            setVisible68(false)
        }
    }, [selectedValue68, visible68])

    useEffect(() => {
        if (selectedValue69 === "yes") {
            setVisible69(true)
        } else {
            setVisible69(false)
        }
    }, [selectedValue69, visible69])

    useEffect(() => {
        if (selectedValue70 === "yes") {
            setVisible70(true)
        } else {
            setVisible70(false)
        }
    }, [selectedValue70, visible70])

    useEffect(() => {
        if (selectedValue71 === "yes") {
            setVisible71(true)
        } else {
            setVisible71(false)
        }
    }, [selectedValue71, visible71])


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
                        navigate(router.SEVENTEENTH);
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
            <Row gutter={24} justify="space-between">
                <Col offset={4} span={15} className="PersonalInform">Security and Background: Part 3</Col>
                <Col offset={2} span={16}>
                    <Row gutter={24}>
                        <Col span={15}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="77. Do you seek to engage in espionage, sabotage, export control violations, or any other illegal activity while in the United States?"
                                        name="espionage-sabotage">
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
                                {visible60 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="77.1 Explain" name="explain77">
                                                <textarea id="textar77" name="textar77" rows="4" cols="60"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="78. Do you seek to engage in terrorist activities while in the United States or have you ever engaged in terrorist activities?"
                                        name="terrorist-activities">
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
                                {visible61 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="78.1 Explain" name="explain78">
                                                <textarea id="textar78" name="textar78" rows="4" cols="60"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="79. Have you ever or do you intend to provide financial assistance or other support to terrorists or terrorist organizations?"
                                        name="terrorists-support">
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
                                {visible62 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="79.1 Explain" name="explain79">
                                                <textarea id="textar79" name="textar79" rows="4" cols="60"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="80. Are you a member or representative of a terrorist organization?"
                                        name="member-or-representative">
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
                                {visible63 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="80.1 Explain" name="explain80">
                                                <textarea id="textar80" name="textar80" rows="4" cols="60"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="81. Are you the spouse, son, or daughter of an individual who has engaged in terrorist activity, including providing financial assistance or other support to terrorists or terrorist organizations, in the last five years?"
                                        name="relative-of-terrorists-support">
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
                                {visible64 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="81.1 Explain" name="explain81">
                                                <textarea id="textar81" name="textar81" rows="4" cols="60"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="82. Have you ever ordered, incited, committed, assisted, or otherwise participated in genocide?"
                                        name="participated-in-genocide">
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
                                {visible65 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="82.1 Explain" name="explain82">
                                                <textarea id="textar82" name="textar82" rows="4" cols="60"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="83. Have you ever committed, ordered, incited, assisted, or otherwise participated in torture?"
                                        name="participated-in-torture">
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
                                {visible66 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="83.1 Explain" name="explain83">
                                                <textarea id="textar83" name="textar83" rows="4" cols="60"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="84. Have you committed, ordered, incited, assisted, or otherwise participated in extrajudicial killings, political killings, or other acts of violence?"
                                        name="acts-of-violence">
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
                                {visible67 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="84.1 Explain" name="explain84">
                                                <textarea id="textar84" name="textar84" rows="4" cols="60"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="85. Have you ever engaged in the recruitment or the use of child soldiers?"
                                        name="recruitment-of-child-soldiers?">
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
                                {visible68 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="85.1 Explain" name="explain85">
                                                <textarea id="textar85" name="textar85" rows="4" cols="60"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="86. Have you, while serving as a government official, been responsible for or directly carried out, at any time, particularly severe violations of religious freedom?"
                                        name="violations-of-religious-freedom?">
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
                                {visible69 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="86.1 Explain" name="explain86">
                                                <textarea id="textar86" name="textar86" rows="4" cols="60"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="87. Have you ever been directly involved in the establishment or enforcement of population controls forcing a woman to undergo an abortion against her free choice or a man or a woman to undergo sterilization against his or her free will?"
                                        name="forcing to abortion">
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
                                {visible70 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="87.1 Explain" name="explain87">
                                                <textarea id="textar87" name="textar87" rows="4" cols="60"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="88. Have you ever been directly involved in the coercive transplantation of human organs or bodily tissue?"
                                        name="coercive-transplantation">
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
                                {visible71 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="88.1 Explain" name="explain88">
                                                <textarea id="textar88" name="textar88" rows="4" cols="60"></textarea>
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
                        <Button type="primary" onClick={() => navigate(router.FIFTEENTH)}>
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
