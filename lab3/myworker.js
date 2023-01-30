this.onmessage =function(){
    var summ = 0;
    for(var i=0;i<10_000_000_000;i++){
        summ+=i;
    }
    this.postMessage(summ);
}
