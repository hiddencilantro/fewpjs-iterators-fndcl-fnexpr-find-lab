function superbowlWin(arrayOfRecords) {
    let foundRecord = arrayOfRecords.find(obj => obj.result === "W");
    return !!foundRecord ? foundRecord.year : undefined;
}