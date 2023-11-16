/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let moves = []
    const sortStudents = students.sort((a,b)=>a-b)
    const sortSeats = seats.sort((a,b)=>a-b)
    let j = 0
    let i = 0
    while(j<sortStudents.length ){
        while(i<sortSeats.length){
            if(sortSeats[i]!==sortStudents[j] && sortStudents[j] > sortSeats[i]){
            moves.push(sortStudents[j] - sortSeats[i])
            }
            else {
            moves.push(sortSeats[i] - sortStudents[j])
            }
            j++
            i++
        }
    }
    return totalMoves = moves.reduce((total,move)=>(total += move),0)
};