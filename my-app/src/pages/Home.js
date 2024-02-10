import { Button, Col, Dropdown, Form, Select } from 'antd';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { router } from "../constants/router";
import { country } from "../functions/countries";

export const Home = () => {
    const [form] = Form.useForm();
    const [locationFilled, setLocationFilled] = useState(false);

    const handleGet = () => {
        form.validateFields()
            .then((values) => {
                console.log('Form values:', values);
                
                fetch('https://jsonplaceholder.typicode.com/users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('response error');
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log('Server-Response:', data);
                })
                .catch((error) => {
                    console.error('error:', error);
                });
            })
            .catch((errorInfo) => {
                console.error('Form validation failed:', errorInfo);
            });
    };

    const handleLanguageClick = (e) => {
    if (!locationFilled) {
        e.preventDefault();
    }
};

    const items = [
        {
            key: '1',
            label: (
                <Link to={router.FIRST} onClick={handleLanguageClick}>English</Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to={router.FIRST} onClick={handleLanguageClick}>Русский</Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link to={router.FIRST} onClick={handleLanguageClick}>Հայերեն</Link>
            ),
        },
    ];

    return (
        <div className="norutyun">
            <Form form={form} layout="vertical" onFinish={handleGet}>
            <div className="fl">
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottom"
                    arrow={{
                        pointAtCenter: true,
                    }}
                >
                    <Button type="primary" htmlType="submit">Languages</Button>
                </Dropdown>
            </div>
            <div className="input3">
                <div>
                    <Col span={24}>
                        <Form.Item
                            rules={[{required: true}]}
                            label="What's your Location"
                            name="Location"
                            onSelect={() => setLocationFilled(true)} // Устанавливаем locationFilled в true при изменении поля "Location"
                        >
                            <Select initialvalue="Armenia" options={country()} />
                        </Form.Item>
                    </Col>
                </div>
            </div>
        </Form>
        </div>
    );
};
