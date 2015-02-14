      <!--var student = $("tbody").load("https://hivelab.org/static/students.json");
      console.log(student);-->
  $.get("https://hivelab.org/static/students.json", function(i,data){
  for (i=0, i<data.length, i++){

}
})

var students = $.get("https://hivelab.org/static/students.json")







    <!--  $.getJSON( "ajax/test.json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
          items.push( "<li id='" + key + "'>" + val + "</li>" );
          https://hivelab.org/static/students.json-->

          $.getJSON("https://hivelab.org/static/students.json", function(data){
          var students = [];
          $.each (data, function (key,val) {
          students.push("<td id='" + key + "'>" + val + "</td>");
          });

          $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
            }).appendTo( "body" );
});
})

})
