import {Button, Col, DatePicker, Form, Input, Row, Select} from "antd"
import {useNavigate} from "react-router"
import {router} from "../constants/router";
import {useEffect, useState} from "react";
import {lengthOfStay1, lengthOfStay2} from "../functions/travelInformation";
import {province} from "../functions/countries";
import {year} from "../functions/years";

export const Fifth = () => {
    const navigate = useNavigate();
    const [visible21, setVisible21] = useState(false)
    const [visible22, setVisible22] = useState(false)
    const [visible23, setVisible23] = useState(false)
    const [visible24, setVisible24] = useState(false)
    const [visible25, setVisible25] = useState(false)
    const [visible26, setVisible26] = useState(false)
    const [visible27, setVisible27] = useState(false)


    const [form] = Form.useForm();
    const selectedValue21 = Form.useWatch("U.S.been", form);
    const selectedValue22 = Form.useWatch("US-driver-license", form);
    const selectedValue23 = Form.useWatch("issued-US-Visa", form);
    const selectedValue24 = Form.useWatch("lost-stolen-visa", form);
    const selectedValue25 = Form.useWatch("cancelled-revoked-visa", form);
    const selectedValue26 = Form.useWatch("refused-US-Visa", form);
    const selectedValue27 = Form.useWatch("immigrant-petition", form);


    useEffect(() => {
        if (selectedValue21 === "yes") {
            setVisible21(true)
        } else {
            setVisible21(false)
        }
    }, [selectedValue21, visible21])

    useEffect(() => {
        if (selectedValue22 === "yes") {
            setVisible22(true)
        } else {
            setVisible22(false)
        }
    }, [selectedValue22, visible22])

    useEffect(() => {
        if (selectedValue23 === "yes") {
            setVisible23(true)
        } else {
            setVisible23(false)
        }
    }, [selectedValue23, visible23])

    useEffect(() => {
        if (selectedValue24 === "yes") {
            setVisible24(true)
        } else {
            setVisible24(false)
        }
    }, [selectedValue24, visible24])

    useEffect(() => {
        if (selectedValue25 === "yes") {
            setVisible25(true)
        } else {
            setVisible25(false)
        }
    }, [selectedValue25, visible25])

    useEffect(() => {
        if (selectedValue26 === "yes") {
            setVisible26(true)
        } else {
            setVisible26(false)
        }
    }, [selectedValue26, visible26])

    useEffect(() => {
        if (selectedValue27 === "yes") {
            setVisible27(true)
        } else {
            setVisible27(false)
        }
    }, [selectedValue27, visible27])


    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={23} justify="space-between">
                <Col offset={4} span={15} className="PersonalInform">Previous U.S. Travel Information</Col>
                <Col offset={2} span={15}>
                    <Row gutter={23}>
                        <Col span={15}>
                            <Row>
                                <Col span={23}>
                                    <Form.Item rules={[{required: true,},]} label="22. Have you ever been in the U.S.?" name="U.S.been">
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
                                {visible21 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="22.1.2.3 Date Arrived" name="arrivedDate">
                                                <DatePicker/>
                                            </Form.Item>
                                        </Col>
                                        <Col offset={2} span={21}>
                                            <Form.Item rules={[{required: true,},]} label="22.4.5 Length of Stay"
                                                       name="intendedLength">
                                                <div className="lengthOfStay">
                                                    <Select className="select"
                                                            initialvalue=""
                                                            options={lengthOfStay1()}/>
                                                    <Select className="select"
                                                            initialvalue=""
                                                            options={lengthOfStay2()}/>
                                                </div>
                                            </Form.Item>
                                        </Col>
                                        <Col offset={2} span={21}>
                                            <Form.Item rules={[{required: true,},]} label="22.6 Do you or did you ever hold a U.S. Driver’s License?" name="US-driver-license">
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
                                        {visible22 && <Col span={24}>
                                            <Row>
                                                <Col offset={4} span={19}>
                                                    <Form.Item rules={[{required: true,},]} label="22.6.1 Driver's License Number" name="licenseNumber">
                                                        <Input/>
                                                    </Form.Item>
                                                </Col>
                                                <Col offset={4} span={19}>
                                                    <Form.Item rules={[{required: true,},]}
                                                        label="22.6.2 State of Driver's License" name="licenseState">
                                                        <Select
                                                            initialvalue=""
                                                            options={province()}/>
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </Col>}
                                    </Row>
                                </Col>}
                                <Col span={23}>
                                    <Form.Item rules={[{required: true,},]} label="23. Have you ever been issued a U.S. Visa?" name="issued-US-Visa">
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
                                {visible23 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="23.1.2.3 Date Last Visa Was Issued" name="lastVisaDate">
                                                <DatePicker/>
                                            </Form.Item>
                                        </Col>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="23.4 Visa Number" name="visaNumber">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="23.5 Are you applying for the same type of visa?" name="select24">
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
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="23.6 Are you applying in the same country or location where the visa above was issued, and is this country or location your place of principal of residence? " name="select25">
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
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="23.7 Have you been ten-printed?" name="select26">
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
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="23.8 Has your U.S. Visa ever been lost or stolen?" name="lost-stolen-visa">
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
                                        {visible24 && <Col span={24}>
                                            <Row>
                                                <Col offset={4} span={20}>
                                                    <Form.Item rules={[{required: true,},]} label="23.8.1 Enter year visa was lost or stolen:" name="visaLostYear">
                                                        <Select
                                                            initialvalue=""
                                                            options={year()}/>
                                                    </Form.Item>
                                                </Col>
                                                <Col offset={4} span={20}>
                                                    <Form.Item rules={[{required: true,},]}
                                                        label="23.8.2 Explain" name="explain">
                                                        <textarea id="textar23" name="textar23" rows="6" cols="50"></textarea>
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </Col>}
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="23.9 Has your U.S. Visa ever been cancelled or revoked?" name="cancelled-revoked-visa">
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
                                        {visible25 && <Col span={24}>
                                            <Row>
                                                <Col offset={4} span={20}>
                                                    <Form.Item rules={[{required: true,},]}
                                                        label="23.9.1 Explain" name="explains">
                                                        <textarea id="textar" name="textar" rows="6" cols="50"></textarea>
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </Col>}

                                    </Row>
                                </Col>}
                                <Col span={23}>
                                    <Form.Item rules={[{required: true,},]} label="24. Have you ever been refused a U.S. Visa, or been refused admission to the United States, or withdrawn your application for admission at the port of entry?" name="refused-US-Visa">
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
                                {visible26 && <Col span={24}>
                                    <Row>
                                        <Col offset={4} span={20}>
                                            <Form.Item rules={[{required: true,},]}
                                                label="24.1 Explain" name="explain24">
                                                <textarea id="textar24" name="textar24" rows="6" cols="50"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={23}>
                                    <Form.Item rules={[{required: true,},]} label="25. Has anyone ever filed an immigrant petition on your behalf with the United States Citizenship and Immigration Services?" name="immigrant-petition">
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
                                {visible27 && <Col span={24}>
                                    <Row>
                                        <Col offset={4} span={20}>
                                            <Form.Item rules={[{required: true,},]}
                                                label="25.1 Explain" name="explain25">
                                                <textarea id="textar25" name="textar25" rows="6" cols="50"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col offset={2} span={21}>
                    <Button type="primary" onClick={() => navigate(router.FOURTH)}>previous</Button>
                    <Button type="primary" onClick={() => navigate(router.SIXTH)} htmlType="submit">next</Button>
                </Col>
            </Row>
        </Form>
    )
}
