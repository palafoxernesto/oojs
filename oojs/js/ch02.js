function onReady(){
    console.log('Hello chapter 2')
    var clock2 = new Clock('clock2', -360, 'Mexico');
    var clock2 = new Clock('clock', +120, 'Russia');
    
 }
 
function Clock(id, offset, label) {

    offset = offset || 0;
    label = label || 'aa';
    this.label = label;
    var d = new Date();
    this.offset = (offset + d.getTimezoneOffset())*60*1000;
    
    this.updateClock = function() {
        var date = new Date();
        date = new Date((offset + d.getTimezoneOffset())*60*1000 + date.getTime())
        var clock = document.getElementById(id);
        clock.innerHTML = this.formatDigits(date.getHours()) +
         ":" + this.formatDigits(date.getMinutes()) + 
         ":" + this.formatDigits(date.getSeconds()) +
         " " + label;
    }

    this.formatDigits = function(val){
        if(val < 10) val = "0" + val;
        return val
    }

    var that = this;
    setInterval(function() {
        that.updateClock()}, 1000);
    this.updateClock();
}
 

 
 window.onload = onReady;