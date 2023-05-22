var container = document.getElementById('cellContainer');
function createCube () {
    if (document.getElementsByClassName('cube').length < 16) {
        var x = parseInt(4 * Math.random());
        var y = parseInt(4 * Math.random());
        while (getCube(x, y)) {
            x = parseInt(4 * Math.random());
            y = parseInt(4 * Math.random());
        }
        var cube = document.createElement('div');
        cube.className = 'cube';
        var too = Math.round(Math.random()) * 2 + 2;
        cube.innerHTML = too;
        cube.x = x;
        cube.y = y;
        cube.style.left = 10 + 70 * cube.x +'px';
        cube.style.top = 10 + 70 * cube.y +'px';
        cube.style.backgroundColor = 'rgb('+(255 - too)+','+(255 - 2 * too)+',0)'
        container.appendChild(cube);
    } else {
        if(checkGameOver()) {
            alert('Game Over!!!')
        }
    }
}
function getCube(x, y) {
    var cubes = document.getElementsByClassName('cube');
    for (var i in cubes) {
        if (cubes[i].x === x && cubes[i].y === y){
            return cubes[i];
        }
    }
    return null;
}
document.addEventListener('keydown', function(e){
    switch(e.code){
        case 'ArrowLeft':
            left();
            createCube();
            break;
        case 'ArrowUp':
            up();
            createCube();
            break;
        case 'ArrowRight':
            right();
            createCube();
            break;
        case 'ArrowDown':
            down();
            createCube();
            break;
    }
});
function left () {
    for(var y = 0; y < 4; y++) {
        for (var x = 0; x < 4; x++) {
            var cube = getCube(x, y);
            if (cube) {
                for (var x2 = x + 1; x2 < 4; x2++) {
                    var cube2 = getCube(x2, y);
                    if (cube2) {
                        if (cube.innerHTML === cube2.innerHTML) {
                            var too = parseInt(cube.innerHTML) + parseInt(cube2.innerHTML);
                            cube.innerHTML = too;
                            cube.style.backgroundColor = 'rgb('+(255 - too)+','+(255 - 4 * too)+',0)'
                            container.removeChild(cube2);
                        }
                    }
                }
            }
        }
    }
    for(var y = 0; y < 4; y++) {
        var emptyX = 0;
        for (var x = 0; x < 4; x++) {
            var cube = getCube(x, y);
            if (cube) {
                cube.x = emptyX;
                cube.style.left = 10 + 70 * cube.x +'px';
                emptyX++;
            }
        }
    }
}
function right () {
    for(var y = 0; y < 4; y++) {
        for (var x = 3; x >= 0; x--) {
            var cube = getCube(x, y);
            if (cube) {
                for (var x2 = x - 1; x2 >= 0; x2--) {
                    var cube2 = getCube(x2, y);
                    if (cube2) {
                        if (cube.innerHTML === cube2.innerHTML) {
                            var too = parseInt(cube.innerHTML) + parseInt(cube2.innerHTML);
                            cube.innerHTML = too;
                            cube.style.backgroundColor = 'rgb('+(255 - too)+','+(255 - 4 * too)+',0)'
                            container.removeChild(cube2);
                        }
                    }
                }
            }
        }
    }
    for(var y = 0; y < 4; y++) {
        var emptyX = 3;
        for (var x = 3; x >= 0; x--) {
            var cube = getCube(x, y);
            if (cube) {
                cube.x = emptyX;
                cube.style.left = 10 + 70 * cube.x +'px';
                emptyX--;
            }
        }
    }
}
function up () {
    for(var x = 0; x < 4; x++) {
        for (var y = 0; y < 4; y++) {
            var cube = getCube(x, y);
            if (cube) {
                for (var y2 = y + 1; y2 < 4; y2++) {
                    var cube2 = getCube(x, y2);
                    if (cube2) {
                        if (cube.innerHTML === cube2.innerHTML) {
                            var too = parseInt(cube.innerHTML) + parseInt(cube2.innerHTML);
                            cube.innerHTML = too;
                            cube.style.backgroundColor = 'rgb('+(255 - too)+','+(255 - 4 * too)+',0)'
                            container.removeChild(cube2);
                        }
                    }
                }
            }
        }
    }
    for(var x = 0; x < 4; x++) {
        var emptyY = 0;
        for (var y = 0; y < 4; y++) {
            var cube = getCube(x, y);
            if (cube) {
                cube.y = emptyY;
                cube.style.top = 10 + 70 * cube.y +'px';
                emptyY++;
            }
        }
    }
}
function down () {
    for(var x = 0; x < 4; x++) {
        for (var y = 3; y >= 0; y--) {
            var cube = getCube(x, y);
            if (cube) {
                for (var y2 = y - 1; y2 >= 0; y2--) {
                    var cube2 = getCube(x, y2);
                    if (cube2) {
                        if (cube.innerHTML === cube2.innerHTML) {
                            var too = parseInt(cube.innerHTML) + parseInt(cube2.innerHTML);
                            cube.innerHTML = too;
                            cube.style.backgroundColor = 'rgb('+(255 - too)+','+(255 - 4 * too)+',0)'
                            container.removeChild(cube2);
                        }
                    }
                }
            }
        }
    }
    for(var x = 0; x < 4; x++) {
        var emptyY = 3;
        for (var y = 3; y >= 0; y--) {
            var cube = getCube(x, y);
            if (cube) {
                cube.y = emptyY;
                cube.style.top = 10 + 70 * cube.y +'px';
                emptyY--;
            }
        }
    }
}
function checkGameOver () {
    if (document.getElementsByClassName('cube').length === 16) {
        for(var y = 0; y < 4; y++) {
            for(var x = 0; x < 3; x++) {
                var cube = getCube(x, y);
                var cube2 = getCube(x + 1, y);
                if (cube.innerHTML === cube2.innerHTML) {
                    return false;
                }
            }
        }
        for(var x = 0; x < 4; x++) {
            for(var y = 0; y < 3; y++) {
                var cube = getCube(x, y);
                var cube2 = getCube(x, y + 1);
                if (cube.innerHTML === cube2.innerHTML) {
                    return false;
                }
            }
        }
        return true;
    } else {
        return false;
    }
}
createCube();
createCube();