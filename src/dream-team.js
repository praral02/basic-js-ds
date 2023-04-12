function createDreamTeam(members){
    members = members.filter(el => typeof el == 'string')
    let firstLetter = members.map(el => el[0])
    firstLetter = firstLetter.sort()
    console.log(firstLetter)
}
createDreamTeam(['Oli via', 1111, 'L ily', 'Os car', true, null])
