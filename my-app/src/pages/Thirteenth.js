import {Button, Col, DatePicker, Form, Input, Row, Select} from "antd"
import {useNavigate} from "react-router"
import {router} from "../constants/router";
import {useEffect, useState} from "react";


export const Thirteenth = () => {
    const navigate = useNavigate();
    const [visible44, setVisible44] = useState(false)
    const [visible45, setVisible45] = useState(false)
    const [visible46, setVisible46] = useState(false)
    const [visible47, setVisible47] = useState(false)
    const [visible48, setVisible48] = useState(false)
    const [visible49, setVisible49] = useState(false)


    const [form] = Form.useForm();
    const selectedValue44 = Form.useWatch("select48", form);
    const selectedValue45 = Form.useWatch("select49", form);
    const selectedValue46 = Form.useWatch("select50", form);
    const selectedValue47 = Form.useWatch("select51", form);
    const selectedValue48 = Form.useWatch("select52", form);
    const selectedValue49 = Form.useWatch("select53", form);


    useEffect(() => {
        if (selectedValue44 === "yes") {
            setVisible44(true)
        } else {
            setVisible44(false)
        }
    }, [selectedValue44, visible44])

    useEffect(() => {
        if (selectedValue45 === "yes") {
            setVisible45(true)
        } else {
            setVisible45(false)
        }
    }, [selectedValue45, visible45])

    useEffect(() => {
        if (selectedValue46 === "yes") {
            setVisible46(true)
        } else {
            setVisible46(false)
        }
    }, [selectedValue46, visible46])

    useEffect(() => {
        if (selectedValue47 === "yes") {
            setVisible47(true)
        } else {
            setVisible47(false)
        }
    }, [selectedValue47, visible47])

    useEffect(() => {
        if (selectedValue48 === "yes") {
            setVisible48(true)
        } else {
            setVisible48(false)
        }
    }, [selectedValue48, visible48])

    useEffect(() => {
        if (selectedValue49 === "yes") {
            setVisible49(true)
        } else {
            setVisible49(false)
        }
    }, [selectedValue49, visible49])


    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={24} justify="space-between">
                <Col offset={4} span={15} className="PersonalInform">Additional Work/Education/Training
                    Information</Col>
                <Col offset={2} span={16}>
                    <Row gutter={24}>
                        <Col span={15}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item
                                        label="60. Do you belong to a clan or tribe?"
                                        name="select48">
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
                                {visible44 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="60.1 Clan or Tribe Name" name="clanName60">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item label="61. Provide a List of Languages You Speak" name="languages61">
                                        <textarea id="textar61" name="textar61" rows="6" cols="50"></textarea>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item
                                        label="62. Have you traveled to any countries/regions within the last five years?"
                                        name="select49">
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
                                {visible45 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="" name="noname62">
                                                <textarea id="textar61" name="textar61" rows="6" cols="50"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item
                                        label="63. Have you belonged to, contributed to, or worked for any professional, social, or charitable organization?"
                                        name="select50">
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
                                {visible46 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="63.1 Organization Name" name="organizationName63">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item
                                        label="64. Do you have any specialized skills or training, such as firearms, explosives, nuclear, biological, or chemical experience?"
                                        name="select51">
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
                                {visible47 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="64.1 Explain" name="explain64">
                                                <textarea id="textar61" name="textar61" rows="6" cols="50"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item label="65. Have you ever served in the military?" name="select52">
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
                                {visible48 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="65.1 Name of Country/Region" name="countryName65">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item label="65.2 Branch of Service" name="serviceBranch65">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item label="65.3 Rank/Position" name="position65">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item label="65.4 Military Specialty" name="military65">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item label="65.5 Date of Service From" name="dateFrom65">
                                                <DatePicker/>
                                            </Form.Item>
                                            <Form.Item label="65.6 Date of Service To" name="dateTo65">
                                                <DatePicker/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item
                                        label="66. Have you ever served in, been a member of, or been involved with a paramilitary unit, vigilante unit, rebel group, guerrilla group, or insurgent organization?"
                                        name="select53">
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
                                {visible49 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                                <Form.Item label="66.1 Explain" name="explain66">
                                                    <textarea id="textar66" name="textar66" rows="6" cols="50"></textarea>
                                                </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col offset={2} span={22}>
                    <Button type="primary" onClick={() => navigate(router.TWELFTH)}>previous</Button>
                    <Button type="primary" onClick={() => navigate(router.FOURTEENTH)} htmlType="submit">next</Button>
                </Col>
            </Row>
        </Form>
    )
}
