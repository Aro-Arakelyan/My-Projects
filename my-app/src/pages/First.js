import { Button, Col, Form, Input, Row } from "antd"
import { useNavigate } from "react-router"
import { router } from "../constants/router";

export const First = () => {
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
            <Form layout="vertical" onFinish={handleSubmit}>
            <Row gutter={24} justify="space-between">
                <Col span={16}>
                    <Row gutter={24}>
                        <Col span={16}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="Surnames" name="Surnames">
                                        <Input/>
                                     </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Given Names" name="givenName">
                                        <Input/>
                                     </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Full Name" name="FullName">
                                        <Input/>
                                     </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={7}>Image</Col>
                    </Row>
                </Col>
                <Col span={7}>affs</Col>
                <Col span={24}>
                <Button type="primary" onClick={()=> navigate(router.HOME)}> նախորդ</Button>
                <Button type="primary" htmlType="submit" >հաջորդ</Button>
                </Col>
            </Row>
            </Form>
        
   

    )
}