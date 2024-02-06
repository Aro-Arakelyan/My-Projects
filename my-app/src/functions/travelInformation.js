export let purposeOfTrip = () => {
    let purpose = []
    const purposeOfTrip = [
        "_A_Foreign_government_official",
        "_B_Temporary_business_pleasure_visitor",
        "_C_Alien_in_transit",
        "_CW_E2C_CNMI_worker_or_investor",
        "_D_Crewmember",
        "_E_Treaty_trader_or_investor",
        "_F_Academic_or_language_student",
        "_G_International_organization_Rep._Emp.",
        "_H_Temporary_worker",
        "_I_Foreign_media_representative",
        "_J_Exchange_visitor",
        "_K_Fiance_or_spouse_of_a_U.S._citizen",
        "_L_Intracompany_transferee",
        "_M_Vocational_Nonacademic_student",
        "_N_Other",
        "_NATO_Nato_staff",
        "_O_Alien_with_extraordinary_ability",
        "_P_Internatioanly_recognized_alien",
        "_Q_Cultural_exchange_visitor",
        "_R_Religious_worker",
        "_S_Informant_or_witness",
        "_T_Victim_of_trafficking",
        "_TD_TN_Nafta_professional",
        "_U_Victim_of_criminal_activity",
        "_PARCIS_Parole_beneficiary"
        ];
    for(let i = 0; i < purposeOfTrip.length; i++) {
        purpose.push({label: purposeOfTrip[i], value: purposeOfTrip[i]})
    }
    return purpose;
}

export let specify = (purposeValue) => {
    let object = []
    switch (purposeValue) {
        case "_A_Foreign_government_official":
            object = [
                { label: "a. (A1) Ambassador or public minister", value: "a. (A1) Ambassador or public minister" },
                { label: "b. (A1) Child of AN A1", value: "b. (A1) Child of AN A1" },
                { label: "c. (A1) Career diplomat/Consular officer", value: "c. (A1) Career diplomat/Consular officer" },
                { label: "d. (A1) Spouse of AN A1", value: "d. (A1) Spouse of AN A1" },
                { label: "e. (A2) Child of AN A2", value: "e. (A2) Child of AN A2" },
                { label: "f. (A2) Foreign official/Employee", value: "f. (A2) Foreign official/Employee" },
                { label: "g. (A2) Spouse of AN A2", value: "g. (A2) Spouse of AN A2" },
                { label: "h. (A3) Child of AN A3", value: "h. (A3) Child of AN A3" },
                { label: "i. (A3) Personal emp. Of AN A1 or A2", value: "i. (A3) Personal emp. Of AN A1 or A2" },
                { label: "j. (A3) Spouse of AN A3", value: "j. (A3) Spouse of AN A3" }
            ];
            break;
        case "_B_Temporary_business_pleasure_visitor":
            object = [
                { label: "a. (B1/B2) Business and tourism (Temporary visitor)", value: "a. (B1/B2) Business and tourism (Temporary visitor)" },
                { label: "b. (B1) Business/Conference", value: "b. (B1) Business/Conference" },
                { label: "c. (B2) Tourism/Medical treatment", value: "c. (B2) Tourism/Medical treatment" },
            ];
            break;
        case "_C_Alien_in_transit":
            object = [
                { label: "a. (C1/D) Crewmember in transit", value: "a. (C1/D) Crewmember in transit" },
                { label: "b. (C1) Transit", value: "b. (C1) Transit" },
                { label: "c. (C2) Transit to U.N. headquarters", value: "c. (C2) Transit to U.N. headquarters" },
                { label: "d. (C3) Child of a C3", value: "d. (C3) Child of a C3" },
                { label: "e. (C3) Personal emp. Of a C3", value: "e. (C3) Personal emp. Of a C3" },
                { label: "f. (C3) Foreign official in transit", value: "f. (C3) Foreign official in transit" },
                { label: "g. (C3) Spouse of a C3", value: "g. (C3) Spouse of a C3" }
            ];
            break;
        case "_CW_E2C_CNMI_worker_or_investor":
            object = [
                { label: "a. (CW1) CNMI temporary worker", value: "a. (CW1) CNMI temporary worker" },
                { label: "b. (CW2) Child of CW1", value: "b. (CW2) Child of CW1" },
                { label: "c. (CW2) Spouse of CW1", value: "c. (CW2) Spouse of CW1" },
                { label: "d. (E2C) CNMI Long term investor", value: "d. (E2C) CNMI Long term investor" },
            ];
            break;
        case "_D_Crewmember":
            object = [
                { label: "a. (D) Crewmember", value: "a. (D) Crewmember" },
                ];
            break;
        case "_E_Treaty_trader_or_investor":
            object = [
                { label: "a. (E1) Child of an E1", value: "a. (E1) Child of an E1" },
                { label: "b. (E1) Executive/mgr/essential emp", value: "b. (E1) Executive/mgr/essential emp" },
                { label: "c. (E1) Spouse of an E1", value: "c. (E1) Spouse of an E1" },
                { label: "d. (E1) Treaty trader", value: "d. (E1) Treaty trader" },
                { label: "e. (E2) Child of an E2", value: "e. (E2) Child of an E2" },
                { label: "f. (E2) Executive/mgr/essential emp", value: "f. (E2) Executive/mgr/essential emp" },
                { label: "g. (E2) Spouse of an E2", value: "g. (E2) Spouse of an E2" },
                { label: "h. (E2) Treaty trader", value: "h. (E2) Treaty trader" },
                { label: "i. (E3D) Child of an E3", value: "i. (E3D) Child of an E3" },
                { label: "j. (E3D) Spouse of an E3", value: "j. (E3D) Spouse of an E3" }
            ];
            break;
        case "_F_Academic_or_language_student":
            object = [
                { label: "#REF!", value: "#REF!" },
                ];
            break;
        case "_G_International_organization_Rep._Emp.":
            object = [
                { label: "a. (G1) Child of a G1", value: "a. (G1) Child of a G1" },
                { label: "b. (G1) Principal representative", value: "b. (G1) Principal representative" },
                { label: "c. (G1) Spouse of a G1", value: "c. (G1) Spouse of a G1" },
                { label: "d. (G1) Staff of principal representative", value: "d. (G1) Staff of principal representative" },
                { label: "e. (G2) Child of a G2", value: "e. (G2) Child of a G2" },
                { label: "f. (G2) Representative", value: "f. (G2) Representative" },
                { label: "g. (G2) Spouse of a G2", value: "g. (G2) Spouse of a G2" },
                { label: "h. (G3) Child of a G3", value: "h. (G3) Child of a G3" },
                { label: "i. (G3) Non-Recognized/-Member country rep", value: "i. (G3) Non-Recognized/-Member country rep" },
                { label: "j. (G3) Spouse of a G3", value: "j. (G3) Spouse of a G3" },
                { label: "k. (G4) Child of an G4", value: "k. (G4) Child of an G4" },
                { label: "l. (G4) International org. employee", value: "l. (G4) International org. employee" },
                { label: "m. (G4) Spouse of a G4", value: "m. (G4) Spouse of a G4" },
                { label: "n. (G5) Child of a G5", value: "n. (G5) Child of a G5" },
                { label: "o. (G5) Personal emp. of a G1, 2, 3, or 4", value: "o. (G5) Personal emp. of a G1, 2, 3, or 4" },
                { label: "p. (G5) Spouse of a G5", value: "p. (G5) Spouse of a G5" },
            ];
            break;
        case "_H_Temporary_worker":
            object = [
                { label: "a. (H1B) Speciality occupation", value: "a. (H1B) Speciality occupation" },
                { label: "b. (H1B1) Chilean Spec. occupation", value: "b. (H1B1) Chilean Spec. occupation" },
                { label: "c. (H1B1) Singaporean Spec. occupation", value: "c. (H1B1) Singaporean Spec. occupation" },
                { label: "d. (H1C) Nurse in shortage area", value: "d. (H1C) Nurse in shortage area" },
                { label: "e. (H2A) Agricultural worker", value: "e. (H2A) Agricultural worker" },
                { label: "f. (H2B) NonAgricultural worker", value: "f. (H2B) NonAgricultural worker" },
                { label: "g. (H3) Trainee", value: "g. (H3) Trainee" },
                { label: "h. (H4) Child of an H", value: "h. (H4) Child of an H" },
                { label: "i. (H4) Spouse of an H", value: "i. (H4) Spouse of an H" }
            ];
            break;
        case "_I_Foreign_media_representative":
            object = [
                { label: "a. (I) Child of an I", value: "a. (I) Child of an I" },
                { label: "b. (I) Foreign media representative", value: "b. (I) Foreign media representative" },
                { label: "c. (I) Spouse of an I", value: "c. (I) Spouse of an I" }
            ];
            break;
        case "_J_Exchange_visitor":
            object = [
                { label: "a. (J1) Exchange visitor", value: "a. (J1) Exchange visitor" },
                { label: "b. (J2) Child of a J1", value: "b. (J2) Child of a J1" },
                { label: "c. (J2) Spouse of a J1", value: "c. (J2) Spouse of a J1" }
            ];
            break;
        case "_K_Fiance_or_spouse_of_a_U.S._citizen":
            object = [
                { label: "a. (K1) FIANCÉ(E) OF A U.S. CITIZEN", value: "a. (K1) FIANCÉ(E) OF A U.S. CITIZEN" },
                { label: "b. (K2) CHILD OF A K1", value: "b. (K2) CHILD OF A K1" },
                { label: "c. (K3) SPOUSE OF A U.S. CITIZEN", value: "c. (K3) SPOUSE OF A U.S. CITIZEN" },
                { label: "d. (K4) CHILD OF A K3", value: "d. (K4) CHILD OF A K3" }
            ];
            break;
        case "_L_Intracompany_transferee":
            object = [
                { label: "a. (L1) INTRACOMPANY TRANSFEREE", value: "a. (L1) INTRACOMPANY TRANSFEREE" },
                { label: "b. (L2) CHILD OF A L1", value: "b. (L2) CHILD OF A L1" },
                { label: "c. (L2) SPOUSE OF A L1", value: "c. (L2) SPOUSE OF A L1" }
            ];
            break;
        case "_M_Vocational_Nonacademic_student":
            object = [
                { label: "a. (M1) STUDENT", value: "a. (M1) STUDENT" },
                { label: "b. (M2) CHILD OF M1", value: "b. (M2) CHILD OF M1" },
                { label: "c. (M2) SPOUSE OF M1", value: "c. (M2) SPOUSE OF M1" },
                { label: "d. (M3) COMMUTER STUDENT", value: "d. (M3) COMMUTER STUDENT" }
            ];
            break;
        case "_N_Other":
            object = [
                { label: "a. (N9) CHILD OF A N8", value: "a. (N9) CHILD OF A N8" },
                { label: "b. (N8) PARENT OF CERTAIN SPECIAL IMMIGRANT", value: "b. (N8) PARENT OF CERTAIN SPECIAL IMMIGRANT" }
            ];
            break;
        case "_NATO_Nato_staff":
            object = [
                { label: "a. (NATO1) CHILD OF NATO 1", value: "a. (NATO1) CHILD OF NATO 1" },
                { label: "b. (NATO1) PRINCIPAL REPRESENTATIVE", value: "b. (NATO1) PRINCIPAL REPRESENTATIVE" },
                { label: "c. (NATO1) SPOUSE OF NATO1", value: "c. (NATO1) SPOUSE OF NATO1" },
                { label: "d. (NATO2) CHILD OF NATO2", value: "d. (NATO2) CHILD OF NATO2" },
                { label: "e. (NATO2) REPRESENTATIVE", value: "e. (NATO2) REPRESENTATIVE" },
                { label: "f. (NATO2) SPOUSE OF NATO2", value: "f. (NATO2) SPOUSE OF NATO2" },
                { label: "g. (NATO3) CHILD OF NATO3", value: "g. (NATO3) CHILD OF NATO3" },
                { label: "h. (NATO3) SPOUSE OF NATO3", value: "h. (NATO3) SPOUSE OF NATO3" },
                { label: "i. (NATO3) CLERICAL STAFF", value: "i. (NATO3) CLERICAL STAFF" },
                { label: "j. (NATO4) CHILD OF NATO4", value: "j. (NATO4) CHILD OF NATO4" },
                { label: "k. (NATO4) OFFICIAL", value: "k. (NATO4) OFFICIAL" },
                { label: "l. (NATO4) SPOUSE OF NATO4", value: "l. (NATO4) SPOUSE OF NATO4" },
                { label: "m. (NATO5) CHILD OF NATO5", value: "m. (NATO5) CHILD OF NATO5" },
                { label: "n. (NATO5) EXPERT", value: "n. (NATO5) EXPERT" },
                { label: "o. (NATO5) SPOUSE OF NATO5", value: "o. (NATO5) SPOUSE OF NATO5" },
                { label: "p. (NATO6) CHILD OF NATO6", value: "p. (NATO6) CHILD OF NATO6" },
                { label: "q. (NATO6) SPOUSE OF NATO6", value: "q. (NATO6) SPOUSE OF NATO6" },
                { label: "r. (NATO6) CIVILIAN STAFF", value: "r. (NATO6) CIVILIAN STAFF" },
                { label: "s. (NATO7) CHILD OF NATO7", value: "s. (NATO7) CHILD OF NATO7" },
                { label: "t. (NATO7) PERSONAL EMP. OF NATO1-NATO6", value: "t. (NATO7) PERSONAL EMP. OF NATO1-NATO6" },
                { label: "u. (NATO7) SPOUSE OF NATO7", value: "u. (NATO7) SPOUSE OF NATO7" }
            ];
            break;
        case "_O_Alien_with_extraordinary_ability":
            object = [
                { label: "a. (O1) EXTRAORDINARY ABILITY", value: "a. (O1) EXTRAORDINARY ABILITY" },
                { label: "b. (O2) ALIEN ACCOMPANYING/ASSISTING", value: "b. (O2) ALIEN ACCOMPANYING/ASSISTING" },
                { label: "c. (O3) CHILD OF O1 OR O2", value: "c. (O3) CHILD OF O1 OR O2" },
                { label: "d. (O3) SPOUSE OF O1 OR O2", value: "d. (O3) SPOUSE OF O1 OR O2" }
            ];
            break;
        case "_P_Internatioanly_recognized_alien":
            object = [
                { label: "a. (P1) INTERNATIONALLY RECOGNIZED ALIEN", value: "a. (P1) INTERNATIONALLY RECOGNIZED ALIEN" },
                { label: "b. (P2) ARTIST/ENTERTAINER EXCHANGE PROG.", value: "b. (P2) ARTIST/ENTERTAINER EXCHANGE PROG." },
                { label: "c. (P3) ARTIST/ENTERTAINER IN CULTURAL PROG.", value: "c. (P3) ARTIST/ENTERTAINER IN CULTURAL PROG." },
                { label: "d. (P4) CHILD OF P1, P2 OR P3", value: "d. (P4) CHILD OF P1, P2 OR P3" },
                { label: "e. (P4) SPOUSE OF P1, P2 OR P3", value: "e. (P4) SPOUSE OF P1, P2 OR P3" }
            ];
            break;
        case "_Q_Cultural_exchange_visitor":
            object = [
                { label: "a. (Q1) Cultural exchange visitor", value: "a. (Q1) Cultural exchange visitor" }
            ];
            break;
        case "_R_Religious_worker":
            object = [
                { label: "a. (R1) RELIGIOUS WORKER", value: "a. (R1) RELIGIOUS WORKER" },
                { label: "b. (R2) CHILD OF R1", value: "b. (R2) CHILD OF R1" },
                { label: "c. (R2) SPOUSE OF R1", value: "c. (R2) SPOUSE OF R1" }
            ];
            break;
        case "_S_Informant_or_witness":
            object = [
                { label: "a. (S7) FAMILY MEMBER OF AN INFORMANT", value: "a. (S7) FAMILY MEMBER OF AN INFORMANT" }
            ];
            break;
        case "_T_Victim_of_trafficking":
            object = [
                { label: "a. (T1) VICTIM OF TRAFFICKING", value: "a. (T1) VICTIM OF TRAFFICKING" },
                { label: "b. (T2) SPOUSE OF T1", value: "b. (T2) SPOUSE OF T1" },
                { label: "c. (T3) CHILD OF T1", value: "c. (T3) CHILD OF T1" },
                { label: "d. (T4) PARENT OF T1", value: "d. (T4) PARENT OF T1" },
                { label: "e. (T5) SIBLING OF T1", value: "e. (T5) SIBLING OF T1" },
                { label: "f. (T6) ADULT/MINOR CHILD OF A DERIV BEN OF A T1", value: "f. (T6) ADULT/MINOR CHILD OF A DERIV BEN OF A T1" }
            ];
            break;
        case "_TD_TN_Nafta_professional":
            object = [
                { label: "a. (TD) CHILD OF TN", value: "a. (TD) CHILD OF TN" },
                { label: "b. (TD) SPOUSE OF TN", value: "b. (TD) SPOUSE OF TN" }
            ];
            break;
        case "_U_Victim_of_criminal_activity":
            object = [
                { label: "a. (U1) VICTIM OF CRIME", value: "a. (U1) VICTIM OF CRIME" },
                { label: "b. (U3) CHILD OF U1", value: "b. (U3) CHILD OF U1" }
            ];
            break;
        case "_PARCIS_Parole_beneficiary":
            object = [
                { label: "a. (USCIS APPROVED PAROLE) PARCIS", value: "a. (USCIS APPROVED PAROLE) PARCIS" }
            ];
            break;
        default:
            object = [{ label: "", value: "" }];
            break;
    }
    return object;
}

export let lengthOfStay1 = () => {
    let number = []
    const lengthOfStays1 = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10"
    ];
    for(let i = 0; i < lengthOfStays1.length; i++) {
        number.push({label: lengthOfStays1[i], value: lengthOfStays1[i]})
    }
    return number;
}

export let lengthOfStay2 = () => {
    let length = []
    const lengthOfStays2 = [
        "a. year",
        "b. month",
        "c. week",
        "d. day",
        "e. more then 10 years",
        "f. less then 1 day",
    ];
    for(let i = 0; i < lengthOfStays2.length; i++) {
        length.push({label: lengthOfStays2[i], value: lengthOfStays2[i]})
    }
    return length;
}

export let personPay = () => {
    let object = []
    let personPays = ["a. SELF", "b. OTHER PERSON", "c. PRESENT EMPLOYER", "d. EMPLOYER IN THE U.S.", "e. OTHER COMPANY/ORGANIZATION", "f. U.S. PETITIONER"]
    for(let i = 0; i < personPays.length; i++) {
        object.push({label: personPays[i], value: personPays[i]})
    }
    return object;
}

export let relationship = () => {
    let object = []
    let relationships = ["a. CHILD", "b. PARENT", "c. SPOUSE", "d. OTHER RELATIVE", "e. FRIEND", "f. OTHER"]
    for(let i = 0; i < relationships.length; i++) {
        object.push({label: relationships[i], value: relationships[i]})
    }
    return object;
}