const dataFetcher = async function (url=null) {
    //start code
    const response = await fetch(url)
    const data = await response.json()

    return data
}
export default dataFetcher