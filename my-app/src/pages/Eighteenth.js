import {Button, Col, Form, Row, Select} from "antd"
import {useNavigate} from "react-router"
import {router} from "../constants/router";
import {useEffect, useState} from "react";


export const Eighteenth = () => {
    const navigate = useNavigate();

    const [visible74, setVisible74] = useState(false)
    const [visible75, setVisible75] = useState(false)
    const [visible76, setVisible76] = useState(false)


    const [form] = Form.useForm();

    const selectedValue74 = Form.useWatch("select78", form);
    const selectedValue75 = Form.useWatch("select79", form);
    const selectedValue76 = Form.useWatch("select80", form);


    useEffect(() => {
        if (selectedValue74 === "yes") {
            setVisible74(true)
        } else {
            setVisible74(false)
        }
    }, [selectedValue74, visible74])

    useEffect(() => {
        if (selectedValue75 === "yes") {
            setVisible75(true)
        } else {
            setVisible75(false)
        }
    }, [selectedValue75, visible75])

    useEffect(() => {
        if (selectedValue76 === "yes") {
            setVisible76(true)
        } else {
            setVisible76(false)
        }
    }, [selectedValue76, visible76])


    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={24} justify="space-between">
                <Col offset={4} span={15} className="PersonalInform">Security and Background: Part 5</Col>
                <Col offset={2} span={16}>
                    <Row gutter={24}>
                        <Col span={15}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item
                                        label="91. Have you ever withheld custody of a U.S. citizen child outside the United States from a person granted legal custody by a U.S. court?"
                                        name="select78">
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
                                {visible74 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="91.1 Explain" name="explain91">
                                                <textarea id="textar91" name="textar91" rows="4" cols="60"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item
                                        label="92. Have you voted in the United States in violation of any law or regulation?"
                                        name="select79">
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
                                {visible75 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="92.1 Explain" name="explain92">
                                                <textarea id="textar92" name="textar92" rows="4" cols="60"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item
                                        label="93. Have you ever renounced United States citizenship for the purposes of avoiding taxation?"
                                        name="select80">
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
                                {visible76 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item label="93.1 Explain" name="explain93">
                                                <textarea id="textar93" name="textar93" rows="4" cols="60"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col offset={2} span={22}>
                    <Button type="primary" onClick={() => navigate(router.SEVENTEENTH)}>previous</Button>
                    <Button type="primary" onClick={() => navigate(router.H)} htmlType="submit">Proceed to
                        pay</Button>
                </Col>
            </Row>
        </Form>
    )
}
