


$(document).ready(function(){

            /********************************************************
             Object containing i18next language data 
            *********************************************************/

            var resources = {
                "es": {
                    "translation": {
                        "title": "Si usted gusta de esta, usted puede estar en estos",
                            "transSubHead1": "Traje de juego Woodblock",
                            "transSubHead2": "Vestido de mangas largas",
                            "transSubHead3": "Cami",
                            "transSubHead4": "Asymmetric Wrap Cami Dress",
                            "transSubHead5": "Camiseta Casual Stripe",
                             "languageHead":"IDIOMAS"
                          
                    }
                },
                    "en": {
                    "translation": {
                        "title": "If you like this, you might be into these",
                           "transSubHead1": "Woodblock Play Suit",
                            "transSubHead2": "Smock Dress",
                            "transSubHead3": "Cami",
                            "transSubHead4": "Asymmetric Wrap Cami Dress",
                            "transSubHead5": "Casual Stripe Tee",
                             "languageHead":"LANGUAGES"
                          
                    }
                },
                "zh": {
                    "translation": {
                        "title": "如果你喜歡這個，你可以進入這些",
                            "transSubHead1": "输入您的名字",
                            "transSubHead2": "服裝裙",
                            "transSubHead3": "卡米",
                            "transSubHead4": "不對稱包裝Cami連衣裙",
                            "transSubHead5": "休閒條紋三通",
                            "languageHead":"語言"
                          
                    }
                }

            };

            /********************************************************
             Reusable i18Next init method for changing language data 
            *********************************************************/

          $('.lang').click(function () {
                var lang = $(this).attr('data-lang');
                i18n.init({
                      "resStore": resources,
                    lng: lang
                }, function (t) {
                    $(document).i18n();
                });
            });
         
            /********************************************************
             Object containing fashion page data 
            *********************************************************/

            var fashionObj = {  

               "placements":[  
                  {  
                     "message":"If you like this, you might be into these",
                     "items":[  
                        {  
                           "id":"029148",
                           "name":"Woodblock Play Suit",
                           "linkURL":"http://www.warehouse.co.uk/gb/just-arrived/all/woodblock-play-suit/029148.html",
                           "imageURL":"http://demandware.edgesuite.net/aaxe_prd/on/demandware.static/-/Sites-WAREHOUSE/default/dw0f93fcd4/images/hi-res/warehouse_02914899_2.jpg",
                           "price":"46.00"
                        },
                        {  
                           "id":"0294526806",
                           "name":"Smock Dress",
                           "linkURL":"http://www.warehouse.co.uk/gb/just-arrived/all/smock-dress/0294526806.html",
                           "imageURL":"http://demandware.edgesuite.net/aaxe_prd/on/demandware.static/-/Sites-WAREHOUSE/default/dwc9d5ea05/images/hi-res/warehouse_02945268_5.jpg",
                           "price":"39.00"
                        },
                        {  
                           "id":"0297180006",
                           "name":"Cami",
                           "linkURL":"http://www.warehouse.co.uk/gb/just-arrived/all/cami/0297180006.html",
                           "imageURL":"http://demandware.edgesuite.net/aaxe_prd/on/demandware.static/-/Sites-WAREHOUSE/default/dw4b954022/images/hi-res/warehouse_02971800_2.jpg",
                           "price":"9.00"
                        },
                        {  
                           "id":"0298473606",
                           "name":"Asymmetric Wrap Cami Dress",
                           "linkURL":"http://www.warehouse.co.uk/gb/just-arrived/all/asymmetric-wrap-cami-dress/0298473606.html",
                           "imageURL":"http://demandware.edgesuite.net/aaxe_prd/on/demandware.static/-/Sites-WAREHOUSE/default/dw686fea84/images/hi-res/warehouse_02984736_2.jpg",
                           "price":"46.00"
                        },
                        {  
                           "id":"0297155306",
                           "name":"Casual Stripe Tee",
                           "linkURL":"http://www.warehouse.co.uk/gb/just-arrived/all/casual-stripe-tee/0297155306.html",
                           "imageURL":"http://demandware.edgesuite.net/aaxe_prd/on/demandware.static/-/Sites-WAREHOUSE/default/dw4609af3e/images/hi-res/warehouse_02971553_2.jpg",
                           "price":"16.00"
                        }
                     ]
                  }
               ]
            };


            /********************************************************
            Inserting images
            *********************************************************/

            $("img:eq(0)").attr("src", fashionObj.placements[0].items[0].imageURL);
            $("img:eq(1)").attr("src", fashionObj.placements[0].items[1].imageURL);
            $("img:eq(2)").attr("src", fashionObj.placements[0].items[2].imageURL);
            $("img:eq(3)").attr("src", fashionObj.placements[0].items[3].imageURL);
            $("img:eq(4)").attr("src", fashionObj.placements[0].items[4].imageURL);
  

      

            $(".heading").html(fashionObj.placements[0].message);
         
          /********************************************************
            Inserting item name and URL link
          *********************************************************/

            $(".item1").html(fashionObj.placements[0].items[0].name).attr("href", fashionObj.placements[0].items[0].linkURL);
            $(".item2").html(fashionObj.placements[0].items[1].name).attr("href", fashionObj.placements[0].items[1].linkURL);
            $(".item3").html(fashionObj.placements[0].items[2].name).attr("href", fashionObj.placements[0].items[2].linkURL);
            $(".item4").html(fashionObj.placements[0].items[3].name).attr("href", fashionObj.placements[0].items[3].linkURL);
            $(".item5").html(fashionObj.placements[0].items[4].name).attr("href", fashionObj.placements[0].items[4].linkURL);



          /********************************************************
            Changing currency sign microformats 
          *********************************************************/

            var NoFormat =  'en-GB';
            var  currencyFormat = 'GBP';

            $(".enLang").click(function(){

             NoFormat = 'en-GB' ;
             currencyFormat = 'GBP' ;
             currencylabels();
            });

            $(".zhLang").click(function(){

             NoFormat = 'ch-zh' ;
             currencyFormat = 'CNY' ;
             currencylabels();
            });

            $(".esLang").click(function(){

             NoFormat = 'en-EU' ;
             currencyFormat = 'EUR' ;
             currencylabels();
            });


          /********************************************************
           // Reuseable Currency Converter
          *********************************************************/

            // Reuseable Currency Converter
            function currencyConverter(houseMaterialCosts){

            //conditionals for each of the three currency values, for exchange rate convertion
            if (NoFormat === 'en-EU' && currencyFormat === 'EUR') var rateConvertion = houseMaterialCosts * 1.14;
            else if (NoFormat === 'ch-zh' && currencyFormat === 'CNY') var rateConvertion = houseMaterialCosts * 8.79;
            else var rateConvertion = houseMaterialCosts *  1;

            //Prepending currency value sign onto the price integer and formatting it for the currency region. 
            var currencyFormatter = new Intl.NumberFormat(NoFormat, { style: 'currency', currency: currencyFormat });
            var formattedCosts = currencyFormatter.format(rateConvertion);

            return formattedCosts;
            }



         /********************************************************
           //Reusbale currency labels 
          *********************************************************/

        
        function currencylabels(){
            //Inserting price data per item
        $(".price:eq(0)").html(currencyConverter(fashionObj.placements[0].items[0].price));
        $(".price:eq(1)").html(currencyConverter(fashionObj.placements[0].items[1].price));
        $(".price:eq(2)").html(currencyConverter(fashionObj.placements[0].items[2].price));
        $(".price:eq(3)").html(currencyConverter(fashionObj.placements[0].items[3].price));
        $(".price:eq(4)").html(currencyConverter(fashionObj.placements[0].items[4].price));

        }

        currencylabels();
          

});




