let dishesToDo = [ 'large platter' ];
document.write(dishesToDo,'<br>');

//to add to the start:
dishesToDo.unshift('plate');
document.write(dishesToDo,'<br>');

//add to the start again:
dishesToDo.unshift('cereal bowl');
document.write(dishesToDo,'<br>');

dishesToDo.unshift('spoon');
document.write(dishesToDo,'<br>');

//remove from the start:
dishesToDo.shift();
document.write(dishesToDo,'<br>');
