//creates the spiral shape
var createSpiral = function(num){
    var angle = (360/num)+1;
    var scene = document.querySelector('a-scene');
    var y = 30;
    var r = 5;
    var spiral = document.createElement('a-entity');
    for(i = 0; i < num; i++){
        var s = document.createElement('a-sphere');
        s.setAttribute('radius', .5);
        s.setAttribute('material', 'opacity', .55);
        s.setAttribute('id', 's'+i);
        s.setAttribute('position', '0 20 0');
        s.setAttribute('dynamic-body', '');
        s.setAttribute('networked', 'template:#ball-template;');
        s.addEventListener('collide', function(e){
    
        });
        document.querySelector('a-scene').systems['boundary-checker'].registerMe(s);

        //next
        scene.appendChild(s);
    }
    scene.appendChild(spiral);
};

//a poorly made timer, based on framerate not time
AFRAME.registerComponent('spawn-balls', {
    schema: {
      score:{
        type: 'int',
        default: 0
      },
      time:{
        type:'int',
        default:0
      },
      colliding:{
        default: false
      }
    },
    tick: function () {
      var t = this.data.time;
        if (this.data.time > 200){
          this.data.time = 0;
          console.log("spawn ball");
          createSpiral(1);
        }else {
        this.data.time++;
        //console.log(t);
      }
    }
  });