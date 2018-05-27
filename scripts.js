var quotes =[
  {
 "quote" : "“Be yourself; everyone else is already taken.”",
    "name":"- Oscar Wilde",
      
      
   
  },
             {
 "quote" : " “Step out of the history that is holding you back. Step into the new story you are willing to create.”",
               "name":"- Oprah Winfrey",
                 

             },
            {
              "quote":"“Sometimes you climb out of bed in the morning and you think, I'm not going to make it, but you laugh inside — remembering all the times you've felt that way.“",
              "name":"- Charles Bukowski",
                
            },
            {"quote":"“So many books, so little time.”",
            "name":"- Frank Zappa",
            },
             {
               "quote":" “Don’t walk in front of me… I may not follow ,don’t walk behind me… I may not lead, walk beside me… just be my friend” ",
               "name": "- Albert Camus",
               
             }
            ];
var colors=["#cc0000","#e6e600","#ffb366","gray"," #8080ff","#d98cb3"];
var displayedQuote;
var displayedColor;
function updateQuote(){
var idx
=Math.floor(Math.random()*quotes.length);
  displayedQuote = quotes[idx];
   $("#quotediv").html(quotes[idx].quote);
  $("#name").html(quotes[idx].name);

}
function updateColor(){
  var idx
=Math.floor(Math.random()*colors.length);
  displayedColor = colors[idx];
  
   $("body").css("background-color",colors[idx]);
    $("#nextquote").css("background-color",colors[idx]);
     $("#name").css("color",colors[idx]);
    $("#quotediv").css("color",colors[idx]);
 
}

$(function(){
  updateQuote();  
  
  
  $("#nextquote").click(function(){
    updateQuote();
    
 
                            })
  
})
$(function(){
  updateColor();
  $("#nextquote").click(function(){
    updateColor();
  })
})