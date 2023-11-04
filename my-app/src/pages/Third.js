import {Button, Col, DatePicker, Form, Input, Row, Select} from "antd"
import {useNavigate} from "react-router"
import {router} from "../constants/router";
import '../App.css';

import {useEffect, useState} from "react";
import {
    purposeOfTrip,
    specify,
    lengthOfStay1,
    lengthOfStay2,
    personPay, relationship
} from "../functions/travelInformation"
import {country, province} from "../functions/countries";

export const Third = () => {
    const navigate = useNavigate();

    const [visible10, setVisible10] = useState(false)
    const [visible11, setVisible11] = useState(false)
    const [visible12, setVisible12] = useState(false)
    const [visible13, setVisible13] = useState(false)
    const [visible14, setVisible14] = useState(false)
    const [visible15, setVisible15] = useState(false)
    const [visible16, setVisible16] = useState(false)
    const [visible17, setVisible17] = useState(false)


    const [form] = Form.useForm();

    const selectedValue10 = Form.useWatch("Specify", form);
    const selectedValue11 = Form.useWatch("Specify", form);
    const selectedValue12 = Form.useWatch("Specify", form);
    const selectedValue13 = Form.useWatch("Specify", form);
    const selectedValue14 = Form.useWatch("travel-plans", form);
    const selectedValue15 = Form.useWatch("travel-plans", form);
    const selectedValue16 = Form.useWatch("Person/Entity", form);
    const selectedValue17 = Form.useWatch("Person/Entity", form);


    useEffect(() => {
        if (selectedValue10 === "a. (K1) FIANCÉ(E) OF A U.S. CITIZEN") {
            setVisible10(true)
        } else {
            setVisible10(false)
        }
    }, [selectedValue10, visible10])

    useEffect(() => {
        if (selectedValue11 === "b. (K2) CHILD OF A K1") {
            setVisible11(true)
        } else {
            setVisible11(false)
        }
    }, [selectedValue11, visible11])

    useEffect(() => {
        if (selectedValue12 === "c. (K3) SPOUSE OF A U.S. CITIZEN") {
            setVisible12(true)
        } else {
            setVisible12(false)
        }
    }, [selectedValue12, visible12])

    useEffect(() => {
        if (selectedValue13 === "d. (K4) CHILD OF A K3") {
            setVisible13(true)
        } else {
            setVisible13(false)
        }
    }, [selectedValue13, visible13])

    useEffect(() => {
        if (selectedValue14 === "no") {
            setVisible14(true)
        } else {
            setVisible14(false)
        }
    }, [selectedValue14, visible14])

    useEffect(() => {
        if (selectedValue15 === "yes") {
            setVisible15(true)
        } else {
            setVisible15(false)
        }
    }, [selectedValue15, visible15])

    useEffect(() => {
        if (selectedValue16 === "b. OTHER PERSON") {
            setVisible16(true)
        } else {
            setVisible16(false)
        }
    }, [selectedValue16, visible16])

    useEffect(() => {
        if (selectedValue17 === "e. OTHER COMPANY/ORGANIZATION") {
            setVisible17(true)
        } else {
            setVisible17(false)
        }
    }, [selectedValue17, visible17])


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
                        navigate(router.FOURTH);
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
                <Col offset={4} span={16} className="PersonalInform">Travel Information</Col>
                <Col offset={2} span={16}>
                    <Row gutter={24}>
                        <Col span={15}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="15. Purpose of Trip to the U.S." name="fifteen">
                                        <Select
                                            initialvalue=""
                                            options={purposeOfTrip()}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="16. Specify" name="Specify">
                                        <Select
                                            initialvalue=""
                                            options={specify()}/>
                                    </Form.Item>
                                </Col>
                                {visible10 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number"
                                                       name="sixteenEleven">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible11 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="sixteenEleven1">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="sixteenEleven2">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number"
                                                       name="sixteenEleven3">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                </Col>}
                                {visible12 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number"
                                                       name="sixteenEleven">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible13 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="surename">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="name">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number"
                                                       name="petitionNumber">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="17. Have you made specific travel plans?" name="travel-plans">
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
                                {visible14 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.1.2.3 Intended Date of Arrival" name="select6">
                                                    <DatePicker/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={20}>
                                                <Form.Item rules={[{required: true,},]} label="17.4.5 Intended Length of Stay in U.S."
                                                           name="select6">
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
                                            <Col span={24}>
                                                <Form.Item rules={[{required: true,},]} label="17.17 Street Address" name="address">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Form.Item rules={[{required: true,},]} label="17.18 City" name="city">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Form.Item rules={[{required: true,},]}
                                                    label="17.19 State/Province" name="province">
                                                    <Select
                                                        initialvalue=""
                                                        options={province()}/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Form.Item rules={[{required: true,},]} label="17.20 Postal Zone/ZIP Code" name="postal">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible15 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.6.7.8 Date of Arrival in U.S." name="arrivalDate">
                                                    <DatePicker/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.9 Arrival Flight (if known)" name="arrivalFlight">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.10 Arrival City" name="arrivalCity">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.11.12.13 Date of Departure from U.S."
                                                           name="departureDate">
                                                    <DatePicker/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.14 Departure Flight (if known)"
                                                           name="departureFlight">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.15 Departure City" name="departCity">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]}
                                                    label="17.16 Provide the locations you plan to visit in the U.S.:"
                                                    name="visitPlan">
                                                    <textarea id="textar17" name="textar17" rows="6"
                                                              cols="50"></textarea>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.17 Street Address" name="strAdd">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.18 City" name="depCity">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]}
                                                    label="17.19 State/Province" name="province">
                                                    <Select
                                                        initialvalue=""
                                                        options={province()}/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.20 Postal Zone/ZIP Code" name="postal">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="18. Person/Entity Paying for Your Trip" name="Person/Entity">
                                        <Select
                                            initialvalue=""
                                            options={personPay()}/>
                                    </Form.Item>
                                </Col>
                                {visible16 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Col offset={2} span={22}>
                                                <Form.Item  label="18.1 Surnames of Person Paying for Trip"
                                                           name="surnameOfPerson" rules={[{required: true,},]}>
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item label="18.2 Given Names of Person Paying for Trip"
                                                           name="givenNameOfPerson" rules={[{required: true,},]}>
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item label="18.3 Telephone Number"
                                                           name="telephone" rules={[{required: true,},]}>
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item type="email" label="18.4 Email Address"
                                                           name="emailAddress" rules={[{required: true,},]}>
                                                    <Input type="email"/>
                                                </Form.Item>
                                                <Form.Item rules={[{required: true,},]} label="18.5 Relationship to You" name="relationship">
                                                    <Select
                                                        initialvalue=""
                                                        options={relationship()}/>
                                                </Form.Item>
                                                <Form.Item rules={[{required: true,},]}
                                                    label="19. Is the address of the party paying for your trip the same as your Home or Mailing Address?"
                                                    name="addressIsSame">
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
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible17 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="20. Street Address"
                                                           name="streetAddress">
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item rules={[{required: true,},]} label="20.1 City"
                                                           name="city">
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item rules={[{required: true,},]} label="20.2 State/Province"
                                                           name="province">
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item rules={[{required: true,},]} label="20.3 Postal Zone/ZIP Code"
                                                           name="postalCode">
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item rules={[{required: true,},]}
                                                    label="20.4 Country/Region" name="countryRegion">
                                                    <Select
                                                        initialvalue=""
                                                        options={country()}/>
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
                        <Button type="primary" onClick={() => navigate(router.SECOND)}>
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
