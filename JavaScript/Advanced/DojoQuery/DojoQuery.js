(function(){

function $Dojo(id){
    return document.getElementById(id);
}

$Dojo.addEventListener('click', onClick);
$Dojo.addEventListener('mouseover', onHover);
$Dojo.addEventListener('mouseout', offHover);

function onClick(){
    console.log("The button was clicked!");
}

function onHover(){
    console.log("The button was hovered on!");
}

function offHover(){
    console.log("The button was hovered off!");
}

}());

// $Dojo("test").click(function() { console.log("The button was clicked!") });
// $Dojo("test").hover(function() { console.log("The button was hovered on!") }, function() { console.log("The button was hovered off!") });
