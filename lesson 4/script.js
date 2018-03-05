   
    var matrix =[]
    var side = 40;
    var xotArr = [];
    var xot = 1500;
    var eatArr = [];
    var eat = 400;
    var gishArr = [];
    var gish = 100;
    var msakerArr = [];
    var msakerr =50;
    var gish = 125;
    var erk = 50;
    var bar = 50;
   
/*
    var matrix = [
    [0, 1, 0, 0, 0, 0, 2, 4, 1, 0, 0, 1, 0, 1, 1, 1, 1],
    [0, 1, 1, 0, 0, 2, 0, 2, 1, 0, 0, 1, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 3, 1, 1, 1, 1],
    [0, 1, 3, 3, 0, 1, 0, 2, 1, 3, 1, 4, 0, 2, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 4, 1, 1, 1, 1],
    [0, 1, 0, 3, 4, 1, 2, 0, 1, 0, 0, 1, 0, 3, 1, 1, 1],
    [2, 2, 2, 0, 0, 1, 0, 0, 1, 0, 3, 1, 2, 1, 1, 1, 1],
    [0, 3, 0, 0, 0, 1, 0, 0, 1, 0, 3, 4, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 4, 3, 1, 0, 1, 1, 1, 1],
    [0, 0, 1, 1, 0, 1, 2, 0, 1, 0, 2, 1, 0, 3, 1, 1, 1],
    [2, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 2, 3, 2, 1, 0, 1, 1, 1, 1],

    ]
*/

function setup() {
 
        
    for(var i = 0; i<erk ; i++ ){
        matrix.push([]);
        for (var j = 0; j<bar ; j++){
            matrix[i][j] = 0;
    }
}

var c = 0;
while (c < xot) {
    var x = Math.floor(random(0,erk));
    var y = Math.floor(random(0,bar));
    if(matrix[x][y] == 0){
       matrix[x][y] = 1;
       c++;
    }
}
var c = 0;
while (c < eat) {
    var x = Math.floor(random(0,erk));
    var y = Math.floor(random(0,bar));
    if(matrix[x][y] == 0){
       matrix[x][y] = 2;
       c++;
    }
}



var c = 0;
while (c < gish) {
    var x = Math.floor(random(0,erk));
    var y = Math.floor(random(0,bar));
    if(matrix[x][y] == 0){
       matrix[x][y] = 3;
       c++;
    }
}

var c = 0;
while (c < msakerr) {
    var x = Math.floor(random(0,erk));
    var y = Math.floor(random(0,bar));
    if(matrix[x][y] == 0){
       matrix[x][y] = 4;
       c++;
    }
}
//vor x = math.floor(random(0,erk));
 // var y = math.floor(random(0,bar));
    noStroke()
    frameRate(4);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 2) {
                var eatgrass = new Eatgrass(j, i, 2);
                eatArr.push(eatgrass);
            } else if (matrix[i][j] == 1) {
                var grass = new Grass(j, i, 1);
                xotArr.push(grass);
            } else if (matrix[i][j] == 3) {
                var gishatich = new Gishatich(j, i, 3);
                gishArr.push(gishatich);
            } else if (matrix[i][j] == 4) {
                var msaker = new Msaker(j, i, 4);
                msakerArr.push(msaker);
            
            
            }
        }
    }

}

    function draw() {
        background('#acacac');
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill("green");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("orange");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill("red");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill("white");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
                }
            }
        }



        for (var i in xotArr) {
            xotArr[i].mul();
            
        }

        for (var i in eatArr) {
            eatArr[i].eat();
            
        }

        for (var i in gishArr) {
            gishArr[i].eat();
            
        }  
        for (var i in msakerArr) {
            msakerArr[i].eat();         
    }
    }