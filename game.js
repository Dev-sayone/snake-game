function init(){
    var canvas = document.getElementById("mycanvas");
    w = canvas.width = 1000;
    h = canvas.height = 1000;
    pen = canvas.getContext('2d');
    
    snake = {
        init_len: 3,
        color:"purple",
        cells: [],
        direction :"right",

        createSnake: function(){
            for(var i = this.init_len; i>=0; i--){
                this.cells.push({x:i,y:0});
            }

        },

    }
}

function draw(){
    // 
}