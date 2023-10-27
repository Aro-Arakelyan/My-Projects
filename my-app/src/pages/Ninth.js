import {Button, Col, DatePicker, Form, Input, Row, Select} from "antd"
import {useNavigate} from "react-router"
import {router} from "../constants/router";
import {useEffect, useState} from "react";


export const Ninth = () => {
    const navigate = useNavigate();

    const [visible35, setVisible35] = useState(false)
    const [visible36, setVisible36] = useState(false)
    const [visible37, setVisible37] = useState(false)
    const [visible38, setVisible38] = useState(false)
    const [visible39, setVisible39] = useState(false)


    const [form] = Form.useForm();

    const selectedValue35 = Form.useWatch("fathers-fullname", form);
    const selectedValue36 = Form.useWatch("father-in-the-US", form);
    const selectedValue37 = Form.useWatch("mothers-fullname", form);
    const selectedValue38 = Form.useWatch("mother-in-the-US", form);
    const selectedValue39 = Form.useWatch("other-relatives", form);


    useEffect(() => {
        if (selectedValue35 === "yes") {
            setVisible35(true)
        } else {
            setVisible35(false)
        }
    }, [selectedValue35, visible35])

    useEffect(() => {
        if (selectedValue36 === "yes") {
            setVisible36(true)
        } else {
            setVisible36(false)
        }
    }, [selectedValue36, visible36])

    useEffect(() => {
        if (selectedValue37 === "yes") {
            setVisible37(true)
        } else {
            setVisible37(false)
        }
    }, [selectedValue37, visible37])

    useEffect(() => {
        if (selectedValue38 === "yes") {
            setVisible38(true)
        } else {
            setVisible38(false)
        }
    }, [selectedValue38, visible38])

    useEffect(() => {
        if (selectedValue39 === "yes") {
            setVisible39(true)
        } else {
            setVisible39(false)
        }
    }, [selectedValue39, visible39])


    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={24} justify="space-between">
                <Col offset={4} span={15} className="PersonalInform">Family Information: Relatives</Col>
                <Col offset={2} span={16}>
                    <Row gutter={24}>
                        <Col span={15}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="45. Father's Full Name and Date of Birth"
                                               name="fathers-fullname">
                                        <Select
                                            initialvalue=""HOME
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
                                {visible35 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <div>
                                                <Col span={24}>
                                                    <Form.Item rules={[{required: true,},]} label="45.1 Surnames" name="surename45">
                                                        <Input/>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={24}>
                                                    <Form.Item rules={[{required: true,},]} label="45.2 Given Names" name="givenName45">
                                                        <Input/>
                                                    </Form.Item>
                                                </Col>
                                                <Col offset={2} span={22}>
                                                    <Form.Item rules={[{required: true,},]} label="45.3 Date of Birth" name="birthday45">
                                                        <DatePicker/>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={24}>
                                                    <Form.Item rules={[{required: true,},]} label="45.4 Is your father in the U.S.?"
                                                               name="father-in-the-US">
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
                                                {visible36 && <Col span={24}>
                                                    <Row>
                                                        <Col offset={2} span={22}>
                                                            <Form.Item rules={[{required: true,},]} label="45.4.1 Father's Status"
                                                                       name="fathersStatus45">
                                                                <Select
                                                                    initialvalue=""
                                                                    options={[
                                                                        {
                                                                            label: "a. U.S. CITIZEN",
                                                                            value: "a. U.S. CITIZEN"
                                                                        },
                                                                        {
                                                                            label: "b. U.S. LEGAL PERMANENT RESIDENT (LPR)",
                                                                            value: "b. U.S. LEGAL PERMANENT RESIDENT (LPR)"
                                                                        },
                                                                        {
                                                                            label: "c. NONIMMIGRANT",
                                                                            value: "c. NONIMMIGRANT"
                                                                        },
                                                                        {
                                                                            label: "d. OTHER/I DON'T KNOW",
                                                                            value: "d. OTHER/I DON'T KNOW"
                                                                        }
                                                                    ]}/>
                                                            </Form.Item>
                                                        </Col>
                                                    </Row>
                                                </Col>}
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="46. Mother's Full Name and Date of Birth"
                                               name="mothers-fullname">
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
                                {visible37 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <div>
                                                <Col span={24}>
                                                    <Form.Item rules={[{required: true,},]} label="46.1 Surnames" name="surename46">
                                                        <Input/>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={24}>
                                                    <Form.Item rules={[{required: true,},]} label="46.2 Given Names" name="givenName46">
                                                        <Input/>
                                                    </Form.Item>
                                                </Col>
                                                <Col offset={2} span={22}>
                                                    <Form.Item rules={[{required: true,},]} label="46.3 Date of Birth" name="birthday46">
                                                        <DatePicker/>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={24}>
                                                    <Form.Item rules={[{required: true,},]} label="46.4 Is your mother in the U.S.?"
                                                               name="ther-in-the-US">
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
                                                {visible38 && <Col span={24}>
                                                    <Row>
                                                        <Col offset={2} span={22}>
                                                            <Form.Item rules={[{required: true,},]} label="46.4.1 Mother's Status"
                                                                       name="mothersStatus46">
                                                                <Select
                                                                    initialvalue=""
                                                                    options={[
                                                                        {
                                                                            label: "a. U.S. CITIZEN",
                                                                            value: "a. U.S. CITIZEN"
                                                                        },
                                                                        {
                                                                            label: "b. U.S. LEGAL PERMANENT RESIDENT (LPR)",
                                                                            value: "b. U.S. LEGAL PERMANENT RESIDENT (LPR)"
                                                                        },
                                                                        {
                                                                            label: "c. NONIMMIGRANT",
                                                                            value: "c. NONIMMIGRANT"
                                                                        },
                                                                        {
                                                                            label: "d. OTHER/I DON'T KNOW",
                                                                            value: "d. OTHER/I DON'T KNOW"
                                                                        }
                                                                    ]}/>
                                                            </Form.Item>
                                                        </Col>
                                                    </Row>
                                                </Col>}
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="47. Do you have any immediate relatives, not including parents, in the United States?"
                                        name="other-relatives">
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
                                {visible39 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <div>
                                                <Col span={24}>
                                                    <Form.Item rules={[{required: true,},]} label="47.1 Surnames" name="surename47">
                                                        <Input/>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={24}>
                                                    <Form.Item rules={[{required: true,},]} label="47.2 Given Names" name="givenName47">
                                                        <Input/>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={24}>
                                                    <Form.Item rules={[{required: true,},]} label="47.3 Relationship to You" name="relationshipToYou47">
                                                        <Select
                                                            initialvalue=""
                                                            options={[
                                                                {
                                                                    label: "a. Spouse",
                                                                    value: "a. Spouse"
                                                                },
                                                                {
                                                                    label: "b. Fiance",
                                                                    value: "b. Fiance"
                                                                },
                                                                {
                                                                    label: "c. Child",
                                                                    value: "c. Child"
                                                                },
                                                                {
                                                                    label: "d. Sibling",
                                                                    value: "d. Sibling"
                                                                }
                                                            ]}/>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={24}>
                                                    <Form.Item rules={[{required: true,},]} label="47.4 Relative's Status"
                                                               name="relativeStatus47">
                                                        <Select
                                                            initialvalue=""
                                                            options={[
                                                                {
                                                                    label: "a. U.S. CITIZEN",
                                                                    value: "a. U.S. CITIZEN"
                                                                },
                                                                {
                                                                    label: "b. U.S. LEGAL PERMANENT RESIDENT (LPR)",
                                                                    value: "b. U.S. LEGAL PERMANENT RESIDENT (LPR)"
                                                                },
                                                                {
                                                                    label: "c. NONIMMIGRANT",
                                                                    value: "c. NONIMMIGRANT"
                                                                },
                                                                {
                                                                    label: "d. OTHER/I DON'T KNOW",
                                                                    value: "d. OTHER/I DON'T KNOW"
                                                                }
                                                            ]}/>
                                                    </Form.Item>
                                                </Col>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="48. Do you have any other relatives in the United States?"
                                               name="otherRelatives48">
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
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col offset={2} span={22}>
                    <Form.Item label=" ">
                        <Button type="primary" onClick={() => navigate(router.EIGHTH)}>
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
