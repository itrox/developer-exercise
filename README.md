# Warehouse Web Developer Exercise

-General-
 
I have decided to make the components GUI as close as possible to the spec provided. It has been tested and work in FireFox, Chrome, internet explorer, and edge. Most of the code has been written in jQuery in order to make it concise and for cross browser compatibility purposes, however the currency converter is coded in JS. The component is also responsive, using twitter bootstrap and media queries. 
 
The JSON data provided remains unedited and I have included a resources object to hold language data used by i18n. I have used the JSON data to access the images, main heading and prices for product items. I have also done this for the product names and URLs, but have combined those with method chaining. 
 
I have used jQuery to change the currency number format and symbol type on button click for each selector as this was more concise than vanilla javascript, where variable values are changed for the desired currency result. 
 
The currency converter function not only decide the currency symbol and number format but also converts sterling into with Euros or chinese Yuan. 
 
-Creativity-
 
I have added a little creativity by adding a language button at the top, allowing the user to change the language at any time. I have also added a small conversion feature so that the price reflects the exchange rate for the chosen currencies as of now 5 / 7 / 2017. I have also added modal so the language change options appear above in front of the site content.
 
-Reusable code-
 
There are four reusable code sections:
 
The resources object used by the i18next code for accessing data. This data is used for  changing the current user language for the item names, the main heading and the current language heading when selecting a language, as well as the language buttons text. 
The i18n init method is reusable to change the language of all text in the component when requested by the user.
The currencyConverter() function is reused per time a new languages is selected in order to get the currency symbol, number format and exchange rate for that languages region. 
Finally the currencylabels() function is reused to provide the elements with the new price data for each languages region. 
