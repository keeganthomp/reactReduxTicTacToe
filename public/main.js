function listenForPick (e) {
    let element = document.querySelector(e);
    element.addEventListener("click", this.props.playerPick)
}
