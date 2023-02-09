Feature: End to end Ecomerce validation

  application Regression

 Scenario: Ecommers product delivery
 Given I open EComerce Page
 When I add items to Cart
 And Validate the total prices
 Then select the country submit and verify Thankyou

  