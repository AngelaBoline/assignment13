  $(function() {
	$("#chili").show();
	$("#fruit, #applesauce, #muffins, #soup, #brine, #pork").hide();

	$(".recipeone").click(function(){
		$("#chili").fadeIn(1000);
		$("#fruit, #applesauce, #muffins, #soup, #brine, #pork").hide();
  });

	$(".recipetwo").click(function(){
		$("#fruit").fadeIn(1000);
		$("#chili, #applesauce, #muffins, #soup, #brine, #pork").hide();
  });

	$(".recipethree").click(function(){
		$("#applesauce").fadeIn("slow");
		$("#chili, #fruit, #muffins, #soup, #brine, #pork").hide();
  });

	$(".recipefour").click(function(){
		$("#muffins").fadeIn("slow");
		$("#chili, #fruit, #applesauce, #soup, #brine, #pork").hide();
  });

	$(".recipefive").click(function(){
		$("#soup").fadeIn("slow");
		$("#chili, #fruit, #applesauce, #muffins, #brine, #pork").hide();
  });

	$(".recipesix").click(function(){
		$("#brine").fadeIn("slow");
		$("#chili, #fruit, #applesauce, #muffins, #soup, #pork").hide();
  });

		$(".recipeseven").click(function(){
		$("#pork").show();
		$("#chili, #fruit, #applesauce, #muffins, #soup, #brine").hide();
    });

// Animate. Scale nav items up when selected.

	$(".recipeone").click(function() {
		$(".recipeone").animate({ fontSize: "16pt" }, 1000);
		$(".recipetwo, .recipethree, .recipefour, .recipefive, .recipesix, .recipeseven").animate({ fontSize: "1em" }, 1000);
  });

	$(".recipetwo").click(function() {
		$(".recipetwo").animate({ fontSize: "16pt" }, 1000);
		$(".recipeone, .recipethree, .recipefour, .recipefive, .recipesix, .recipeseven").animate({ fontSize: "1em" }, 1000);
  });

	$(".recipethree").click(function() {
		$(".recipethree").animate({ fontSize: "16pt" }, 1000);
		$(".recipeone, .recipetwo, .recipefour, .recipefive, .recipesix, .recipeseven").animate({ fontSize: "1em" }, 1000);
  });


	$(".recipefour").click(function() {
		$(".recipefour").animate({ fontSize: "16pt" }, 1000);
		$(".recipeone, .recipetwo, .recipethree, .recipefive, .recipesix, .recipeseven").animate({ fontSize: "1em" }, 1000);
  });


	$(".recipefive").click(function() {
		$(".recipefive").animate({ fontSize: "16pt" }, 1000);
		$(".recipeone, .recipetwo, .recipethree, .recipefour, .recipesix, .recipeseven").animate({ fontSize: "1em" }, 1000);
  });


	$(".recipesix").click(function() {
		$(".recipesix").animate({ fontSize: "16pt" }, 1000);
		$(".recipeone, .recipetwo, .recipethree, .recipefour, .recipefive, .recipeseven").animate({ fontSize: "1em" }, 1000);
  });

	$(".recipeseven").click(function() {
		$(".recipeseven").animate({ fontSize: "16pt" }, 1000);
		$(".recipeone, .recipetwo, .recipethree, .recipefour, .recipefive, .recipesix").animate({ fontSize: "1em" }, 1000);
  });

// position animation

	$(".recipeone").click(function() {
		$(".block").animate({top:"135"}, 1000, "swing");
  });

  $(".recipetwo").click(function() {
    $(".block").animate({top:"210"}, 1000, "swing");
  });

  $(".recipethree").click(function() {
    $(".block").animate({top:"285"}, 1000, "swing");
  });

  $(".recipefour").click(function() {
    $(".block").animate({top:"360"}, 1000, "swing");
  });

  $(".recipefive").click(function() {
    $(".block").animate({top:"435"}, 1000, "swing");
  });

  $(".recipesix").click(function() {
    $(".block").animate({top:"510"}, 1000, "swing");
  });

  $(".recipeseven").click(function() {
    $(".block").animate({top:"615"}, 1000, "swing");
  });

	});
