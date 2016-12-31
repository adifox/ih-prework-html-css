var myRover = {
    position: [0,0],
    direction: 'N'
};

var myBadRover = {
    position: [2,3],
    direction: 'E'
};

var obstacles = [[2,0],[-1,-1],[-3,3]];


function goForward(rover, enemyRover) {
    var i, l, x, y;
    switch(rover.direction) {
        case 'N':
            // checking for obstacles
            for (i=0, l=obstacles.length; i<l; i++) {
                y = obstacles[i][0];
                x = obstacles[i][1];
                if (rover.position[0]+1 == y && rover.position[1] == x) {
                    console.log("I have an obstacle infront, my position is:" +
                        rover.position +" "+ rover.direction);
                    return;
                }
            }
            // checking for enemy Rover
            if (rover.position[0]+1 === enemyRover.position[0] &&
                rover.position[1] === enemyRover.position[1]) {
                console.log("I have a Rover infront");
                return;
            }
            // moving rover
            rover.position[0]++;
            // checking for grid edges
            if (rover.position[0] > 5) {
                rover.position[0] = -4;
            }
            break;
        case 'E':
            for (i=0, l=obstacles.length; i<l; i++) {
                y = obstacles[i][0];
                x = obstacles[i][1];
                if (rover.position[1]+1 == x && rover.position[0] == y) {
                    console.log("I have an obstacle infront, my position is:" +
                        rover.position +" "+ rover.direction);
                    return;
                }
            }
            if (rover.position[1]+1 === enemyRover.position[1] &&
                rover.position[0] === enemyRover.position[0]) {
                console.log("I have a Rover infront");
                return;
            }
            rover.position[1]++;
            if (rover.position[1] > 5) {
                rover.position[1] = -4;
            }
            break;
        case 'S':
            for (i=0, l=obstacles.length; i<l; i++) {
                y = obstacles[i][0];
                x = obstacles[i][1];
                if (rover.position[0]-1 == y && rover.position[1] == x) {
                    console.log("I have an obstacle infront, my position is:" +
                        rover.position +" "+ rover.direction);
                    return;
                }
            }
            if (rover.position[0]-1 === enemyRover.position[0] &&
                rover.position[1] === enemyRover.position[1]) {
                console.log("I have a Rover infront");
                return;
            }
            rover.position[0]--;
            if (rover.position[0] < -4) {
                rover.position[0] = 5;
            }
            break;
        case 'W':
            for (i=0, l=obstacles.length; i<l; i++) {
                y = obstacles[i][0];
                x = obstacles[i][1];
                if (rover.position[1]-1 == x && rover.position[0] == y) {
                    console.log("I have an obstacle infront, my position is:" +
                        rover.position +" "+ rover.direction);
                    return;
                }
            }
            if (rover.position[1]-1 === enemyRover.position[1] &&
                rover.position[0] === enemyRover.position[0]) {
                console.log("I have a Rover infront");
                return;
            }
            rover.position[1]--;
            if (rover.position[1] < -4) {
                rover.position[1] = 5;
            }
            break;
    }
}

function goBackward(rover, enemyRover) {
    switch(rover.direction) {
        case 'N':
        for (i=0, l=obstacles.length; i<l; i++) {
            y = obstacles[i][0];
            x = obstacles[i][1];
            if (rover.position[0]-1 == y && rover.position[1] == x) {
                console.log("I have an obstacle infront, my position is:" +
                    rover.position +" "+ rover.direction);
                return;
            }
        }
        if (rover.position[0]-1 === enemyRover.position[0] &&
            rover.position[1] === enemyRover.position[1]) {
            console.log("I have a Rover infront");
            return;
        }
        rover.position[0]--;
        if (rover.position[0] < -4) {
            rover.position[0] = 5;
        }
        break;
        case 'E':
        for (i=0, l=obstacles.length; i<l; i++) {
            y = obstacles[i][0];
            x = obstacles[i][1];
            if (rover.position[1]-1 == x && rover.position[0] == y) {
                console.log("I have an obstacle infront, my position is:" +
                    rover.position +" "+ rover.direction);
                return;
            }
        }
        if (rover.position[1]-1 === enemyRover.position[1] &&
            rover.position[0] === enemyRover.position[0]) {
            console.log("I have a Rover infront");
            return;
        }
        rover.position[1]--;
        if (rover.position[1] < -4) {
            rover.position[1] = 5;
        }
        break;
        case 'S':
        for (i=0, l=obstacles.length; i<l; i++) {
            y = obstacles[i][0];
            x = obstacles[i][1];
            if (rover.position[0]+1 == y && rover.position[1] == x) {
                console.log("I have an obstacle infront, my position is:" +
                    rover.position +" "+ rover.direction);
                return;
            }
        }
        if (rover.position[0]+1 === enemyRover.position[0] &&
            rover.position[1] === enemyRover.position[1]) {
            console.log("I have a Rover infront");
            return;
        }
        rover.position[0]++;
        if (rover.position[0] > 5) {
            rover.position[0] = -4;
        }
        break;
        case 'W':
        for (i=0, l=obstacles.length; i<l; i++) {
            y = obstacles[i][0];
            x = obstacles[i][1];
            if (rover.position[1]+1 == y && rover.position[0] == x) {
                console.log("I have an obstacle infront, my position is:" +
                    rover.position +" "+ rover.direction);
                return;
            }
        }
        if (rover.position[1]+1 === enemyRover.position[1] &&
            rover.position[0] === enemyRover.position[0]) {
            console.log("I have a Rover infront");
            return;
        }
        rover.position[1]++;
        if (rover.position[1] > 5) {
            rover.position[1] = -4;
        }
        break;
    }

    console.log("New Rover Position Backward: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function turnLeft(rover) {
    switch(rover.direction) {
        case 'N':
        rover.direction = 'W';
        break;
        case 'E':
        rover.direction = 'N';
        break;
        case 'S':
        rover.direction = 'E';
        break;
        case 'W':
        rover.direction = 'S';
        break;
    }

    console.log("New Rover Direction turned left: [" + rover.direction + "]");
}

function turnRight(rover) {
    switch(rover.direction) {
        case 'N':
        rover.direction = 'E';
        break;
        case 'E':
        rover.direction = 'S';
        break;
        case 'S':
        rover.direction = 'W';
        break;
        case 'W':
        rover.direction = 'N';
        break;
    }

    console.log("New Rover Direction turned right: [" + rover.direction + "]");
}

function run(commands, roverA, roverB) {
    console.log("Run: Rover initial Position: [" + roverA.position[0] + ", " + roverA.position[1] + "]");
    console.log("Run: BadRover initial Position: ["+ roverB.position[0] + ", " + roverB.position[1]+ "]");

    for (var i=0; i<commands.length; i++) {
        var command = commands[i];
        console.log('Starting command ', command);
        var currentRover = i%2 === 0? roverA : roverB;
        var enemyRover = i%2 === 0? roverB : roverA;
        switch(command) {
            case 'f':
            goForward(currentRover, enemyRover);
            break;
            case 'b':
            goBackward(currentRover, enemyRover);
            break;
            case 'l':
            turnLeft(currentRover, enemyRover);
            break;
            case 'r':
            turnRight(currentRover, enemyRover);
            break;
        }
        console.log("Rover Position: [" + roverA.position[0] + ", " + roverA.position[1] + "]");
        console.log("BadRover Position: ["+ roverB.position[0] + ", " + roverB.position[1]+ "]");
    }
    console.log("Finished, Rover Position: [" + roverA.position[0] + ", " + roverA.position[1] + "]");
    console.log("Finished BadRover Position: ["+ roverB.position[0] + ", " + roverB.position[1]+ "]");
}

run("ffffrffflfffffllff", myRover, myBadRover);
