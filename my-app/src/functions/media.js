export let mediaType = () => {
    let name = []
    const mediaTypes = [
        "ASK.FM",
        "DOUBAN",
        "FACEBOOK",
        "FLICKR",
        "GOOGLE+",
        "INSTAGRAM",
        "LINKEDIN",
        "MYSPACE",
        "PINTEREST",
        "QZONE(QQ)",
        "REDDIT",
        "SINA WEIBO",
        "TENCENT WEIBO",
        "TUMBLR",
        "TWITTER",
        "TWOO",
        "VINE",
        "VKONTAKTE (VK)",
        "YOUKU",
        "YOUTUBE",
        "NONE"
    ];
    for(let i = 0; i < mediaTypes.length; i++) {
        name.push({label: mediaTypes[i], value: mediaTypes[i]})
    }
    return name;
}