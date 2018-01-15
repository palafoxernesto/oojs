function onReady(){
    console.log('Hello chapter 3')
    var clock2 = new Clock('clock2', -360, 'Mexico');
    var clock2 = new Clock('clock', +120, 'Russia');
    
 }
 
function Clock(id, offset, label) {

    offset = offset || 0;
    label = label || 'aa';
    this.label = label;
    var d = new Date();
    this.offset = (offset + d.getTimezoneOffset())*60*1000;
    this.id = id

    var that = this;
    setInterval(function() {
        that.updateClock()}, 1000);
    this.updateClock();
}

Clock.prototype.updateClock = function() {
    var date = new Date();
    date = new Date(this.offset + date.getTime());
    var clock = document.getElementById(this.id);
    clock.innerHTML = this.formatDigits(date.getHours()) +
     ":" + this.formatDigits(date.getMinutes()) + 
     ":" + this.formatDigits(date.getSeconds()) +
     " " + this.label;
}

Clock.prototype.formatDigits = function(val){
    if(val < 10) val = "0" + val;
    return val
}


 
 window.onload = onReady;