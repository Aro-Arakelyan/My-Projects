import {Button, Col, Form, Row, Select} from "antd"
import {useNavigate} from "react-router"
import {router} from "../constants/router";
import {useEffect, useState} from "react";


export const Fourteenth = () => {
    const navigate = useNavigate();
    const [visible50, setVisible50] = useState(false)
    const [visible51, setVisible51] = useState(false)
    const [visible52, setVisible52] = useState(false)


    const [form] = Form.useForm();
    const selectedValue50 = Form.useWatch("communicable-disease", form);
    const selectedValue51 = Form.useWatch("mental-or-physical-disorder", form);
    const selectedValue52 = Form.useWatch("drug-abuser-or-addict", form);


    useEffect(() => {
        if (selectedValue50 === "yes") {
            setVisible50(true)
        } else {
            setVisible50(false)
        }
    }, [selectedValue50, visible50])

    useEffect(() => {
        if (selectedValue51 === "yes") {
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


    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={24} justify="space-between">
                <Col offset={4} span={15} className="PersonalInform">Security and Background: Part 1</Col>
                <Col offset={2} span={16}>
                    <Row gutter={24}>
                        <Col span={15}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                               label="67. Do you have a communicable disease of public health significance? (Communicable diseases of public significance include chancroid, gonorrhea, granuloma inguinale, infectious leprosy, lymphogranuloma venereum, infectious stage syphilis, active tuberculosis, and other diseases as determined by the Department of Health and Human Services.)"
                                               name="communicable-disease">
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
                                {visible50 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="67.1 Explain"
                                                       name="explain67">
                                                <textarea id="textar67" name="textar67" rows="4" cols="40"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                               label="68. Do you have a mental or physical disorder that poses or is likely to pose a threat to the safety or welfare of yourself or others?"
                                               name="mental-or-physical-disorder">
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
                                            <Form.Item rules={[{required: true,},]} label="68.1 Explain"
                                                       name="explain68">
                                                <textarea id="textar68" name="textar68" rows="4" cols="40"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]}
                                               label="69. Are you or have you ever been a drug abuser or addict?"
                                               name="drug-abuser-or-addict">
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
                                {visible52 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="69.1 Explain"
                                                       name="explain69">
                                                <textarea id="textar69" name="textar69" rows="4" cols="40"></textarea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col offset={2} span={22}>
                    <Form.Item label=" ">
                        <Button type="primary" onClick={() => navigate(router.THIRTEENTH)}>
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
