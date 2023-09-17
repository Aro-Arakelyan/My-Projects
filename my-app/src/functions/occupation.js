export let Occupation = () => {
    let name = []
    const mediaTypes = [
        "a. Agriculture",
        "b. Artist/Performer",
        "c. Business",
        "d. Communications",
        "e. Computer science",
        "f. Culinary/Food Services",
        "g. Education",
        "h. Engineering",
        "i. Government",
        "j. Homemaker",
        "k. Legal profession",
        "l. Medical/Health",
        "m. Military",
        "n. Natural Science",
        "o. Not employed",
        "p. Physical sciences",
        "q. Religious vocation",
        "r. Research",
        "s. Retired",
        "t. Social science",
        "u. Student",
        "v. Other"

    ];
    for(let i = 0; i < mediaTypes.length; i++) {
        name.push({label: mediaTypes[i], value: mediaTypes[i]})
    }
    return name;
}