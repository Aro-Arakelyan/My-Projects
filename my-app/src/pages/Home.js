import { router } from "../constants/router";
import { Link } from "react-router-dom";

export function Home () {

    return (
        <div className="head">
            <div className="fl">
                <div className="txt">
                    <p>Choose language</p>
                    <p>Ընտրել լեզուն</p>
                    <p>Выбрать Язык</p>
                </div>
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

    )
}