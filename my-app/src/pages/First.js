import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { router } from "../constants/router";
import { country } from "../functions/countries";
import { Pic } from "../functions/pic";


export const First = () => {

    const navigate = useNavigate();
    const [visible4, setVisible4] = useState(false)
    const [visible5, setVisible5] = useState(false)
    const [visible51, setVisible51] = useState(false)
    const [form] = Form.useForm();

    const selectedValue4 = Form.useWatch("other-names", form);
    const selectedValue5 = Form.useWatch("telecode", form);
    const selectedValue51 = Form.useWatch("maritalStatus", form);


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

    useEffect(() => {
        if (selectedValue51 === "h. Other") {
            setVisible51(true)
        } else {
            setVisible51(false)
        }
    }, [selectedValue51, visible51])


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
                        console.log('response:', data);
                        navigate(router.SECOND);
                    })
                    .catch((error) => {
                        console.error('error:', error);
                    });
            })
            .catch((error) => {
                console.error('Form validation failed:', error);
            });
    };

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={11} justify="space-between">
                <Col offset={8} span={16} className="PersonalInform">Personal Information 1</Col>
                <div className="asd">
                    <div >
                        <Col offset={2} span={21}>
                            <Row gutter={11}>
                                <Col span={21}>
                                    <Row className="inp">
                                        <Col span={24}>
                                            <Form.Item rules={[{ required: true, },]} label="1. Surnames" name="surname">
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item rules={[{ required: true, },]} label="2. Given Names" name="givenName">
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item rules={[{ required: true, },]} label="3. Full Name" name="fullName">
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item rules={[{ required: true, },]} label="4. Have you ever used other names (i.e., maiden, religious, professional, alias, etc.)?" name="other-names">
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
                                                    ]} />
                                            </Form.Item>
                                        </Col>
                                        {visible4 && <Col span={24}>
                                            <Row>
                                                <Col offset={2} span={22}>
                                                    <Form.Item rules={[{ required: true, },]} label="4.1 Other Surnames Used (maiden, religious, professional, aliases, etc.)" name="otherSurname">
                                                        <Input />
                                                    </Form.Item>
                                                </Col>
                                                <Col offset={2} span={22}>
                                                    <Form.Item rules={[{ required: true, },]} label="4.2 Other Given Names Used" name="otherGivenName">
                                                        <Input />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </Col>}
                                        <Col span={24}>
                                            <Form.Item rules={[{ required: true, },]} label="5. Do you have a telecode that represents your name?" name="telecode">
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
                                                    ]} />
                                            </Form.Item>
                                        </Col>
                                        {visible5 && <Col span={24}>
                                            <Row>
                                                <Col offset={2} span={22}>
                                                    <Form.Item rules={[{ required: true, },]} label="5.1 Telecode Surnames" name="telecodeSurname">
                                                        <Input />
                                                    </Form.Item>
                                                </Col>
                                                <Col offset={2} span={22}>
                                                    <Form.Item rules={[{ required: true, },]} label="5.2 Telecode Given Names" name="telecodeGivenname">
                                                        <Input />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </Col>}
                                        <Col span={24}>
                                            <Form.Item rules={[{ required: true, },]} label="6. Sex" name="sex">
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
                                                    ]} />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item rules={[{ required: true, },]} label="7. Marital Status" name="maritalStatus">
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
                                                    ]} />
                                            </Form.Item>
                                        </Col>
                                        {visible51 && <Col span={24}>
                                            <Row>
                                                <Col offset={2} span={22}>
                                                    <Form.Item rules={[{ required: true, },]} label="7.1 Explain" name="explain7">
                                                        <textarea id="textar7" name="textar7" rows="6" cols="50"></textarea>
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </Col>}
                                        <Col span={24}>
                                            <Form.Item label="8. Date and Place of Birth" name="dateAndBirthday">
                                                <div>
                                                    <Col offset={2} span={22}>
                                                        <Form.Item rules={[{ required: true, },]} label="8.1 (Format: YYYY-MM-DD)" name="dateFormat">
                                                            <DatePicker />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col offset={2} span={22}>
                                                        <Form.Item rules={[{ required: true, },]} label="8.2 Country/Region" name="country">
                                                            <Select
                                                                initialvalue=""
                                                                options={country()} />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col offset={2} span={22}>
                                                        <Form.Item rules={[{ required: true, },]} label="8.3 City" name="city">
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col offset={2} span={22}>
                                                        <Form.Item rules={[{ required: true, },]} label="8.4 State/Province" name="state">
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                </div>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                    <div>
                        <Col span={7}>
                            <Form.Item rules={[{ required: true, },]} label="" name="picture">
                                {Pic()}
                            </Form.Item>
                        </Col>
                    </div>
                </div>
                <Col className="buttons" offset={6} span={18}>
                    <Form.Item label=" ">
                        <Button type="primary" onClick={() => navigate(router.HOME)}>
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


