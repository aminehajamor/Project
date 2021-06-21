var 
var kresi = null
var screenet = null
var money = null
var booket=null
var makeCohort = function (numOfBooks,numOfTables,numOfChairs,totalWealth){
	var obj={}
	obj.books = numOfBooks
	obj.tables = numOfTables
	obj.chairs = numOfChairs
	obj.totalWealth = numOfChairs
	obj.buyScreen = buyScreen
	obj.sellScreen = sellDamagedScreen
	obj.buyBook = buyBook
	obj.displayChairs= displayChairs
	obj.sellChair = sellChair
	obj.buyChair = buyChair
	obj.displayScreens = displayScreens
	obj.displayBooks = displayBooks
	obj.sellTable = sellTable
	obj.buyTable = buyTable
	obj.displayTables=displayTables
	obj.depositPerMonth= depositPerMonth
	obj.displayTotalWealth = displayTotalWealth
	x=obj.books
	y=obj.totalWealth
	return obj
}
var stock=makeCohort(10,5,6,12,3000)
var depositPerMonth = function (){
this.totalWealth + 4000
alert("money added to your vault")
}

var buyBook = function (){
	if(this.totalWealth > 20){
		this.totalWealth - 20 
		this.books++
		alert("you bought a new book")
	}
alert( "we dont have enough money") 
}
var sellBook = function(){
	if (this.book > 0){
		this.book--
		this.totalWealth - 10
		alert( "you sold an old book")
	}
	alert("we are out of books")
}

var displayChairs = function  (){
	alert("you have " + this.chairs + " chairs")
}
var sellChair = function (){
	if(this.chairs > 0){
		this.chairs--
		this.totalWealth + 50
		alert('you sold an old chair')
	}
	alert("we are out of chairs")
}

var buyChair = function (){
	if(this.totalWealth > 90){
		this.chairs++
		this.totalWealth - 90
		alert("you bought a new chair")
	}
	alert("we dont have enough money")
}
var displayScreens = function (){
	alert ('you have ' + this.screens + ' screens')
}
 var displayBooks = function () {
 	alert('you have ' + x + " books")
 }

var sellTable = function (){
	if(this.tables > 0){
		this.tables--
		this.totalWealth -40
	}
	alert("we are out of tables")
}
var buyTable = function (){
	if(totalWealth> 60){
		this.totalWealth - 60 
		this.tables++
		alert("you bought a new table")
	}
	alert("we dont have enough money")
}
var displayTables = function (){
	alert("you have " + this.tables + " tables")
}
var displayTotalWealth = function (){
	alert("you have an amount of " + y + "TND" )
}

$(".bookBuy").click(displayBooks)
$("#buy").click(displayTotalWealth)