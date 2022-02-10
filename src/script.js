var products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];

var filter_OS = [];
var filter_Brand = [];
for(var i = 0; i < products.length; i++){
    filter_OS.push(products[i].os);
    filter_Brand.push(products[i].brand);
    console.log(filter_OS);
    console.log(filter_Brand);
}





$(document).ready(function(){

    

    

    
    var text = " <table>\
    <tr>\
    <td>ID</td>\
    <td>Name</td>\
    <td>Brand</td>\
    <td>Operating System</td>\
    <td>Remove</td>\
   </tr>";

    
for(var i =0; i<products.length;i++){
            text +='<tr class="row" id = '+products[i].id+'>\
             <td class="row">' + products[i].id + '</td>\
             <td class="row">' + products[i].name + '</td>\
             <td class="row">' + products[i].brand + '</td>\
             <td class="row">' + products[i].os + '</td>\
             <td class="row"> <a href="#" id = "hide1" data-r_id='+products[i].id +' > X </a> </td>\
         </tr>'
        }
        text+= '</table>'
        $('#container').html(text);
        $('body').on("click", '#hide1', function(){
            var row = $(this).data('r_id');
            console.log(row);
            $('#' + row).hide();
            
        });
        osDrop = '<label for os ="">Filter OS</label>\
    <select name = "os" id = "os">\
    <option value = "none">None</option>';
    
    for(var item of filter_OS){
        osDrop += '<option value = "'+item+'">' +item+ '</option>';
    }
    osDrop +=
    '</select>'

    

    $('table').before(osDrop);

    brandDrop = '<label for brand ="">Filter Brand</label>\
    <select name = "brand" id = "brand">\
    <option value = "none">None</option>';
    for(var item of filter_Brand){
        brandDrop += '<option value = "'+item+'">' +item+ '</option>';
    }
    brandDrop +=
    '</select>'

    
    $('table').before(brandDrop);

    $('#os').change(function(){
        var filterValue = $(this).val();
        var row = $('.row');
        
    });


        

});

