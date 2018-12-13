(function findMyFriendName(){

    var arra = ["sakine", "hann", "mina", "suma"];
    var newArray = []
    for(var i = 0; i<arra.length; i++){
        var lengthOfCh = arra[i].length;
        if(lengthOfCh == 4){
            newArray.push(arra[i])
        }
    }
    console.log(newArray)
})();