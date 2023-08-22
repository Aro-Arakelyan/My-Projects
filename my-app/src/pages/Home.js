import { router } from "../constants/router";
import { Link } from "react-router-dom";

export function Home () {

    return (
        <div>
            <div className="fl">
                <div className="txt">
                    <p>Choose language</p>
                    <p>Ընտրել լեզուն</p>
                    <p>Выбрать Язык</p>
                </div>
                <div className="a">
                    <li className="b">
                        <a className="c" href="#">Languages</a>
                        <ul className="dropdown">
                            <li className="e"><Link className="c" to={router.FIRST}>English</Link></li>
                            <li className="e"><a className="c" href="#">Հայերեն</a></li>
                            <li className="e"><a className="c" href="#">Русский</a></li>
                        </ul>
                    </li>
                </div>
            </div>
        </div>

    )
}