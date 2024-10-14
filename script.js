function newPlayer(name, marker) {
    let name = name
    let marker = marker

    let isTurn = false
    let changeTurn
}

function newLocation(x, y) {
    let x
    let y
    return { x, y }
}

function newGameBoard() {
    let boardState = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]
    const placeMarker = (markerType, location) => {
        boardState[location.Y][location.X] = markerType
    }
    return { boardState, placeMarker }
}
