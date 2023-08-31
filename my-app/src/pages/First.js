import {Button, Col, DatePicker, Form, Input, Row, Select} from "antd"
import {useNavigate} from "react-router"
import {router} from "../constants/router";
import {useEffect, useState} from "react";
import {country} from "../functions/countries"
import {Pic} from "../functions/pic"


export const First = () => {
    const navigate = useNavigate();
    const [visible4, setVisible4] = useState(false)
    const [visible5, setVisible5] = useState(false)
    const [form] = Form.useForm();
    const selectedValue4 = Form.useWatch("select4", form);
    const selectedValue5 = Form.useWatch("select5", form);


    useEffect(() => {
        if (selectedValue4 === "yes") {
            setVisible4(true)
        } else {
            setVisible4(false)
        }
    }, [selectedValue4, visible4])

    useEffect(() => {
        if (selectedValue5 === "yes") {
            setVisible5(true)
        } else {
            setVisible5(false)
        }
    }, [selectedValue5, visible5])


    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={11} justify="space-between">
                <Col offset={6} span={17} className="PersonalInform">Personal Information 1</Col>
                <Col offset={2} span={14}>
                    <Row gutter={24}>
                        <Col span={15}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="1. Surnames" name="surname">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="2. Given Names" name="givenName">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="3. Full Name" name="fullName">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item
                                        label="4. Have you ever used other names (i.e., maiden, religious, professional, alias, etc.)?"
                                        name="select4">
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
                                {visible4 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item
                                                label="4.1 Other Surnames Used (maiden, religious, professional, aliases, etc.)"
                                                name="otherSurname">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="4.2 Other Given Names Used" name="otherGivenName">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item label="5. Do you have a telecode that represents your name?"
                                               name="select5">
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
                                {visible5 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="5.1 Telecode Surnames" name="telecodeSurname">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="5.2 Telecode Given Names" name="telecodeGivenname">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item label="6. Sex" name="sex">
                                        <Select
                                            initialvalue=" "
                                            options={[
                                                {
                                                    label: "a. Male",
                                                    value: "a. Male"
                                                },
                                                {
                                                    label: "b. Female",
                                                    value: "b. Female"
                                                }
                                            ]}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="7. Marital Status" name="materialStatus">
                                        <Select
                                            initialvalue=" "
                                            options={[
                                                {
                                                    label: "a. Married",
                                                    value: "a. Married"
                                                },
                                                {
                                                    label: "b. Common law marriage",
                                                    value: "b. Common law marriage"
                                                },
                                                {
                                                    label: "c. Civil Union/Domestic Partnership",
                                                    value: "c. Civil Union/Domestic Partnership"
                                                },
                                                {
                                                    label: "d. Single",
                                                    value: "d. Single"
                                                },
                                                {
                                                    label: "e. Widowed",
                                                    value: "e. Widowed"
                                                },
                                                {
                                                    label: "f. Divorced",
                                                    value: "f. Divorced"
                                                },
                                                {
                                                    label: "g. Legally separated",
                                                    value: "g. Legally separated"
                                                },
                                                {
                                                    label: "h. Other",
                                                    value: "h. Other"
                                                }
                                            ]}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="8. Date and Place of Birth" name="dateAndBirthday">
                                        <div>
                                            <Col offset={2} span={22}>
                                                <Form.Item label="8.1 (Format: YYYY-MM-DD)" name="dateFormat">
                                                    <DatePicker/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item
                                                    label="8.2 Country/Region" name="country">
                                                    <Select
                                                        initialvalue=""
                                                        options={country()}/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item label="8.3 City" name="city">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item label="8.4 State/Province" name="state">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                        </div>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col span={7}>
                    <Form.Item
                        label="" name="qwer">
                        {Pic()}
                    </Form.Item>
                </Col>
                <Col offset={2} span={22}>
                    <Button type="primary" onClick={() => navigate(router.HOME)}>previous</Button>
                    <Button type="primary" onClick={() => navigate(router.SECOND)} htmlType="submit">next</Button>
                </Col>
            </Row>
        </Form>
    )
}





