var twawil = null
var kresi = null
var money = null
var booket=null
var makeCohort = function (numOfBooks,numOfTables,numOfChairs,totalWealth){
	var obj={}
	obj.books = numOfBooks
	obj.tables = numOfTables
	obj.chairs = numOfChairs
	obj.totalWealth = totalWealth
	obj.buyBook = buyBook
	obj.displayChairs= displayChairs
	obj.sellChair = sellChair
	obj.buyChair = buyChair
	obj.displayBooks = displayBooks
	obj.sellTable = sellTable
	obj.buyTable = buyTable
	obj.displayTables=displayTables
	obj.depositPerMonth= depositPerMonth
	obj.displayTotalWealth = displayTotalWealth
	booket=obj.books
	money=obj.totalWealth
	kresi = obj.chairs
	twawil = obj.tables
	return obj
}
var stock=makeCohort(10,5,6,12,30000)
var depositPerMonth = function (){
money + 4000
alert("money added to your vault")
}

var buyBook = function (){
	if(money > 20){
		money-= 20 
		booket++
		alert("you bought a new book")
	}
alert( "we dont have enough money") 
}
var sellBook = function(){
	if (booket > 0){
		booket--
		money-= 10
		alert( "you sold an old book")
	}
	alert("we are out of books")
}

var displayChairs = function  (){
	alert("you have " + kresi + " chairs")
}
var sellChair = function (){
	if(kresi > 0){
		kresi--
		money+= 50
		alert('you sold an old chair')
	}
	alert("we are out of chairs")
}

var buyChair = function (){
	if(money > 90){
		kresi++
		money-= 90
		alert("you bought a new chair")
	}
	alert("we dont have enough money")
}


 var displayBooks = function () {
 	alert('you have ' + booket + " books")
 }

var sellTable = function (){
	if(twawil > 0){
		twawil--
		money-= 40
	}
	alert("we are out of tables")
}
var buyTable = function (){
	if(money> 60){
		money-= 60 
		twawil++
		alert("you bought a new table")
	}
	alert("we dont have enough money")
}
var displayTables = function (){
	alert("you have " + twawil + " tables")
}
var displayTotalWealth = function (){
	alert("you have an amount of " + money + "TND" )
}

$("#buy").click(displayTotalWealth)
$(".checkChair").click(displayChairs)
$(".chairbuy").click(buyChair)
$(".chairsell").click(sellChair)
$(".checkChair").click(displayChairs)
$(".mouseBuy").click(buyTable)
$(".mouseSell").click(sellTable)
$(".checkTables").click(displayTables)
$(".bookBuy").click(buyBook)
$(".bookSell").click(sellBook)
$(".checkBook").click(displayBooks)