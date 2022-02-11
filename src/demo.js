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

var text = '';
var filter_OS = new Set();
var filter_Brand = new Set();
// var  productDisplay = [];
// var productDisplay1 = [];
var selectedOS = 'none1';
var selectedBrand = 'none1';
var prod_to_show = [];

for(var i = 0; i < products.length; i++){
    filter_OS.add(products[i].os);
    filter_Brand.add(products[i].brand);
}





$(document).ready(function(){

        display(products);

        $('#os, #brand').on("change", function(){
            selectedOS = $('#os').find('option:selected').val();
            selectedBrand = $('#brand').find('option:selected').val();
            console.log(selectedOS, selectedBrand);
            var a = filterProducts(selectedOS, selectedBrand);


            console.log(a);
            // display(a);
        });



    
    
        $('body').on("click", '#hide1', function(){
            var row = $(this).data('r_id');
            console.log(row);
            $('#' + row).hide();
            
        });

        searchProduct = '<input id="searchPro" type = "text">';
        $('#container').before(searchProduct);
        $('#searchPro').on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $("table tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)> -1);
    });
});
});

function display(resArray){
    text += '<div>';
    text = dropDowns();
    // text += '<input type = "text" id = "search" >';

    text += " <table>\
    <tr>\
    <td>ID</td>\
    <td>Name</td>\
    <td>Brand</td>\
    <td>Operating System</td>\
    <td>Remove</td>\
   </tr>";

    
for(var i =0; i<resArray.length;i++){
            text +='<tr  id = '+resArray[i].id+'>\
             <td data-type = '+resArray[i].id+' class="row">' + resArray[i].id + '</td>\
             <td data-type = '+resArray[i].name+' class="row">' + resArray[i].name + '</td>\
             <td data-type = '+resArray[i].brand+' class="row">' + resArray[i].brand + '</td>\
             <td data-type = '+resArray[i].os+' class="row">' + resArray[i].os + '</td>\
             <td data-type = '+""+' class="row"> <a href="#" id = "hide1" data-r_id='+resArray[i].id +' > X </a> </td>\
         </tr>'
        }
        text+= '</table></div>';
        $('#container').html(text);
        return;

}


function filterProducts(selectedOS, selectedBrand){
    prod_to_show = [];
    for (i=0; i<products.length; i++){
        if ((selectedOS == products[i].os) && (selectedBrand == products[i].brand)){
            prod_to_show.push(products[i]);
        }
        else if (selectedOS == 'none1' && selectedBrand == 'none1'){
            prod_to_show = products;
        }
        else if (selectedOS == 'none1' && selectedBrand == products[i].brand){
            prod_to_show.push(products[i]);
        }
        else if (selectedOS == products[i].os && selectedBrand == 'none1'){
            prod_to_show.push(products[i]);
        }

    }
    return prod_to_show;
}



function dropDowns(){
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
   var osDrop = '<label for os ="">Filter OS</label>\
    <select name = "os" id = "os">\
    <option value = "none1">None</option>';
    
    for(var item of filter_OS){
        osDrop += '<option value = "'+item+'">' +item+ '</option>';
    }
    osDrop +='</select>'

    var brandDrop = '<label for brand ="">Filter Brand</label>\
    <select name = "brand" id = "brand">\
    <option value = "none1">None</option>';
    for(var item of filter_Brand){
        brandDrop += '<option value = "'+item+'">' +item+ '</option>';
    }
    brandDrop +='</select>'
    


    return osDrop + brandDrop;
}



