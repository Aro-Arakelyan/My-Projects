import { Button, Col, Form, Input, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../App.css";
import { router } from "../constants/router";
import { country } from "../functions/countries";

export const Second = () => {
    const navigate = useNavigate();
    const [visible6, setVisible6] = useState(false)
    const [visible7, setVisible7] = useState(false)
    const [visible8, setVisible8] = useState(false)
    const [form] = Form.useForm();

    //eslint-disable-next-line
    const [count, setCount] = useState(0);

    const handleNextButtonClick = () => {
        setCount(prevCount => {
            const newCount = prevCount + 1;
            console.log("New count:", newCount);
            return newCount;
        });
    };

    const selectedValue6 = Form.useWatch("other-nationality", form);
    const selectedValue7 = Form.useWatch("other-Passport", form);
    const selectedValue8 = Form.useWatch("resident-of-other-country", form);


    useEffect(() => {
        if (selectedValue6 === "yes") {
            setVisible6(true)
        } else {
            setVisible6(false)
        }
    }, [selectedValue6, visible6])

    useEffect(() => {
        if (selectedValue7 === "yes") {
            setVisible7(true)
        } else {
            setVisible7(false)
        }
    }, [selectedValue7, visible7])

    useEffect(() => {
        if (selectedValue8 === "yes") {
            setVisible8(true)
        } else {
            setVisible8(false)
        }
    }, [selectedValue8, visible8])


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
                        navigate(router.THIRD);
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
                <Col offset={8} span={16} className="PersonalInform">Personal Information 2</Col>
                <div className="asd">
                    <div>
                    <Col offset={2} span={21}>
                    <Row gutter={11}>
                        <Col span={21}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="9. Country/Region of Origin (Nationality)" name="nationality">
                                        <Select
                                            initialvalue=""
                                            options={country()}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="10. Do you hold or have you held any nationality other than the one indicated above on nationality?"
                                        name="other-nationality">
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
                                {visible6 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]}
                                                label="10.1 Other Country/Region of Origin (Nationality)"
                                                name="other-country">
                                                <Select
                                                    initialvalue=""
                                                    options={country()}/>
                                            </Form.Item>
                                        </Col>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]}
                                                label="10.2 Do you hold a passport for the other country/region of origin (nationality) indicated above?"
                                                name="other-Passport">
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
                                        {visible7 && <Col span={24}>
                                            <Row>
                                                <Col offset={4} span={20}>
                                                    <Form.Item rules={[{required: true,},]}
                                                        label="10.2.1 Passport Number" name="passport-number">
                                                        <Input/>
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </Col>}
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="11. Are you a permanent resident of a country/region other than your country/region of origin (nationality) indicated above?"
                                        name="resident-of-other-country">
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
                                {visible8 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]}
                                                label="11.1 Other Permanent Resident Country/Region"
                                                name="permanent-resident-of other-Country">
                                                <Select
                                                    initialvalue=""
                                                    options={country()}/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="12. National Identification Number"
                                        name="identification-number">
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
                                    <Form.Item rules={[{required: true,},]} label="13.1.2.3 U.S. Social Security Number"
                                        name="SSN">
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
                                    <Col offset={4}>
                                        {/* <span className="ssn">SSN1</span>
                                        <span className="ssn">SSN2</span>
                                        <span className="ssn">SSN3</span> */}
                                        <span className="text">
                                            If Yes, fill
                                        </span>
                                        <span>
                                            <input className="input1" type="text"/>
                                        </span>
                                        
                                    </Col>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="14. U.S. Taxpayer ID Number"
                                        name="taxpayer-ID-number">
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
                    </div>
                </div>
                <Col className="buttons" offset={2} span={22}>
                    <Form.Item label=" ">
                        <Button type="primary" onClick={() => navigate(router.FIRST)}>
                            previous
                        </Button>
                        <Button type="primary" htmlType="submit" onClick={handleNextButtonClick}>
                            next
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}
