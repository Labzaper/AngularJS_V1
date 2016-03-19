(function(){
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller('GalleryController', function(){
		this.current = 0;

		this.setCurrent = function(currentValue){
			if(currentValue) {
				this.current = currentValue;				
			} else {
				this.current = 0;
			}
		};
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product) {
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		}
	});

	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: './includes/product-title.html'
		};
	});

	app.directive('productDescription', function(){
		return {
	  		restrict: 'E',
	  		templateUrl: './includes/product-description.html'
		};
	});
	app.directive('productSpecs', function(){
		return {
			restrict: 'A',
			templateUrl: './includes/product-specs.html'
		};
	});

	var gems = [
		{
			name: 'Azurite',
			description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
			shine: 8,
			price: 110.50,
			rarity: 7,
			color: '#CCC',
			faces: 14,
			images: [
				"img/gem-01.gif",
				"img/gem-02.gif",
				"img/gem-05.gif"
			],
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 3,
					body: "This product sucks",
					author: "tim@hater.com"
				}
			]
		}, {
			name: 'Bloodstone',
			description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
			shine: 9,
			price: 22.90,
			rarity: 6,
			color: '#EEE',
			faces: 12,
			images: [
				"img/gem-01.gif",
				"img/gem-05.gif",
				"img/gem-06.gif"
			],
			reviews: [
				{
					stars: 4,
					body: "Love it",
					author: "pacman@me.com"
				},
				{
					stars: 2,
					body: "That's nice",
					author: "alec@gmail.com"
				},
			]
		}, {
			name: 'Zircon',
			description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
			shine: 70,
			price: 1100,
			rarity: 2,
			color: '#000',
			faces: 6,
			images: [ ],
			reviews: [ ]
		}
	];
})();


// Wrapping our javascript in a closure is a good habit!

// var gems = [
// 		{
// 			name: 'Dodecahedron',
// 			price: 2.95,
// 			description: 'Bacon ipsum dolor amet ribeye landjaeger pancetta, pork belly ham shoulder doner pig. Spare ribs landjaeger pork chop kielbasa pancetta meatball drumstick, short ribs turkey rump shoulder short loin.',
// 			canPurchase: false,
// 			soldOut: true,
// 		},
// 		{
// 			name: 'Pentagonal Gem',
// 			price: 5.95,
// 			description: 'Chuck pork chop beef, ham leberkas beef ribs bacon. Ham hock flank tongue, kevin pork shank turkey hamburger pig boudin kielbasa. Prosciutto kielbasa porchetta, pancetta andouille salami pork pig chuck beef.',
// 			canPurchase: true,
// 			soldOut: false,
// 		}
// 	];