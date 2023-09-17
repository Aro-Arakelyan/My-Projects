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
export let specify = () => {
    let object = []
    let specifies = ["a. (K1) FIANCÉ(E) OF A U.S. CITIZEN", "b. (K2) CHILD OF A K1", "c. (K3) SPOUSE OF A U.S. CITIZEN", "d. (K4) CHILD OF A K3"]
    for(let i = 0; i < specifies.length; i++) {
        object.push({label: specifies[i], value: specifies[i]})
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