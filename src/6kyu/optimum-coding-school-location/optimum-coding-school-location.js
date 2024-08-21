const getDistance = (student, location) => {
    const getAxisDistance = (studentAxis, locationAxis) => Math.abs(locationAxis - studentAxis);
    return getAxisDistance(student[0], location.x) + getAxisDistance(student[1], location.y); 
}

const optimumLocation = (students = [[3,7],[2,2],[14,1]], locations = [{id: 1, x: 3, y: 4}, {id: 2, x: 8, y: 2}]) => {
    const maxValue = Number.MAX_VALUE;
    let nearestLocation = {
        location: {id: maxValue, x: maxValue, y: maxValue},
        distance: Number.MAX_VALUE
    };

    locations.forEach(location => {
        let distance = 0;
        students.forEach(student => {
            distance += getDistance(student, location);
        })
        if(distance < nearestLocation.distance)
            nearestLocation = {location, distance};
    });
    const {location} = nearestLocation;
    return `The best location is number ${location.id} with the coordinates x = ${location.x} and y = ${location.y}`
}

console.log(optimumLocation());