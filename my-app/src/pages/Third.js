import {Button, Col, Form, Input, Row, Select} from "antd"
import {useNavigate} from "react-router"
import {router} from "../constants/router";
import {useEffect, useState} from "react";

export const Third = () => {
    const navigate = useNavigate();
    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)
    const [visible4, setVisible4] = useState(false)

    const [form] = Form.useForm();
    const selectedValue1 = Form.useWatch("selectOne", form);
    const selectedValue2 = Form.useWatch("selectOne", form);
    const selectedValue3 = Form.useWatch("selectOne", form);
    const selectedValue4 = Form.useWatch("selectOne", form);



    useEffect(() => {
        if (selectedValue1 === "a. (K1) FIANCÉ(E) OF A U.S. CITIZEN") {
            setVisible1(true)
        } else {
            setVisible1(false)
        }
    }, [selectedValue1, visible1])

    useEffect(() => {
        if (selectedValue2 === "b. (K2) CHILD OF A K1") {
            setVisible2(true)
        } else {
            setVisible2(false)
        }
    }, [selectedValue2, visible2])

    useEffect(() => {
        if (selectedValue2 === "c. (K3) SPOUSE OF A U.S. CITIZEN") {
            setVisible3(true)
        } else {
            setVisible3(false)
        }
    }, [selectedValue3, visible3])

    useEffect(() => {
        if (selectedValue4 === "d. (K4) CHILD OF A K3") {
            setVisible4(true)
        } else {
            setVisible4(false)
        }
    }, [selectedValue4, visible4])




    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={24} justify="space-between">
                <Col offset={4} span={16} className="PersonalInform">Travel Information</Col>
                <Col offset={2} span={16}>
                    <Row gutter={24}>
                        <Col span={15}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="15. Purpose of Trip to the U.S." name="fifteen">
                                        <Select
                                            defaultValue=""
                                            options={[
                                                {
                                                    label: "_A_Foreign_government_official",
                                                    value: "_A_Foreign_government_official"
                                                },
                                                {
                                                    label: "_B_Temporary_business_pleasure_visitor",
                                                    value: "_B_Temporary_business_pleasure_visitor"
                                                },
                                                {
                                                    label: "_C_Alien_in_transit",
                                                    value: "_C_Alien_in_transit"
                                                },
                                                {
                                                    label: "_CW_E2C_CNMI_worker_or_investor",
                                                    value: "_CW_E2C_CNMI_worker_or_investor"
                                                },
                                                {
                                                    label: "_D_Crewmember",
                                                    value: "_D_Crewmember"
                                                },
                                                {
                                                    label: "_E_Treaty_trader_or_investor",
                                                    value: "_E_Treaty_trader_or_investor"
                                                },
                                                {
                                                    label: "_F_Academic_or_language_student",
                                                    value: "_F_Academic_or_language_student"
                                                },
                                                {
                                                    label: "_G_International_organization_Rep._Emp.",
                                                    value: "_G_International_organization_Rep._Emp."
                                                },
                                                {
                                                    label: "_H_Temporary_worker",
                                                    value: "_H_Temporary_worker"
                                                },
                                                {
                                                    label: "_I_Foreign_media_representative",
                                                    value: "_I_Foreign_media_representative"
                                                },
                                                {
                                                    label: "_J_Exchange_visitor",
                                                    value: "_J_Exchange_visitor"
                                                },
                                                {
                                                    label: "_K_Fiance_or_spouse_of_a_U.S._citizen",
                                                    value: "_K_Fiance_or_spouse_of_a_U.S._citizen"
                                                }
                                            ]}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="16. Specify" name="selectOne">
                                        <Select
                                            defaultValue=""
                                            options={[
                                                {
                                                    label: "a. (K1) FIANCÉ(E) OF A U.S. CITIZEN",
                                                    value: "a. (K1) FIANCÉ(E) OF A U.S. CITIZEN"
                                                },
                                                {
                                                    label: "b. (K2) CHILD OF A K1",
                                                    value: "b. (K2) CHILD OF A K1"
                                                },
                                                {
                                                    label: "c. (K3) SPOUSE OF A U.S. CITIZEN",
                                                    value: "c. (K3) SPOUSE OF A U.S. CITIZEN"
                                                },
                                                {
                                                    label: "d. (K4) CHILD OF A K3",
                                                    value: "d. (K4) CHILD OF A K3"
                                                },
                                            ]}/>
                                    </Form.Item>
                                </Col>
                                {visible1 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="16.11 Application Receipt/Petition Number" name="sixteenEleven">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                </Col>}
                                {visible2 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="16.1 Surname" name="sixteenEleven1">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item label="16.2 Name" name="sixteenEleven2">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item label="16.11 Application Receipt/Petition Number" name="sixteenEleven3">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                </Col>}
                                {visible3 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="16.11 Application Receipt/Petition Number" name="sixteenEleven">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                </Col>}
                                {visible4 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="16.1 Surname" name="sixteenEleven1">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item label="16.2 Name" name="sixteenEleven2">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item label="16.11 Application Receipt/Petition Number" name="sixteenEleven3">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                </Col>}
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col offset={2} span={24}>
                    <Button type="primary" onClick={() => navigate(router.SECOND)}>previous</Button>
                    <Button type="primary" onClick={() => navigate(router.FOURTH)} htmlType="submit">next</Button>
                </Col>
            </Row>
        </Form>
    )
}
