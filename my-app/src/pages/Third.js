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

    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)
    const [visible4, setVisible4] = useState(false)
    const [visible51, setVisible51] = useState(false)
    const [visible52, setVisible52] = useState(false)
    const [visible53, setVisible53] = useState(false)
    const [visible54, setVisible54] = useState(false)



    const [form] = Form.useForm();

    const selectedValue1 = Form.useWatch("selectOne", form);
    const selectedValue2 = Form.useWatch("selectOne", form);
    const selectedValue3 = Form.useWatch("selectOne", form);
    const selectedValue4 = Form.useWatch("selectOne", form);
    const selectedValue51 = Form.useWatch("select17", form);
    const selectedValue52 = Form.useWatch("select17", form);
    const selectedValue53 = Form.useWatch("select18", form);
    const selectedValue54 = Form.useWatch("select18", form);



    useEffect(() => {
        if (selectedValue51 === "no") {
            setVisible51(true)
        } else {
            setVisible51(false)
        }
    }, [selectedValue51, visible51])

    useEffect(() => {
        if (selectedValue52 === "yes") {
            setVisible52(true)
        } else {
            setVisible52(false)
        }
    }, [selectedValue52, visible52])

    useEffect(() => {
        if (selectedValue53 === "b. OTHER PERSON") {
            setVisible53(true)
        } else {
            setVisible53(false)
        }
    }, [selectedValue53, visible53])

    useEffect(() => {
        if (selectedValue54 === "e. OTHER COMPANY/ORGANIZATION") {
            setVisible54(true)
        } else {
            setVisible54(false)
        }
    }, [selectedValue54, visible54])

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
                                            initialvalue=""
                                            options={purposeOfTrip()}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="16. Specify" name="selectOne">
                                        <Select
                                            initialvalue=""
                                            options={specify()}/>
                                    </Form.Item>
                                </Col>
                                {visible1 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="16.11 Application Receipt/Petition Number"
                                                       name="sixteenEleven">
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
                                            <Form.Item label="16.11 Application Receipt/Petition Number"
                                                       name="sixteenEleven3">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                </Col>}
                                {visible3 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="16.11 Application Receipt/Petition Number"
                                                       name="sixteenEleven">
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
                                            <Form.Item label="16.11 Application Receipt/Petition Number"
                                                       name="sixteenEleven3">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                </Col>}
                                <Col span={24}>
                                    <Form.Item label="17. Have you made specific travel plans?" name="select17">
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
                                {visible51 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Col offset={2} span={22}>
                                                <Form.Item label="17.1.2.3 Intended Date of Arrival " name="select6">
                                                    <p>(Format: YYYY-MM-DD)</p>
                                                    <DatePicker/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={20}>
                                                <Form.Item label="17.4.5 Intended Length of Stay in U.S."
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
                                                <Form.Item label="17.17 Street Address" name="address">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Form.Item label="17.18 City" name="city">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Form.Item
                                                    label="17.19 State/Province" name="province">
                                                    <Select
                                                        initialvalue=""
                                                        options={province()}/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Form.Item label="17.20 Postal Zone/ZIP Code" name="postal">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible52 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Col offset={2} span={22}>
                                                <Form.Item label="17.6.7.8 Date of Arrival in U.S." name="arrivalDate">
                                                    <p>(Format: YYYY-MM-DD)</p>
                                                    <DatePicker/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item label="17.9 Arrival Flight (if known)" name="flight">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item label="17.10 Arrival City" name="arrivalCity">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item label="17.11.12.13 Date of Departure from U.S."
                                                           name="departureDate">
                                                    <p>(Format: YYYY-MM-DD)</p>
                                                    <DatePicker/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item label="17.14 Departure Flight (if known)" name="flight">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item label="17.15 Departure City" name="departureCity">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item
                                                    label="17.16 Provide the locations you plan to visit in the U.S.:"
                                                    name="visitPlan">
                                                    <textarea id="textar" name="textar" rows="6" cols="50"></textarea>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item label="17.17 Street Address" name="departureCity">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item label="17.18 City" name="departureCity">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item
                                                    label="17.19 State/Province" name="province">
                                                    <Select
                                                        initialvalue=""
                                                        options={province()}/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item label="17.20 Postal Zone/ZIP Code" name="postal">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col>}


                                <Col span={24}>
                                    <Form.Item label="18. Person/Entity Paying for Your Trip" name="select18">
                                        <Select
                                            initialvalue=""
                                            options={personPay()}/>
                                    </Form.Item>
                                </Col>
                                {visible53 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Col offset={2} span={22}>
                                                <Form.Item label="18.1 Surnames of Person Paying for Trip"
                                                           name="surname">
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item label="18.2 Given Names of Person Paying for Trip"
                                                           name="givenName">
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item label="18.3 Telephone Number"
                                                           name="telephone">
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item type="email" label="18.4 Email Address"
                                                           name="emailAddress">
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item label="18.5 Relationship to You" name="relationship">
                                                    <Select
                                                        initialvalue=""
                                                        options={relationship()}/>
                                                </Form.Item>
                                                <Form.Item
                                                    label="19. Is the address of the party paying for your trip the same as your Home or Mailing Address?"
                                                    name="select19">
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
                                {visible54 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Col offset={2} span={22}>
                                                <Form.Item label="20. Street Address"
                                                           name="streetAd">
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item label="20.1 City"
                                                           name="city">
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item label="20.2 State/Province"
                                                           name="stateProvince">
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item label="20.3 Postal Zone/ZIP Code"
                                                           name="postalCode">
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item
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
                <Col offset={2} span={24}>
                    <Button type="primary" onClick={() => navigate(router.SECOND)}>previous</Button>
                    <Button type="primary" onClick={() => navigate(router.FOURTH)} htmlType="submit">next</Button>
                </Col>
            </Row>
        </Form>
    )
}
