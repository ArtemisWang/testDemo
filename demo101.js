var mammoth = require("mammoth");
 
mammoth.convertToHtml({path: "/Users/artemis/Desktop/11.docx"})
    .then(function(result){
        var html = result.value; // The generated HTML
        var messages = result.messages; // Any messages, such as warnings during conversion
        console.log(html)
    })
    .done();