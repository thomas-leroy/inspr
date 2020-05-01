async function getJson(path) {
    let response = await fetch(path),
        data = await response.json();
    return data;
}

/*
    Get random element from array
    @param arrayOfStrings  : array
    @return pickedString : string
*/
function getRandomFromArray(arrayOfStrings) {
    return arrayOfStrings[Math.floor(Math.random() * arrayOfStrings.length)];
}

/*
    Get random int in range
    @param min  : int
    @param max  : int
    @return int
*/
function getRandomIntInRange(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

/*
    Format html colors to proper english
    @param colorCode  : string
    @return string
*/
function formatHtmlColorCodeToText(colorCode) {
    return colorCode.replace(/([A-Z])/g, " $1").toLowerCase().trim();
}

/*
    Format html colors to proper english
    @param colorCode  : string
    @return string
*/
function composeChord(chordsTable) {
    let notes = chordsTable.chords,
        variationType = (Math.random() >= 0.5) ? 'common' : 'sharp',
        variation = chordsTable.variations[variationType][getRandomIntInRange(0, chordsTable.variations[variationType].length)],
        selectedNote = notes[getRandomIntInRange(0, notes.length)];

    return selectedNote + variation;
    // return colorCode.replace( /([A-Z])/g, " $1" ).toLowerCase();
}