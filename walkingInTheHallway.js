//Day 938
//Walking in the hallway - https://www.codewars.com/kata/6368426ec94f16a1e7e137fc

function contact(hallway) {
    const array = hallway.match(/>-*</g)
    return array ? Math.floor(Math.min(...array.map(el => el.length)) / 2) : -1
}