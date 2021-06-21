var makeCohort = function (numOfScreens,numOfBooks,numOfTables,numOfChairs,totalWealth,numOfStudents){
	var obj={}
	obj.screens = numOfScreens
	obj.books = numOfBooks
	obj.tables = numOfTables
	obj.chairs = numOfChairs
	obj.totalWealth = totalWealth
	obj.student = numOfStudents
	obj.buyScreen = buyScreen
	obj.sellScreen = sellDamagedScreen
	obj.buyBook = buyBook
	obj.displayChairs= displayChairs
	return obj
}
var buyScreen = function (){
	if(this.totalWealth >= 1200 ){
	 this.screens++
	 this.totalWealth - 1200
	 return "you bought a new screen check your total wealth"
	}
	return "we dont have enough money"
}
var sellDamagedScreen = function (){
	if(this.screens > 0){
		this.screens -- 
		this.totalWealth + 800
		"you sold a used screen"
	}
	"we are out of screens"
}
var buyBook = function (){
	if(this.totalWealth > 20){
		this.totalWealth - 20 
		this.books++
		"you bought a new book"
	}
return "we dont have enough money" 
}

function displayChairs (){
	return this.chairs
}
