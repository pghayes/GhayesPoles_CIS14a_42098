
	// Poles Ghayes
	// CIS-14A-42098
	// 06/08/16
	
	// Products objects
	function AddProduct1() {
		var product = { name: "Product1", price: 289, description: "Quad-Core 2.40 GHz 4GB RAM 500GB HD DVD RW." };
		AddtoCart(product);
	}

	function AddProduct2() {
		var product = { name: "Product2", price: 199, description: "Laptop Computer Core 2 Duo 40GB DVD WiFi Notebook HD." };
		AddtoCart(product);
	}

	function AddProduct3() {
		var product = { name: "Product3", price: 270, description: "Laptop Computer Core i3 4GB 320GB HDMI Bluetooth." };
		AddtoCart(product);
	}
	function AddProduct4() {
		var product = { name: "Product4", price: 320, description: "Laptop core i5 2.5GHz 4GB DVDRW WEBCAM WiFi PC HD." };
		AddtoCart(product);
	}

	function AddProduct5() {
		var product = { name: "Product5", price: 310, description: "Desktop Quad Core i5-3470 2.9GHz 240GB SSD 8GB Ram" };
		AddtoCart(product);
	}

	function AddProduct6() {
		var product = { name: "Product6", price: 299, description: "Desktop Quad Core i3 2.6GHz 300GB SSD 8GB Ram" };
		AddtoCart(product);
	}
	// retrive cart from local storage and show 
	function AddtoCart(product) {
		var str = localStorage.getItem("cart");
		var cartInfo = document.getElementById("divCart");
		var isExternal = window.location.pathname.indexOf("/items/") > 0;
		
		// check if there is any object store in cart
		// if not, create new object and convert it to string 
		// then save it to local storage
		if (str) {
			var obj = JSON.parse(str);
			var number = obj.length;
			obj[number] = product;
			str = JSON.stringify(obj);
			localStorage.setItem("cart", str);

			var cartDescription = obj.length + " items in Cart."
			
			if(isExternal == true) {
				cartInfo.innerHTML = "<a style='text-align: right;' href='../edit.html'>" + cartDescription + "</a>";	
			}
			else {
				cartInfo.innerHTML = "<a style='text-align: right;' href='edit.html'>" + cartDescription + "</a>";
			}
		}
		else {
			var obj = [];
			obj[0] = product;
			var str = JSON.stringify(obj);
			localStorage.setItem("cart", str);

			var cartDescription = "1 item in Cart."
			cartInfo.innerHTML = "<a style='text-align: right;' href='edit.html'>" + cartDescription + "</a>";
		}
	}
	
	function ShowShoppingCart() {
		
		var isExternal = window.location.pathname.indexOf("/items/") > 0;
		
		var str = localStorage.getItem("cart");
		var cartDescription = "";
		
		if(str) {
			var obj = JSON.parse(str);
			cartDescription = obj.length + " items in Cart.";
		}
		else {
			cartDescription = "0 items in Cart.";
		}
		
		var cartInfo = document.getElementById("divCart");
		
		if(isExternal == true) {
			cartInfo.innerHTML = "<a style='text-align: right;' href='../edit.html'>" + cartDescription + "</a>";	
		}
		else {
			cartInfo.innerHTML = "<a style='text-align: right;' href='edit.html'>" + cartDescription + "</a>";
		}
	}