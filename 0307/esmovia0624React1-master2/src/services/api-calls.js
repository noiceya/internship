
const root = "https://rickandmortyapi.com/api/"

export const bringData = async (criteria) => {

    //we fetch the data from the API......

    let rawData = await fetch(`${root + criteria}`)

    let results = await rawData.json()

    return results;
}