function sortStringWithLength(s) {
    const stringArr = s.split(" ");
    stringArr.sort((a, b) => a.length - b.length);
    return stringArr.join(" ");
}

sortStringWithLength("a aa b bb")