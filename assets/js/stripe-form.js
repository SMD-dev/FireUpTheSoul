(function() {
  "use strict";

  // Quantity calculator
  $(".product-quantity input").change(function() {
    /* Calculate line price */
    var price = 29.95;
    var quantity = $("#quantity").val();
    var totalCost = (price * quantity).toFixed(2);
    console.log(totalCost);

    /* Update total price and stripe payment amount */
    $("#total").html(totalCost);
    $(".stripe-button").attr("data-amount", totalCost);
    $("#stripe-form").html(
      '<input type="hidden" name="amount" value="' +
        totalCost.replace(".", "") +
        '" /><input type="hidden" name="currency" value="usd" /><script src="https://checkout.stripe.com/checkout.js" class="stripe-button" data-key="pk_live_2ecVVzTv8KrdEbbmX3ZDzyxB" data-amount="' +
        totalCost.replace(".", "") +
        '" data-zip-code="true" data-currency="usd" data-billing-address="true" data-shipping-address="true" data-name="Fire Up the Soul" data-description="God is My Guide Compass" data-image="https://godismyguidecompass.com/images/logo2.png" data-locale="auto"></script>'
    );
  });
})();
