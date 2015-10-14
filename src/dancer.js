var makeDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left); 
  this.timeBetweenSteps = timeBetweenSteps; 
};

makeDancer.prototype.step = function(){
  setTimeout(function(){return;}, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top, 
    left: left
  }; 
  this.$node.css(styleSettings); 
};
