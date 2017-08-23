
var body = $("body");
var remove = $("span");
var list = $("#unordered");
var children = list.children();
var item = $("input:text");
var plus = $("#plus");
var trash = $("i");


item.on("keypress",function(event){
	//Determine which key was pressed 
	//If the key was ENTER, we call the addItems() function
	if(event.which == 13){
		addItems();
	}
});


//Manage when the X is clicked - Remove the li 
list.on("click", "span", function(){

	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});

//Manage whenever the '+' symbol is clicked - Call the addItem()
plus.on("click", function(){
	addItems();
});


list.on("click", "li", function(){
	if($(this).hasClass("strikeThrough")){
		$(this).removeClass("strikeThrough");
	}else $(this).addClass("strikeThrough");
});

list.on("mouseover","li",function(){
	 $(this).addClass("onHover");
});
list.on("mouseout", "li", function(){
	$(this).removeClass("onHover");
});

//We can avoid repeating ourselves by making a function to add items
function addItems(){

	//Here we append the input value to our UL as a LI - Make sure to 
	//Include the span tags and the 'i'
	list.append("<li>"+ "<span><i></i></span> "
		+item.val()+"</li>");

	//Give every new LI the Bootstrap class for styling 
	list.children().addClass("list-group-item");
	$("i").addClass("fa");
	$("i").addClass("fa-trash-o");
	//We then clear the input 
	item.val("");
}