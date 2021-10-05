export const fetchJSON = (url, setState) => {
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            setState(json)
        })
}