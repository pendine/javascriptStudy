const 조건 = e => e.height >= 180;
const 친구들 = [
    {"name" : "박종선" , "height" : 173 }
    , {"name" : "연제호" , "height" : 175 }
    , {"name" : "윤성용" , "height" : 180 }
    , {"name" : "최주원" , "height" : 190 }
]

var array = [];

for( let i = 0 ; i < 친구들.length; i++ ){
    var index = ( 친구들[i].height >= 180? 친구들[i] : -1 ) ;
    if( index != -1){
        array.push(index);   
    }    
}

console.log( array );