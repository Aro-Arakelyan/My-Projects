import { router } from "../constants/router";
import { Link } from "react-router-dom";
import {Form, Select} from "antd";
import {country} from "../functions/countries";

export function Home () {

    return (
        <div>
            <div className="head">
                <div className="fl">
                    <div className="a">
                        <li className="b">
                            <span className="c">Languages</span>
                            <ul className="dropdown">
                                <li className="e"><Link className="c" to={router.FIRST}>English</Link></li>
                                <li className="e"><Link className="c" to={router.FIRST}>Русский</Link></li>
                                <li className="e"><Link className="c" to={router.FIRST}>Հայերեն</Link></li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
            <div className="input3">
                <Form.Item
                    label="What's your Location" name="country38">
                    <Select
                        initialvalue=""
                        options={country()}/>
                </Form.Item>
            </div>
        </div>


    )
}