// import { router } from "../constants/router";
// import { Link } from "react-router-dom";
// import {Form, Select} from "antd";
// import {country} from "../functions/countries";
//
// export function Home () {
//
//     return (
//         <div>
//             <div className="head">
//                 <div className="fl">
//                     <div className="a">
//                         <li className="b">
//                             <span className="c">Languages</span>
//                             <ul className="dropdown">
//                                 <li className="e"><Link className="c" to={router.FIRST}>English</Link></li>
//                                 <li className="e"><Link className="c" to={router.FIRST}>Русский</Link></li>
//                                 <li className="e"><Link className="c" to={router.FIRST}>Հայերեն</Link></li>
//                             </ul>
//                         </li>
//                     </div>
//                 </div>
//             </div>
//             <div className="input3">
//                 <Form>
//                     <Form.Item
//                         label="What's your Location" name="country38">
//                         <Select
//                             initialvalue=""
//                             options={country()}/>
//                     </Form.Item>
//                 </Form>
//             </div>
//         </div>
//     )
// }

import React from 'react';
import {Button, Col, Dropdown, Form, Select} from 'antd';
import {router} from "../constants/router";
import {Link} from "react-router-dom";
import {country} from "../functions/countries";

const items = [
    {
        key: '1',
        label: (
            <Link to={router.FIRST}>English</Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link to={router.FIRST}>Русский</Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link to={router.FIRST}>Հայերեն</Link>
        ),
    },
];


export const Home = () => {
        const [form] = Form.useForm();

        const handleGet = () => {
            form
                .validateFields()
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
        };

        return (
            <Form form={form} layout="vertical" onFinish={handleGet}>
                <div className="fl">
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottom"
                        arrow={{
                            pointAtCenter: true,
                        }}>
                        <Button type="primary" htmlType="submit">Languages</Button>
                    </Dropdown>
                </div>
                <div className="input3">
                    <div>
                        <Col span={24}>
                            <Form.Item rules={[{required: true,},]} label="What's your Location" name="Location">
                                <Select
                                    initialvalue="your country"
                                    options={country()}/>
                            </Form.Item>
                        </Col>
                    </div>
                </div>
            </Form>
        )
    }
;
