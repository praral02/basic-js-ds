function countCats(backyard){
    return backyard.reduce((sum,el) => (el === '^^'? sum+=1:sum+=0), 0)
}