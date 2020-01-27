const expect = require("chai").expect;

describe.skip("Video is successfully captured when element is not visible in 'it' block", function() {
    before(function() {
        browser.url("/g4m/5");
        $("a.add-to-basket-button").waitForDisplayed();
    });
    it("adds the product to bag", function() {
        $("a.add-to-basket-button").click();
        // This below element does not exist and a video will be exported to the videos directory
        $(".does-not-exist").waitForDisplayed();
        const numberOfProductsInBasket = $$(".product-listing").length;
        expect(numberOfProductsInBasket).to.equal(1);
    });
});

describe("Video is NOT successfully captured when element is not visible in the BEFORE hook", function() {
    before(function() {
        browser.url("/g4m/5");
        //$("a.add-to-basket-button").waitForDisplayed();
        // This below element does not exist and a video will be exported to the videos directory
        $(".does-not-exist").waitForDisplayed();
    });
    it("adds the product to bag", function() {
        $("a.add-to-basket-button").click();
        $("#basket-form").waitForDisplayed();
        const numberOfProductsInBasket = $$(".product-listing").length;
        expect(numberOfProductsInBasket).to.equal(1);
    });
});