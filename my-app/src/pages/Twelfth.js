import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { router } from "../constants/router";
import { country } from "../functions/countries";


export const Twelfth = () => {
    const navigate = useNavigate();
    const [visible40, setVisible40] = useState(false)
    const [visible41, setVisible41] = useState(false)
    const [visible42, setVisible42] = useState(false)
    const [visible43, setVisible43] = useState(false)

    const [form] = Form.useForm();
    const selectedValue40 = Form.useWatch("employed", form);
    const selectedValue41 = Form.useWatch("add-other-work", form);
    const selectedValue42 = Form.useWatch("secondary-or-higher", form);
    const selectedValue43 = Form.useWatch("educational-institutions", form);


    useEffect(() => {
        if (selectedValue40 === "yes") {
            setVisible40(true)
        } else {
            setVisible40(false)
        }
    }, [selectedValue40, visible40])

    useEffect(() => {
        if (selectedValue41 === "yes") {
            setVisible41(true)
        } else {
            setVisible41(false)
        }
    }, [selectedValue41, visible41])

    useEffect(() => {
        if (selectedValue42 === "yes") {
            setVisible42(true)
        } else {
            setVisible42(false)
        }
    }, [selectedValue42, visible42])

    useEffect(() => {
        if (selectedValue43 === "yes") {
            setVisible43(true)
        } else {
            setVisible43(false)
        }
    }, [selectedValue43, visible43])


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
                        navigate(router.THIRTEENTH);
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
                <Col offset={8} span={16} className="PersonalInform">Previous Work/Education/Training Information</Col>
                <div className="asd">
                    <div>
                        <Col offset={2} span={21}>
                            <Row gutter={11}>
                                <Col span={21}>
                                    <Row className="inp">
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                        label="56. Were you previously employed?"
                                        name="employed">
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
                                {visible40 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="56.1 Employer Name"
                                                       name="employerName56">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="56.2 Employer Street Address"
                                                       name="employerStreet56">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="56.3 City" name="city56">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="56.4 State/Province"
                                                       name="state56">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="56.5 Postal Zone/ZIP Code"
                                                       name="zipCode56">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="56.6 Country/Region"
                                                       name="country56">
                                                <Select
                                                    initialvalue=""
                                                    options={country()}/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="56.7 Telephone Number"
                                                       name="telephoneNumber56">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="56.8 Job Title"
                                                       name="jobTitle56">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="56.9 Supervisor's Surname"
                                                       name="supervisorSurname56">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]}
                                                       label="56.10 Sup ervisor's Given Names"
                                                       name="supervisorGiveName56">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="56.11 Employment Date From"
                                                       name="dateFrom56">
                                                <DatePicker/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="56.12 Employment Date To"
                                                       name="dateTo56">
                                                <DatePicker/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]}
                                                       label="56.13 Briefly describe your duties:" name="duties56">
                                                <textarea id="textar56" name="textar56" rows="10" cols="30"></textarea>
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item rules={[{required: true,},]}
                                                       label="57. Do you want to add other work place?"
                                                       name="add-other-work">
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
                                        {visible41 && <Col span={24}>
                                            <Row>
                                                <Col offset={2} span={22}>
                                                    <Form.Item rules={[{required: true,},]} label="57.1 Employer Name"
                                                               name="employerName57">
                                                        <Input/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]}
                                                               label="57.2 Employer Street Address"
                                                               name="employerStreet57">
                                                        <Input/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]} label="57.3 City"
                                                               name="city57">
                                                        <Input/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]} label="57.4 State/Province"
                                                               name="state57">
                                                        <Input/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]}
                                                               label="57.5 Postal Zone/ZIP Code" name="zipCode57">
                                                        <Input/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]} label="57.5 Country/Region"
                                                               name="country57">
                                                        <Select
                                                            initialvalue=""
                                                            options={country()}/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]}
                                                               label="57.7 Telephone Number"
                                                               name="telephoneNumber57">
                                                        <Input/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]} label="57.8 Job Title"
                                                               name="jobTitle57">
                                                        <Input/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]}
                                                               label="57.9 Supervisor's Surname"
                                                               name="supervisorSurname57">
                                                        <Input/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]}
                                                               label="57.10 Supervisor's Given Names"
                                                               name="supervisorGiveName57">
                                                        <Input/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]}
                                                               label="57.11 Employment Date From" name="dateFrom57">
                                                        <DatePicker/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]}
                                                               label="57.12 Employment Date To" name="dateTo57">
                                                        <DatePicker/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]}
                                                               label="57.13 Briefly describe your duties:"
                                                               name="duties57">
                                                            <textarea id="textar56" name="textar56" rows="6"
                                                                      cols="50"></textarea>
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </Col>}
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                               label="58. Did you attend secondary school or higher?"
                                               name="secondary-or-higher">
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
                                {visible42 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]}
                                                       label="58.1 Name of educational institution" name="name58">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="58.2 Street" name="street58">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="58.3 City" name="city58">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="58.4 State/Province"
                                                       name="state58">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="58.5 Postal Zone/ZIP Code"
                                                       name="zipCode58">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="58.6 Country"
                                                       name="country58">
                                                <Select
                                                    initialvalue=""
                                                    options={country()}/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="58.7 Course of Study"
                                                       name="courseOfStudy58">
                                                <Input/>
                                            </Form.Item>

                                            <Form.Item rules={[{required: true,},]} label="58.8 Date of Attendance From"
                                                       name="dateFrom58">
                                                <DatePicker/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="58.9 Date of Attendance To"
                                                       name="dateTo58">
                                                <DatePicker/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item rules={[{required: true,},]}
                                                       label="59. Have you attended any educational institutions at a secondary level or above?"
                                                       name="educational-institutions">
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
                                        {visible43 && <Col span={24}>
                                            <Row>
                                                <Col offset={2} span={22}>
                                                    <Form.Item rules={[{required: true,},]}
                                                               label="59.1 Name of institution" name="name59">
                                                        <Input/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]} label="59.2 Street"
                                                               name="street59">
                                                        <Input/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]} label="59.3 City"
                                                               name="city59">
                                                        <Input/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]} label="59.4 State/Province"
                                                               name="state59">
                                                        <Input/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]}
                                                               label="59.5 Postal Zone/ZIP Code" name="zipCode59">
                                                        <Input/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]} label="59.6 Country"
                                                               name="country59">
                                                        <Select
                                                            initialvalue=""
                                                            options={country()}/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]} label="59.7 Course of Study"
                                                               name="courseOfStudy59">
                                                        <Input/>
                                                    </Form.Item>

                                                    <Form.Item rules={[{required: true,},]}
                                                               label="59.8 Date of Attendance From"
                                                               name="dateFrom59">
                                                        <DatePicker/>
                                                    </Form.Item>
                                                    <Form.Item rules={[{required: true,},]}
                                                               label="59.9 Date of Attendance To" name="dateTo59">
                                                        <DatePicker/>
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </Col>}
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
                        <Button type="primary" onClick={() => navigate(router.ELEVENTH)}>
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
