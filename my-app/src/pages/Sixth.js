import {Button, Col, Form, Input, Row, Select} from "antd"
import {useNavigate} from "react-router"
import {router} from "../constants/router";
import {useEffect, useState} from "react";
import {country} from "../functions/countries"
import {mediaType} from "../functions/media";


export const Sixth = () => {
    const navigate = useNavigate();
    const [visible28, setVisible28] = useState(false)
    const [visible29, setVisible29] = useState(false)
    const [visible30, setVisible30] = useState(false)
    const [visible31, setVisible31] = useState(false)
    const [visible32, setVisible32] = useState(false)


    const [form] = Form.useForm();
    const selectedValue28 = Form.useWatch("address-is-same", form);
    const selectedValue29 = Form.useWatch("other-phone-number", form);
    const selectedValue30 = Form.useWatch("other-email-address", form);
    const selectedValue31 = Form.useWatch("social-media", form);
    const selectedValue32 = Form.useWatch("about-your-presence", form);


    useEffect(() => {
        if (selectedValue28 === "no") {
            setVisible28(true)
        } else {
            setVisible28(false)
        }
    }, [selectedValue28, visible28])

    useEffect(() => {
        if (selectedValue29 === "yes") {
            setVisible29(true)
        } else {
            setVisible29(false)
        }
    }, [selectedValue29, visible29])

    useEffect(() => {
        if (selectedValue30 === "yes") {
            setVisible30(true)
        } else {
            setVisible30(false)
        }
    }, [selectedValue30, visible30])

    useEffect(() => {
        if (selectedValue31 === "yes") {
            setVisible31(true)
        } else {
            setVisible31(false)
        }
    }, [selectedValue31, visible31])

    useEffect(() => {
        if (selectedValue32 === "yes") {
            setVisible32(true)
        } else {
            setVisible32(false)
        }
    }, [selectedValue32, visible32])

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
                        navigate(router.SEVENTH);
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
                <Col offset={4} span={15} className="PersonalInform">Address and Phone Information</Col>
                <Col offset={2} span={16}>
                    <Row gutter={24}>
                        <Col span={15}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item  label="26. Home Address" name="homeAddress26">
                                        <div>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="26.1 Street Address" name="strAddress26">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="26.2 City" name="city26">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="26.3 State/Province" name="province26">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="26.4 Postal Zone/ZIP Code" name="postalZone26">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="26.5 Country/Region" name="country26">
                                                    <Select
                                                        initialvalue=""
                                                        options={country()}/>
                                                </Form.Item>
                                            </Col>
                                        </div>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="27. Is your Mailing Address the same as your Home Address?"
                                               name="address-is-same">
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
                                {visible28 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <div>
                                                <Col span={24}>
                                                    <Form.Item rules={[{required: true,},]} label="27.1 Street Address" name="strAddress27">
                                                        <Input/>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={24}>
                                                    <Form.Item rules={[{required: true,},]} label="27.2 City" name="city27">
                                                        <Input/>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={24}>
                                                    <Form.Item rules={[{required: true,},]} label="27.3 State/Province" name="province27">
                                                        <Input/>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={24}>
                                                    <Form.Item rules={[{required: true,},]} label="27.4 Postal Zone/ZIP Code" name="postalZone27">
                                                        <Input/>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={24}>
                                                    <Form.Item rules={[{required: true,},]} label="27.5 Country/Region" name="country27">
                                                        <Select
                                                            initialvalue=""
                                                            options={country()}/>
                                                    </Form.Item>
                                                </Col>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="28. Primary Phone Number" name="phoneNumberPrimary">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="29. Secondary Phone Number" name="phoneNumberSecond">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="30 Work Phone Number" name="phoneNumberWork">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="31. Have you used any other phone numbers in the last five years?"
                                               name="other-phone-number">
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
                                {visible29 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Col span={24}>
                                                <Form.Item rules={[{required: true,},]} label="31.1 Phone Number" name="phoneNumber31">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="32. Email Address" name="emailAddress32">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="33. Have you used any other email addresses in the last five years? "
                                        name="other-email-address">
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
                                {visible30 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Col span={24}>
                                                <Form.Item rules={[{required: true,},]} label="33.1 Additional Email Address"
                                                           name="additionalMail33">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="34. Social Media Provider/Platform"
                                               name="social-media">
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
                                {visible31 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Col span={24}>
                                                <Form.Item rules={[{required: true,},]}
                                                    label="34.1 Media Type" name="mediaType">
                                                    <Select
                                                        initialvalue=""
                                                        options={mediaType()}/>
                                                </Form.Item>
                                                <Input placeholder="Link of your Media Social Platform"/>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="35. Do you wish to provide information about your presence on any other websites or applications you have used within the last five years to create or share content (photos, videos, status updates, etc.)? "
                                        name="about-your-presence">
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
                                {visible32 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Col span={24}>
                                                <Form.Item rules={[{required: true,},]}
                                                    label="35.1 Additional Social Media Platform"
                                                    name="additionalPlatform">
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item rules={[{required: true,},]}
                                                    label="35.2 Additional Social Media Handle" name="additionalHandle">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col>}
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col offset={2} span={22}>
                    <Form.Item label=" ">
                        <Button type="primary" onClick={() => navigate(router.FIFTH)}>
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
