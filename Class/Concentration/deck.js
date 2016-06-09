    //Constructor for the Card class
	function Card(num){
		this.number=num;
		this.facevalue=this.face();
		this.suit=this.suit();
		this.name=this.name();
		this.picture="Cards/"+this.name+this.suit+".jpg";
	}
	Card.prototype.face=function(){
		var num=this.number%13+1;
		if(num>10)return 10;
		else if(num==1)return 11;
		return num;
	}
	//Determine the suit
	Card.prototype.suit=function(){
		if(this.number<13)return "Spades";
		else if(this.number<26)return "Diamonds";
		else if(this.number<39)return "Clubs";
		else return "Hearts";
	}
	//Determine the face value given a number
	Card.prototype.name=function(){
		switch(this.number%13){
			case 0: return "Ace";
			case 1: return "Two";
			case 2: return "Three";
			case 3: return "Four";
			case 4: return "Five";
			case 5: return "Six";
			case 6: return "Seven";
			case 7: return "Eight";
			case 8: return "Nine";
			case 9: return "Ten";
			case 10: return "Jack";
			case 11: return "Queen";
			case 12: return "King";
		}
	}
	//To String function of the Card Class
	Card.prototype.toString=function(){
		document.write("<img src="+this.picture+" />");
		document.write("<br/>Number = "+this.number);
		document.write("<br/>Name = "+this.name);
		document.write("<br/>Suit = "+this.suit);
		document.write("<br/>Face Value = "+this.facevalue);
		document.write("<br/><br/>");
	}
//Create a deck of 52 cards
	var card=new Array(52);
	for(var i=0;i<52;i++){
		card[i]=new Card(i);
	}
//Shuffle the cards
//First create an indexed array
	var idx=new Array(52);
	for(var i=0;i<idx.length;i++){
		idx[i]=i;
	}
//Now mix up the indexed array
	for(var i=0;i<idx.length;i++){
		var temp=Math.random()*51;
		temp=temp.toFixed(0);
		temp=parseInt(temp);
		//Swap positions
		var val=idx[i];
		idx[i]=idx[temp];
		idx[temp]=val;
	}
/*
//Print out the shuffled deck
	document.write("The shuffled Deck <br />");
	for(var i=0;i<idx.length;i++){
		card[idx[i]].toString();
	}
*/