import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import '../App.css';
import { router } from "../constants/router";
import { country, province } from "../functions/countries";
import { lengthOfStay1, lengthOfStay2, personPay, purposeOfTrip, relationship, specify } from "../functions/travelInformation";

export const Third = () => {
    const navigate = useNavigate();
    const [visible14, setVisible14] = useState(false)
    const [visible15, setVisible15] = useState(false)
    const [visible16, setVisible16] = useState(false)
    const [visible17, setVisible17] = useState(false)
    const [visible77, setVisible77] = useState(false)
    const [visible78, setVisible78] = useState(false)
    const [visible79, setVisible79] = useState(false)
    const [visible80, setVisible80] = useState(false)
    const [visible81, setVisible81] = useState(false)
    const [visible82, setVisible82] = useState(false)
    const [visible83, setVisible83] = useState(false)
    const [visible84, setVisible84] = useState(false)
    const [visible85, setVisible85] = useState(false)
    const [visible86, setVisible86] = useState(false)
    const [visible87, setVisible87] = useState(false)
    const [visible88, setVisible88] = useState(false)
    const [visible89, setVisible89] = useState(false)
    const [visible90, setVisible90] = useState(false)
    const [visible91, setVisible91] = useState(false)
    const [visible92, setVisible92] = useState(false)
    const [visible93, setVisible93] = useState(false)
    const [visible94, setVisible94] = useState(false)
    const [visible95, setVisible95] = useState(false)
    const [visible96, setVisible96] = useState(false)
    const [visible97, setVisible97] = useState(false)
    const [visible98, setVisible98] = useState(false)
    const [visible99, setVisible99] = useState(false)
    const [visible100, setVisible100] = useState(false)
    const [visible101, setVisible101] = useState(false)
    const [visible102, setVisible102] = useState(false)
    const [visible103, setVisible103] = useState(false)
    const [visible104, setVisible104] = useState(false)
    const [visible105, setVisible105] = useState(false)
    const [visible106, setVisible106] = useState(false)
    const [visible107, setVisible107] = useState(false)
    const [visible108, setVisible108] = useState(false)
    const [visible109, setVisible109] = useState(false)
    const [visible110, setVisible110] = useState(false)
    const [visible111, setVisible111] = useState(false)
    const [visible112, setVisible112] = useState(false)
    const [visible113, setVisible113] = useState(false)
    const [visible114, setVisible114] = useState(false)
    const [visible115, setVisible115] = useState(false)
    const [visible116, setVisible116] = useState(false)
    const [visible117, setVisible117] = useState(false)
    const [visible118, setVisible118] = useState(false)
    const [visible119, setVisible119] = useState(false)
    const [visible120, setVisible120] = useState(false)
    const [visible121, setVisible121] = useState(false)
    const [visible122, setVisible122] = useState(false)
    const [visible123, setVisible123] = useState(false)
    const [visible124, setVisible124] = useState(false)
    const [visible125, setVisible125] = useState(false)
    const [visible126, setVisible126] = useState(false)
    const [visible127, setVisible127] = useState(false)
    const [visible128, setVisible128] = useState(false)
    const [visible129, setVisible129] = useState(false)
    const [visible130, setVisible130] = useState(false)
    const [visible131, setVisible131] = useState(false)
    const [visible132, setVisible132] = useState(false)
    const [visible133, setVisible133] = useState(false)
    const [visible134, setVisible134] = useState(false)
    const [visible135, setVisible135] = useState(false)
    const [visible136, setVisible136] = useState(false)
    const [visible137, setVisible137] = useState(false)
    const [visible138, setVisible138] = useState(false)
    const [visible139, setVisible139] = useState(false)
    const [visible140, setVisible140] = useState(false)
    const [visible141, setVisible141] = useState(false)
    const [visible142, setVisible142] = useState(false)
    const [visible143, setVisible143] = useState(false)
    const [visible144, setVisible144] = useState(false)
    const [visible145, setVisible145] = useState(false)
    const [visible146, setVisible146] = useState(false)
    const [visible147, setVisible147] = useState(false)
    const [visible148, setVisible148] = useState(false)
    const [visible149, setVisible149] = useState(false)
    const [visible150, setVisible150] = useState(false)
    const [visible151, setVisible151] = useState(false)
    const [visible152, setVisible152] = useState(false)
    const [visible153, setVisible153] = useState(false)
    const [visible154, setVisible154] = useState(false)
    const [visible155, setVisible155] = useState(false)
    const [visible156, setVisible156] = useState(false)
    const [visible157, setVisible157] = useState(false)
    const [visible158, setVisible158] = useState(false)
    const [visible159, setVisible159] = useState(false)
    const [visible160, setVisible160] = useState(false)
    const [visible161, setVisible161] = useState(false)
    const [visible162, setVisible162] = useState(false)
    const [visible163, setVisible163] = useState(false)
    const [visible164, setVisible164] = useState(false)
    const [visible165, setVisible165] = useState(false)
    const [visible166, setVisible166] = useState(false)
    const [visible167, setVisible167] = useState(false)
    const [visible168, setVisible168] = useState(false)
    const [visible169, setVisible169] = useState(false)
    const [visible170, setVisible170] = useState(false)
    const [visible171, setVisible171] = useState(false)
    const [visible172, setVisible172] = useState(false)



    const [purposeValue, setPurposeValue] = useState("");


    const [form] = Form.useForm();

    const selectedValue14 = Form.useWatch("travel-plans", form);
    const selectedValue15 = Form.useWatch("travel-plans", form);
    const selectedValue16 = Form.useWatch("Person/Entity", form);
    const selectedValue17 = Form.useWatch("Person/Entity", form);
    const selectedValue77 = Form.useWatch("Specify", form);
    const selectedValue78 = Form.useWatch("Specify", form);
    const selectedValue79 = Form.useWatch("Specify", form);
    const selectedValue80 = Form.useWatch("Specify", form);
    const selectedValue81 = Form.useWatch("Specify", form);
    const selectedValue82 = Form.useWatch("Specify", form);
    const selectedValue83 = Form.useWatch("Specify", form);
    const selectedValue84 = Form.useWatch("Specify", form);
    const selectedValue85 = Form.useWatch("Specify", form);
    const selectedValue86 = Form.useWatch("Specify", form);
    const selectedValue87 = Form.useWatch("Specify", form);
    const selectedValue88 = Form.useWatch("Specify", form);
    const selectedValue89 = Form.useWatch("Specify", form);
    const selectedValue90 = Form.useWatch("Specify", form);
    const selectedValue91 = Form.useWatch("Specify", form);
    const selectedValue92 = Form.useWatch("Specify", form);
    const selectedValue93 = Form.useWatch("Specify", form);
    const selectedValue94 = Form.useWatch("Specify", form);
    const selectedValue95 = Form.useWatch("Specify", form);
    const selectedValue96 = Form.useWatch("Specify", form);
    const selectedValue97 = Form.useWatch("Specify", form);
    const selectedValue98 = Form.useWatch("Specify", form);
    const selectedValue99 = Form.useWatch("Specify", form);
    const selectedValue100 = Form.useWatch("Specify", form);
    const selectedValue101 = Form.useWatch("Specify", form);
    const selectedValue102 = Form.useWatch("Specify", form);
    const selectedValue103 = Form.useWatch("Specify", form);
    const selectedValue104 = Form.useWatch("Specify", form);
    const selectedValue105 = Form.useWatch("Specify", form);
    const selectedValue106 = Form.useWatch("Specify", form);
    const selectedValue107 = Form.useWatch("Specify", form);
    const selectedValue108 = Form.useWatch("Specify", form);
    const selectedValue109 = Form.useWatch("Specify", form);
    const selectedValue110 = Form.useWatch("Specify", form);
    const selectedValue111 = Form.useWatch("Specify", form);
    const selectedValue112 = Form.useWatch("Specify", form);
    const selectedValue113 = Form.useWatch("Specify", form);
    const selectedValue114 = Form.useWatch("Specify", form);
    const selectedValue115 = Form.useWatch("Specify", form);
    const selectedValue116 = Form.useWatch("Specify", form);
    const selectedValue117 = Form.useWatch("Specify", form);
    const selectedValue118 = Form.useWatch("Specify", form);
    const selectedValue119 = Form.useWatch("Specify", form);
    const selectedValue120 = Form.useWatch("Specify", form);
    const selectedValue121 = Form.useWatch("Specify", form);
    const selectedValue122 = Form.useWatch("Specify", form);
    const selectedValue123 = Form.useWatch("Specify", form);
    const selectedValue124 = Form.useWatch("Specify", form);
    const selectedValue125 = Form.useWatch("Specify", form);
    const selectedValue126 = Form.useWatch("Specify", form);
    const selectedValue127 = Form.useWatch("Specify", form);
    const selectedValue128 = Form.useWatch("Specify", form);
    const selectedValue129 = Form.useWatch("Specify", form);
    const selectedValue130 = Form.useWatch("Specify", form);
    const selectedValue131 = Form.useWatch("Specify", form);
    const selectedValue132 = Form.useWatch("Specify", form);
    const selectedValue133 = Form.useWatch("Specify", form);
    const selectedValue134 = Form.useWatch("Specify", form);
    const selectedValue135 = Form.useWatch("Specify", form);
    const selectedValue136 = Form.useWatch("Specify", form);
    const selectedValue137 = Form.useWatch("Specify", form);
    const selectedValue138 = Form.useWatch("Specify", form);
    const selectedValue139 = Form.useWatch("Specify", form);
    const selectedValue140 = Form.useWatch("Specify", form);
    const selectedValue141 = Form.useWatch("Specify", form);
    const selectedValue142 = Form.useWatch("Specify", form);
    const selectedValue143 = Form.useWatch("Specify", form);
    const selectedValue144 = Form.useWatch("Specify", form);
    const selectedValue145 = Form.useWatch("Specify", form);
    const selectedValue146 = Form.useWatch("Specify", form);
    const selectedValue147 = Form.useWatch("Specify", form);
    const selectedValue148 = Form.useWatch("Specify", form);
    const selectedValue149 = Form.useWatch("Specify", form);
    const selectedValue150 = Form.useWatch("Specify", form);
    const selectedValue151 = Form.useWatch("Specify", form);
    const selectedValue152 = Form.useWatch("Specify", form);
    const selectedValue153 = Form.useWatch("Specify", form);
    const selectedValue154 = Form.useWatch("Specify", form);
    const selectedValue155 = Form.useWatch("Specify", form);
    const selectedValue156 = Form.useWatch("Specify", form);
    const selectedValue157 = Form.useWatch("Specify", form);
    const selectedValue158 = Form.useWatch("Specify", form);
    const selectedValue159 = Form.useWatch("Specify", form);
    const selectedValue160 = Form.useWatch("Specify", form);
    const selectedValue161 = Form.useWatch("Specify", form);
    const selectedValue162 = Form.useWatch("Specify", form);
    const selectedValue163 = Form.useWatch("Specify", form);
    const selectedValue164 = Form.useWatch("Specify", form);
    const selectedValue165 = Form.useWatch("Specify", form);
    const selectedValue166 = Form.useWatch("Specify", form);
    const selectedValue167 = Form.useWatch("Specify", form);
    const selectedValue168 = Form.useWatch("Specify", form);
    const selectedValue169 = Form.useWatch("Specify", form);
    const selectedValue170 = Form.useWatch("Specify", form);
    const selectedValue171 = Form.useWatch("Specify", form);
    const selectedValue172 = Form.useWatch("Specify", form);



    useEffect(() => {
        if (selectedValue14 === "no") {
            setVisible14(true)
        } else {
            setVisible14(false)
        }
    }, [selectedValue14, visible14])

    useEffect(() => {
        if (selectedValue15 === "yes") {
            setVisible15(true)
        } else {
            setVisible15(false)
        }
    }, [selectedValue15, visible15])

    useEffect(() => {
        if (selectedValue16 === "b. OTHER PERSON") {
            setVisible16(true)
        } else {
            setVisible16(false)
        }
    }, [selectedValue16, visible16])

    useEffect(() => {
        if (selectedValue17 === "e. OTHER COMPANY/ORGANIZATION") {
            setVisible17(true)
        } else {
            setVisible17(false)
        }
    }, [selectedValue17, visible17])

    useEffect(() => {
        if (selectedValue77 === "a. (A1) Ambassador or public minister") {
            setVisible77(true)
        } else {
            setVisible77(false)
        }
    }, [selectedValue77, visible77])

    useEffect(() => {
        if (selectedValue78 === "b. (A1) Child of AN A1") {
            setVisible78(true)
        } else {
            setVisible78(false)
        }
    }, [selectedValue78, visible78])

    useEffect(() => {
        if (selectedValue79 === "c. (A1) Career diplomat/Consular officer") {
            setVisible79(true)
        } else {
            setVisible79(false)
        }
    }, [selectedValue79, visible79])

    useEffect(() => {
        if (selectedValue80 === "d. (A1) Spouse of AN A1") {
            setVisible80(true)
        } else {
            setVisible80(false)
        }
    }, [selectedValue80, visible80])

    useEffect(() => {
        if (selectedValue81 === "e. (A2) Child of AN A2") {
            setVisible81(true)
        } else {
            setVisible81(false)
        }
    }, [selectedValue81, visible81])

    useEffect(() => {
        if (selectedValue82 === "f. (A2) Foreign official/Employee") {
            setVisible82(true)
        } else {
            setVisible82(false)
        }
    }, [selectedValue82, visible82])

    useEffect(() => {
        if (selectedValue83 === "g. (A2) Spouse of AN A2") {
            setVisible83(true)
        } else {
            setVisible83(false)
        }
    }, [selectedValue83, visible83])

    useEffect(() => {
        if (selectedValue84 === "h. (A3) Child of AN A3") {
            setVisible84(true)
        } else {
            setVisible84(false)
        }
    }, [selectedValue84, visible84])

    useEffect(() => {
        if (selectedValue85 === "i. (A3) Personal emp. Of AN A1 or A2") {
            setVisible85(true)
        } else {
            setVisible85(false)
        }
    }, [selectedValue85, visible85])

    useEffect(() => {
        if (selectedValue86 === "j. (A3) Spouse of AN A3") {
            setVisible86(true)
        } else {
            setVisible86(false)
        }
    }, [selectedValue86, visible86])

    useEffect(() => {
        if (selectedValue87 === "d. (C3) Child of a C3") {
            setVisible87(true)
        } else {
            setVisible87(false)
        }
    }, [selectedValue87, visible87])

    useEffect(() => {
        if (selectedValue88 === "g. (C3) Spouse of a C3") {
            setVisible88(true)
        } else {
            setVisible88(false)
        }
    }, [selectedValue88, visible88])

    useEffect(() => {
        if (selectedValue89 === "a. (CW1) CNMI temporary worker") {
            setVisible89(true)
        } else {
            setVisible89(false)
        }
    }, [selectedValue89, visible89])

    useEffect(() => {
        if (selectedValue90 === "b. (CW2) Child of CW1") {
            setVisible90(true)
        } else {
            setVisible90(false)
        }
    }, [selectedValue90, visible90])

    useEffect(() => {
        if (selectedValue91 === "c. (CW2) Spouse of CW1") {
            setVisible91(true)
        } else {
            setVisible91(false)
        }
    }, [selectedValue91, visible91])

    useEffect(() => {
        if (selectedValue92 === "d. (E2C) CNMI Long term investor") {
            setVisible92(true)
        } else {
            setVisible92(false)
        }
    }, [selectedValue92, visible92])

    useEffect(() => {
        if (selectedValue93 === "a. (E1) Child of an E1") {
            setVisible93(true)
        } else {
            setVisible93(false)
        }
    }, [selectedValue93, visible93])

    useEffect(() => {
        if (selectedValue94 === "b. (E1) Executive/mgr/essential emp") {
            setVisible94(true)
        } else {
            setVisible94(false)
        }
    }, [selectedValue94, visible94])

    useEffect(() => {
        if (selectedValue95 === "c. (E1) Spouse of an E1") {
            setVisible95(true)
        } else {
            setVisible95(false)
        }
    }, [selectedValue95, visible95])

    useEffect(() => {
        if (selectedValue96 === "e. (E2) Child of an E2") {
            setVisible96(true)
        } else {
            setVisible96(false)
        }
    }, [selectedValue96, visible96])

    useEffect(() => {
        if (selectedValue97 === "f. (E2) Executive/mgr/essential emp") {
            setVisible97(true)
        } else {
            setVisible97(false)
        }
    }, [selectedValue97, visible97])

    useEffect(() => {
        if (selectedValue98 === "g. (E2) Spouse of an E2") {
            setVisible98(true)
        } else {
            setVisible98(false)
        }
    }, [selectedValue98, visible98])

    useEffect(() => {
        if (selectedValue99 === "i. (E3D) Child of an E3") {
            setVisible99(true)
        } else {
            setVisible99(false)
        }
    }, [selectedValue99, visible99])

    useEffect(() => {
        if (selectedValue100 === "j. (E3D) Spouse of an E3") {
            setVisible100(true)
        } else {
            setVisible100(false)
        }
    }, [selectedValue100, visible100])

    useEffect(() => {
        if (selectedValue101 === "a. (G1) Child of a G1") {
            setVisible101(true)
        } else {
            setVisible101(false)
        }
    }, [selectedValue101, visible101])

    useEffect(() => {
        if (selectedValue102 === "c. (G1) Spouse of a G1") {
            setVisible102(true)
        } else {
            setVisible102(false)
        }
    }, [selectedValue102, visible102])

    useEffect(() => {
        if (selectedValue103 === "d. (G1) Staff of principal representative") {
            setVisible103(true)
        } else {
            setVisible103(false)
        }
    }, [selectedValue103, visible103])

    useEffect(() => {
        if (selectedValue104 === "e. (G2) Child of a G2") {
            setVisible104(true)
        } else {
            setVisible104(false)
        }
    }, [selectedValue104, visible104])

    useEffect(() => {
        if (selectedValue105 === "f. (G2) Representative") {
            setVisible105(true)
        } else {
            setVisible105(false)
        }
    }, [selectedValue105, visible105])

    useEffect(() => {
        if (selectedValue106 === "g. (G2) Spouse of a G2") {
            setVisible106(true)
        } else {
            setVisible106(false)
        }
    }, [selectedValue106, visible106])

    useEffect(() => {
        if (selectedValue107 === "h. (G3) Child of a G3") {
            setVisible107(true)
        } else {
            setVisible107(false)
        }
    }, [selectedValue107, visible107])

    useEffect(() => {
        if (selectedValue108 === "i. (G3) Non-Recognized/-Member country rep") {
            setVisible108(true)
        } else {
            setVisible108(false)
        }
    }, [selectedValue108, visible108])

    useEffect(() => {
        if (selectedValue109 === "j. (G3) Spouse of a G3") {
            setVisible109(true)
        } else {
            setVisible109(false)
        }
    }, [selectedValue109, visible109])

    useEffect(() => {
        if (selectedValue110 === "k. (G4) Child of an G4") {
            setVisible110(true)
        } else {
            setVisible110(false)
        }
    }, [selectedValue110, visible110])

    useEffect(() => {
        if (selectedValue111 === "l. (G4) International org. employee") {
            setVisible111(true)
        } else {
            setVisible111(false)
        }
    }, [selectedValue111, visible111])

    useEffect(() => {
        if (selectedValue112 === "m. (G4) Spouse of a G4") {
            setVisible112(true)
        } else {
            setVisible112(false)
        }
    }, [selectedValue112, visible112])

    useEffect(() => {
        if (selectedValue113 === "n. (G5) Child of a G5") {
            setVisible113(true)
        } else {
            setVisible113(false)
        }
    }, [selectedValue113, visible113])

    useEffect(() => {
        if (selectedValue114 === "o. (G5) Personal emp. of a G1, 2, 3, or 4") {
            setVisible114(true)
        } else {
            setVisible114(false)
        }
    }, [selectedValue114, visible114])

    useEffect(() => {
        if (selectedValue115 === "p. (G5) Spouse of a G5") {
            setVisible115(true)
        } else {
            setVisible115(false)
        }
    }, [selectedValue115, visible115])

    useEffect(() => {
        if (selectedValue116 === "a. (H1B) Speciality occupation") {
            setVisible116(true)
        } else {
            setVisible116(false)
        }
    }, [selectedValue116, visible116])

    useEffect(() => {
        if (selectedValue117 === "d. (H1C) Nurse in shortage area") {
            setVisible117(true)
        } else {
            setVisible117(false)
        }
    }, [selectedValue117, visible117])

    useEffect(() => {
        if (selectedValue118 === "e. (H2A) Agricultural worker") {
            setVisible118(true)
        } else {
            setVisible118(false)
        }
    }, [selectedValue118, visible118])

    useEffect(() => {
        if (selectedValue119 === "f. (H2B) NonAgricultural worker") {
            setVisible119(true)
        } else {
            setVisible119(false)
        }
    }, [selectedValue119, visible119])

    useEffect(() => {
        if (selectedValue120 === "g. (H3) Trainee") {
            setVisible120(true)
        } else {
            setVisible120(false)
        }
    }, [selectedValue120, visible120])

    useEffect(() => {
        if (selectedValue121 === "h. (H4) Child of an H") {
            setVisible121(true)
        } else {
            setVisible121(false)
        }
    }, [selectedValue121, visible121])

    useEffect(() => {
        if (selectedValue122 === "i. (H4) Spouse of an H") {
            setVisible122(true)
        } else {
            setVisible122(false)
        }
    }, [selectedValue122, visible122])

    useEffect(() => {
        if (selectedValue123 === "a. (I) Child of an I") {
            setVisible123(true)
        } else {
            setVisible123(false)
        }
    }, [selectedValue123, visible123])

    useEffect(() => {
        if (selectedValue124 === "c. (I) Spouse of an I") {
            setVisible124(true)
        } else {
            setVisible124(false)
        }
    }, [selectedValue124, visible124])

    useEffect(() => {
        if (selectedValue125 === "b. (J2) Child of a J1") {
            setVisible125(true)
        } else {
            setVisible125(false)
        }
    }, [selectedValue125, visible125])

    useEffect(() => {
        if (selectedValue126 === "c. (J2) Spouse of a J1") {
            setVisible126(true)
        } else {
            setVisible126(false)
        }
    }, [selectedValue126, visible126])

    useEffect(() => {
        if (selectedValue127 === "a. (K1) FIANCÉ(E) OF A U.S. CITIZEN") {
            setVisible127(true)
        } else {
            setVisible127(false)
        }
    }, [selectedValue127, visible127])

    useEffect(() => {
        if (selectedValue128 === "b. (K2) CHILD OF A K1") {
            setVisible128(true)
        } else {
            setVisible128(false)
        }
    }, [selectedValue128, visible128])

    useEffect(() => {
        if (selectedValue129 === "c. (K3) SPOUSE OF A U.S. CITIZEN") {
            setVisible129(true)
        } else {
            setVisible129(false)
        }
    }, [selectedValue129, visible129])

    useEffect(() => {
        if (selectedValue130 === "d. (K4) CHILD OF A K3") {
            setVisible130(true)
        } else {
            setVisible130(false)
        }
    }, [selectedValue130, visible130])

    useEffect(() => {
        if (selectedValue131 === "a. (L1) INTRACOMPANY TRANSFEREE") {
            setVisible131(true)
        } else {
            setVisible131(false)
        }
    }, [selectedValue131, visible131])

    useEffect(() => {
        if (selectedValue132 === "b. (L2) CHILD OF A L1") {
            setVisible132(true)
        } else {
            setVisible132(false)
        }
    }, [selectedValue132, visible132])

    useEffect(() => {
        if (selectedValue133 === "c. (L2) SPOUSE OF A L1") {
            setVisible133(true)
        } else {
            setVisible133(false)
        }
    }, [selectedValue133, visible133])

    useEffect(() => {
        if (selectedValue134 === "b. (M2) CHILD OF M1") {
            setVisible134(true)
        } else {
            setVisible134(false)
        }
    }, [selectedValue134, visible134])

    useEffect(() => {
        if (selectedValue135 === "c. (M2) SPOUSE OF M1") {
            setVisible135(true)
        } else {
            setVisible135(false)
        }
    }, [selectedValue135, visible135])

    useEffect(() => {
        if (selectedValue136 === "a. (N9) CHILD OF A N8") {
            setVisible136(true)
        } else {
            setVisible136(false)
        }
    }, [selectedValue136, visible136])

    useEffect(() => {
        if (selectedValue137 === "a. (NATO1) CHILD OF NATO 1") {
            setVisible137(true)
        } else {
            setVisible137(false)
        }
    }, [selectedValue137, visible137])

    useEffect(() => {
        if (selectedValue138 === "c. (NATO1) SPOUSE OF NATO1") {
            setVisible138(true)
        } else {
            setVisible138(false)
        }
    }, [selectedValue138, visible138])

    useEffect(() => {
        if (selectedValue139 === "d. (NATO2) CHILD OF NATO2") {
            setVisible139(true)
        } else {
            setVisible139(false)
        }
    }, [selectedValue139, visible139])

    useEffect(() => {
        if (selectedValue140 === "f. (NATO2) SPOUSE OF NATO2") {
            setVisible140(true)
        } else {
            setVisible140(false)
        }
    }, [selectedValue140, visible140])

    useEffect(() => {
        if (selectedValue141 === "g. (NATO3) CHILD OF NATO3") {
            setVisible141(true)
        } else {
            setVisible141(false)
        }
    }, [selectedValue141, visible141])

    useEffect(() => {
        if (selectedValue142 === "h. (NATO3) SPOUSE OF NATO3") {
            setVisible142(true)
        } else {
            setVisible142(false)
        }
    }, [selectedValue142, visible142])

    useEffect(() => {
        if (selectedValue143 === "j. (NATO4) CHILD OF NATO4") {
            setVisible143(true)
        } else {
            setVisible143(false)
        }
    }, [selectedValue143, visible143])

    useEffect(() => {
        if (selectedValue144 === "l. (NATO4) SPOUSE OF NATO4") {
            setVisible144(true)
        } else {
            setVisible144(false)
        }
    }, [selectedValue144, visible144])

    useEffect(() => {
        if (selectedValue145 === "m. (NATO5) CHILD OF NATO5") {
            setVisible145(true)
        } else {
            setVisible145(false)
        }
    }, [selectedValue145, visible145])

    useEffect(() => {
        if (selectedValue146 === "o. (NATO5) SPOUSE OF NATO5") {
            setVisible146(true)
        } else {
            setVisible146(false)
        }
    }, [selectedValue146, visible146])

    useEffect(() => {
        if (selectedValue147 === "p. (NATO6) CHILD OF NATO6") {
            setVisible147(true)
        } else {
            setVisible147(false)
        }
    }, [selectedValue147, visible147])

    useEffect(() => {
        if (selectedValue148 === "q. (NATO6) SPOUSE OF NATO6") {
            setVisible148(true)
        } else {
            setVisible148(false)
        }
    }, [selectedValue148, visible148])

    useEffect(() => {
        if (selectedValue149 === "s. (NATO7) CHILD OF NATO7") {
            setVisible149(true)
        } else {
            setVisible149(false)
        }
    }, [selectedValue149, visible149])

    useEffect(() => {
        if (selectedValue150 === "u. (NATO7) SPOUSE OF NATO7") {
            setVisible150(true)
        } else {
            setVisible150(false)
        }
    }, [selectedValue150, visible150])

    useEffect(() => {
        if (selectedValue151 === "a. (O1) EXTRAORDINARY ABILITY") {
            setVisible151(true)
        } else {
            setVisible151(false)
        }
    }, [selectedValue151, visible151])

    useEffect(() => {
        if (selectedValue152 === "b. (O2) ALIEN ACCOMPANYING/ASSISTING") {
            setVisible152(true)
        } else {
            setVisible152(false)
        }
    }, [selectedValue152, visible152])

    useEffect(() => {
        if (selectedValue153 === "c. (O3) CHILD OF O1 OR O2") {
            setVisible153(true)
        } else {
            setVisible153(false)
        }
    }, [selectedValue153, visible153])

    useEffect(() => {
        if (selectedValue154 === "d. (O3) SPOUSE OF O1 OR O2") {
            setVisible154(true)
        } else {
            setVisible154(false)
        }
    }, [selectedValue154, visible154])

    useEffect(() => {
        if (selectedValue155 === "a. (P1) INTERNATIONALLY RECOGNIZED ALIEN") {
            setVisible155(true)
        } else {
            setVisible155(false)
        }
    }, [selectedValue155, visible155])

    useEffect(() => {
        if (selectedValue156 === "b. (P2) ARTIST/ENTERTAINER EXCHANGE PROG.") {
            setVisible156(true)
        } else {
            setVisible156(false)
        }
    }, [selectedValue156, visible156])

    useEffect(() => {
        if (selectedValue157 === "c. (P3) ARTIST/ENTERTAINER IN CULTURAL PROG.") {
            setVisible157(true)
        } else {
            setVisible157(false)
        }
    }, [selectedValue157, visible157])

    useEffect(() => {
        if (selectedValue158 === "d. (P4) CHILD OF P1, P2 OR P3") {
            setVisible158(true)
        } else {
            setVisible158(false)
        }
    }, [selectedValue158, visible158])

    useEffect(() => {
        if (selectedValue159 === "e. (P4) SPOUSE OF P1, P2 OR P3") {
            setVisible159(true)
        } else {
            setVisible159(false)
        }
    }, [selectedValue159, visible159])

    useEffect(() => {
        if (selectedValue160 === "a. (R1) RELIGIOUS WORKER") {
            setVisible160(true)
        } else {
            setVisible160(false)
        }
    }, [selectedValue160, visible160])

    useEffect(() => {
        if (selectedValue161 === "b. (R2) CHILD OF R1") {
            setVisible161(true)
        } else {
            setVisible161(false)
        }
    }, [selectedValue161, visible161])

    useEffect(() => {
        if (selectedValue162 === "c. (R2) SPOUSE OF R1") {
            setVisible162(true)
        } else {
            setVisible162(false)
        }
    }, [selectedValue162, visible162])

    useEffect(() => {
        if (selectedValue163 === "a. (T1) VICTIM OF TRAFFICKING") {
            setVisible163(true)
        } else {
            setVisible163(false)
        }
    }, [selectedValue163, visible163])

    useEffect(() => {
        if (selectedValue164 === "b. (T2) SPOUSE OF T1") {
            setVisible164(true)
        } else {
            setVisible164(false)
        }
    }, [selectedValue164, visible164])

    useEffect(() => {
        if (selectedValue165 === "c. (T3) CHILD OF T1") {
            setVisible165(true)
        } else {
            setVisible165(false)
        }
    }, [selectedValue165, visible165])

    useEffect(() => {
        if (selectedValue166 === "d. (T4) PARENT OF T1") {
            setVisible166(true)
        } else {
            setVisible166(false)
        }
    }, [selectedValue166, visible166])

    useEffect(() => {
        if (selectedValue167 === "e. (T5) SIBLING OF T1") {
            setVisible167(true)
        } else {
            setVisible167(false)
        }
    }, [selectedValue167, visible167])

    useEffect(() => {
        if (selectedValue168 === "f. (T6) ADULT/MINOR CHILD OF A DERIV BEN OF A T1") {
            setVisible168(true)
        } else {
            setVisible168(false)
        }
    }, [selectedValue168, visible168])

    useEffect(() => {
        if (selectedValue169 === "a. (TD) CHILD OF TN") {
            setVisible169(true)
        } else {
            setVisible169(false)
        }
    }, [selectedValue169, visible169])

    useEffect(() => {
        if (selectedValue170 === "b. (TD) SPOUSE OF TN") {
            setVisible170(true)
        } else {
            setVisible170(false)
        }
    }, [selectedValue170, visible170])

    useEffect(() => {
        if (selectedValue171 === "a. (U1) VICTIM OF CRIME") {
            setVisible171(true)
        } else {
            setVisible171(false)
        }
    }, [selectedValue171, visible171])

    useEffect(() => {
        if (selectedValue172 === "b. (U3) CHILD OF U1") {
            setVisible172(true)
        } else {
            setVisible172(false)
        }
    }, [selectedValue172, visible172])




    const handleSubmit = () => {
        form
            .validateFields()
            .then((values) => {
                console.log('Form values:', values);
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('Server response:', data);
                        navigate(router.FOURTH);
                    })
                    .catch((error) => {
                        console.error('An error occurred:', error);
                    });
            })
            .catch((error) => {
                console.error('Form validation failed:', error);
            });
    };
    const handlePurposeChange = (value) => {
    setPurposeValue(value);
};


    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={11} justify="space-between">
                <Col offset={8} span={16} className="PersonalInform">Travel Information</Col>
                <div className="asd">
                    <div>
                    <Col offset={2} span={21}>
                    <Row gutter={11}>
                        <Col span={21}>
                            <Row className="inp">
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="15. Purpose of Trip to the U.S." name="fifteen">
                                        <Select
                                            initialvalue=""
                                            options={purposeOfTrip()}
                                            onChange={handlePurposeChange}
                                            />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="16. Specify" name="16.Specify">
                                        <Select
                                            initialvalue=""
                                            options={specify(purposeValue)}/>
                                    </Form.Item>
                                </Col>
                                {visible77 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.3 Sponsoring Mission/Organization" name="16.3.sponsoring">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.4 Contact Surnames" name="16.4.contact">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.5 Contact Given Names" name="16.5.Contact">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.6 U.S. Address" name="16.6 U.S.">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.7 City" name="16.7 City">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.8 State/Province" name="16.8 State/Province">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.9 ZIP Code" name="16.9 ZIP Code">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.10 Phone Number" name="16.10 Phone">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible78 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="16.1 Surname">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="16.2 Name">
                                                <Input/>
                                            </Form.Item>

                                        </Col>
                                    </Row>
                                </Col>}
                                {visible79 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.3 Sponsoring Mission/Organization" name="16.3 Sponsoring1">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.4 Contact Surnames" name="16.4 Contact1">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.5 Contact Given Names" name="16.5 Contact1">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.6 U.S. Address" name="16.6 U.S.1">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.7 City" name="16.7 City1">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.8 State/Province" name="16.8 State/Province1">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.9 ZIP Code" name="16.9 ZIP Code1">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.10 Phone Number" name="16.10 Phone1">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible80 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="16.1 Surname2">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="16.2 Name2">
                                                <Input/>
                                            </Form.Item>

                                        </Col>
                                    </Row>
                                </Col>}
                                {visible81 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="16.1 Surname3">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="16.2 Name3">
                                                <Input/>
                                            </Form.Item>

                                        </Col>
                                    </Row>
                                </Col>}
                                {visible82 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.3 Sponsoring Mission/Organization" name="16.3 Sponsoring4">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.4 Contact Surnames" name="16.4 Contact4">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.5 Contact Given Names" name="16.5 Contact Given Names4">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.6 U.S. Address" name="16.6 U.S.5">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.7 City" name="16.7 City5">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.8 State/Province" name="16.8 State/Province6">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.9 ZIP Code" name="16.9 ZIP Code6">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.10 Phone Number" name="16.10 Phone Number6">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible83 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname7">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name7">
                                                <Input/>
                                            </Form.Item>

                                        </Col>
                                    </Row>
                                </Col>}
                                {visible84 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname8">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name8">
                                                <Input/>
                                            </Form.Item>

                                        </Col>
                                    </Row>
                                </Col>}
                                {visible85 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.3 Sponsoring Mission/Organization" name="Sponsoring8">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.4 Contact Surnames" name="Contact Surnames8">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.5 Contact Given Names"  name="Contact Given8">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.6 U.S. Address" name="U.S. Address8">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.7 City" name="City8">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.8 State/Province" name="State8">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.9 ZIP Code" name="ZIP Code8">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.10 Phone Number" name="Phone Number8">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible86 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname9">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name9">
                                                <Input/>
                                            </Form.Item>

                                        </Col>
                                    </Row>
                                </Col>}
                                {visible87 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="16.1 Surname9">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="16.2 Name9">
                                                <Input/>
                                            </Form.Item>

                                        </Col>
                                    </Row>
                                </Col>}
                                {visible88 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="16.1 Surname10">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="16.2 Name10">
                                                <Input/>
                                            </Form.Item>

                                        </Col>
                                    </Row>
                                </Col>}
                                {visible89 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="16.11 Application11">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible90 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="16.1 Surname11">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="16.2 Name11">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number"  name="16.11 Application Receipt/Petition Number">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible91 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="16.1 Surname12">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="16.2 Name12">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="16.11 Application Receipt12">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible92 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="16.11 Application Receipt13">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible93 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="16.1 Surname14">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name14">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application14">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible94 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.13 Has the principal Treaty Trader/Investor already been issued a visa?" name="16.13 Has the principal14">
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
                                            <Form.Item rules={[{required: true,},]} label="16.14 Surnames" name="Surnames15">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.15 Given Names" name="Given Names15">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.16.1.2.3 Principal Applicant Date of Birth" name="Principal Applicant.dateFormat">
                                                        <DatePicker/>
                                                    </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible95 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname16">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name16">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Receipt/Petition16">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible96 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname17">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name17">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Petition Number.17">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible97 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]}label="16.13 Has the principal Treaty Trader/Investor already been issued a visa?" name="16.13 Has the principal18">
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
                                            <Form.Item rules={[{required: true,},]} label="16.14 Surnames" name="Surnames18">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.15 Given Names" name="Given Names.18">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.16.1.2.3 Principal Applicant Date of Birth" name="Date of Birth.18">
                                                        <DatePicker/>
                                                    </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible98 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname19">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name19">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application19">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible99 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname20">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name20">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible100 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname21">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name21">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible101 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname22">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name22">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible102 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname23">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name23">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible103 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.3 Sponsoring Mission/Organization" name="Sponsoring23">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.4 Contact Surnames" name="Contact Surnames23">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.5 Contact Given Names" name="Contact Given Names23">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.6 U.S. Address" name="U.S. Address23">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.7 City" name="City23">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.8 State/Province" name="State/Province23">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.9 ZIP Code" name="ZIP Code23">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.10 Phone Number" name="Phone Number23">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible104 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname24">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name24">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible105 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.3 Sponsoring Mission/Organization" name="Sponsoring Mission/Organiz">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.4 Contact Surnames" name="Contact Surnames25">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.5 Contact Given Names" name="Contact Given Names25">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.6 U.S. Address" name="U.S. Address25">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.7 City" name="City25">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.8 State/Province" name="State/Province25">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.9 ZIP Code" name="ZIP Code25">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.10 Phone Number" name="Phone Number25">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible106 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname26">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name26">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible107 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname27">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name27">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible108 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.3 Sponsoring Mission/Organization" name="Sponsoring27">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.4 Contact Surnames" name="Contact Surnames27">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.5 Contact Given Names" name="Given Names27">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.6 U.S. Address" name="U.S. Address27">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.7 City" name="City27">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.8 State/Province" name="State/Province27">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="State/Province" name="State/Province27">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.10 Phone Number" name="16.10 Phone27">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible109 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname28">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name28">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible110 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname29">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name29">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible111 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.3 Sponsoring Mission/Organization" name="Sponsoring29">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.4 Contact Surnames" name="Surnames29">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.5 Contact Given Names" name="Given Names29">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.6 U.S. Address" name="Address29">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.7 City" name="City29">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.8 State/Province" name="State/Province29">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.9 ZIP Code" name="ZIP Code29">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.10 Phone Number" name="Phone Number29">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible112 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname30">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name30">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible113 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname31">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name31">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible114 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.3 Sponsoring Mission/Organization" name="Mission/Organization31">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.4 Contact Surnames" name="Contact Surnames1">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.5 Contact Given Names" name="Contact Given Names31">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.6 U.S. Address" name="U.S. Address31">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.7 City" name="31">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.8 State/Province" name="State/Province31">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.9 ZIP Code" name="ZIP Code31">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.10 Phone Number" name="Phone Number31">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible115 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname32">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name32">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible116 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application Receipt32">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible117 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application Receipt/Petition 32">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible118 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="16.11 Application32">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible119 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="16.11 Application Receipt/Petition Number.32">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible120 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Receipt/Petition Number33">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible121 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname34">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name34">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application Receipt/Petition Number35">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible122 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname36">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name36">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application Receipt/Petit36">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible123 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname37">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name37">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible124 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname38">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name38">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible125 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname39">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name39">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible126 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname40">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name40">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible127 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application Receipt40">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible128 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname41">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name41">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application41">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible129 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application42">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible130 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname43">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name43">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application43">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible131 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application44">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible132 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname45">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name45">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application45">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible133 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname46">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name46">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application46">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible134 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname47">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name47">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible135 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname48">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name48">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible136 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname49">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name49">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible137 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname50">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name50">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible138 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname51">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name51">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible139 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname52">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name52">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible140 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname53">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name53">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible141 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname54">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name54">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible142 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname55">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name55">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible143 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname56">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name56">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible144 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname57">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name57">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible145 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname58">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name58">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible146 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname59">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name59">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible147 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname60">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name60">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible148 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname61">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name62">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible149 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname63">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name63">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible150 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname64">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name64">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible151 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                        <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application64">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible152 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application65">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible153 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname66">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name66">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application66">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible154 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname67">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name67">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application67">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible155 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                        <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application68">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible156 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                        <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application68">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible157 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                        <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application69">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible158 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname70">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name70">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application70">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible159 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname71">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name71">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application71">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible160 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                        <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application72">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible161 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname73">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name73">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application73">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible162 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname74">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name74">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application74">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible163 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                        <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application75">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible164 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname76">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name76">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application76">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible165 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname77">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name77">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application77">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible166 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname78">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name78">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application78">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible167 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname79">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name79">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application79">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible168 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname80">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name80">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application80">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible169 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname81">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name81">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible170 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname82">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name82">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible171 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                        <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application82">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible172 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Form.Item rules={[{required: true,},]} label="16.1 Surname" name="Surname83">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.2 Name" name="Name83">
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item rules={[{required: true,},]} label="16.11 Application Receipt/Petition Number" name="Application83">
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>}



                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="17. Have you made specific travel plans?" name="travel-plans">
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
                                {visible14 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.1.2.3 Intended Date of Arrival" name="17.1.2.3select6">
                                                    <DatePicker/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={20}>
                                                <Form.Item  label="17.4.5 Intended Length of Stay in U.S." name="select7">
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
                                                <Form.Item rules={[{required: true,},]} label="17.17 Street Address" name="17.17 Street Address">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Form.Item rules={[{required: true,},]} label="17.18 City" name="17.18 city">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Form.Item rules={[{required: true,},]}
                                                    label="17.19 State/Province" name="17.19 State.province">
                                                    <Select
                                                        initialvalue=""
                                                        options={province()}/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Form.Item rules={[{required: true,},]} label="17.20 Postal Zone/ZIP Code" name="17.20 Postal">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col>}
                                {visible15 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.6.7.8 Date of Arrival in U.S." name="17.6.7.8arrivalDate">
                                                    <DatePicker/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.9 Arrival Flight (if known)" name="17.9 Arrival-Flight">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.10 Arrival City" name="17.10 Arrival.City">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.11.12.13 Date of Departure from U.S." name="17.11.12.13 Date.Departure">
                                                    <DatePicker/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.14 Departure Flight (if known)" name="Departure_Flight">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.15 Departure City" name="17.15 Departure.City">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]}
                                                    label="17.16 Provide the locations you plan to visit in the U.S.:"
                                                    name="visitPlan">
                                                    <textarea id="textar17" name="textar17" rows="6" cols="50"></textarea>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.17 Street Address" name="strAdd">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.18 City" name="depCity">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]}
                                                    label="17.19 State/Province" name="17.19-province">
                                                    <Select
                                                        initialvalue=""
                                                        options={province()}/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="17.20 Postal Zone/ZIP Code" name="postal17.20">
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col>}
                                <Col span={24}>
                                    <Form.Item rules={[{required: true,},]} label="18. Person/Entity Paying for Your Trip" name="18. Person/Entity.">
                                        <Select
                                            initialvalue=""
                                            options={personPay()}/>
                                    </Form.Item>
                                </Col>
                                {visible16 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Col offset={2} span={22}>
                                                <Form.Item  label="18.1 Surnames of Person Paying for Trip" name="18.1.surnameOfPerson" rules={[{required: true,},]}>
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item label="18.2 Given Names of Person Paying for Trip" name="18.2-givenNameOfPerson" rules={[{required: true,},]}>
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item label="18.3 Telephone Number" name="telephoneNum." rules={[{required: true,},]}>
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item type="email" label="18.4 Email Address" name="email--Address" rules={[{required: true,},]}>
                                                    <Input type="email"/>
                                                </Form.Item>
                                                <Form.Item rules={[{required: true,},]} label="18.5 Relationship-to-You" name="relationship">
                                                    <Select
                                                        initialvalue=""
                                                        options={relationship()}/>
                                                </Form.Item>
                                                <Form.Item rules={[{required: true,},]}
                                                    label="19. Is the address of the party paying for your trip the same as your Home or Mailing Address?"
                                                    name="address-Is-Same">
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
                                {visible17 && <Col span={24}>
                                    <Row>
                                        <Col offset={2} span={22}>
                                            <Col offset={2} span={22}>
                                                <Form.Item rules={[{required: true,},]} label="20. Street Address" name="street..Address">
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item rules={[{required: true,},]} label="20.1 City" name="city.">
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item rules={[{required: true,},]} label="20.2 State/Province" name="provinceOrState">
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item rules={[{required: true,},]} label="20.3 Postal Zone/ZIP Code" name="postal.Code">
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item rules={[{required: true,},]}
                                                    label="20.4 Country/Region" name="country&Region">
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
                    </div>
                </div>
                <Col className="buttons" offset={6} span={18}>
                    <Form.Item label=" ">
                        <Button type="primary" onClick={() => navigate(router.SECOND)}>
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
