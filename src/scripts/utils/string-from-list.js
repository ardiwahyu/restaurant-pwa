const extractStringFromList = (arrayObject) => {
    let listString = [];
    arrayObject.forEach(element => {
        listString.push(element['name']);
    });
    return listString;
}

export default extractStringFromList;