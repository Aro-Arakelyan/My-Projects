import { Progress } from 'antd';
import React from 'react';

// const Header = ({ count }) => {
//     const percent = (count * 100) / 18; // 18 - общее количество страниц
//     return <Progress percent={percent} />;
// };

const Header = ({ count }) => {
    console.log("Count in Header:", count);
    const percent = (count * 100) / 18; // 18 - общее количество страниц
    return <Progress percent={percent} />;
};

export default Header;

