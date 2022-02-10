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

var filter_OS = new Set();
var filter_Brand = new Set();
var  productDisplay = [];
var productDisplay1 = [];
for(var i = 0; i < products.length; i++){
    filter_OS.add(products[i].os);
    filter_Brand.add(products[i].brand);
    // console.log(filter_OS);
    // console.log(filter_Brand);
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
            text +='<tr  id = '+products[i].id+'>\
             <td data-type = '+products[i].id+' class="row">' + products[i].id + '</td>\
             <td data-type = '+products[i].name+' class="row">' + products[i].name + '</td>\
             <td data-type = '+products[i].brand+' class="row">' + products[i].brand + '</td>\
             <td data-type = '+products[i].os+' class="row">' + products[i].os + '</td>\
             <td data-type = '+""+' class="row"> <a href="#" id = "hide1" data-r_id='+products[i].id +' > X </a> </td>\
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
        productDisplay = []
        var filterOS = $(this).val();
        for(var i = 0; i < products.length; i++){
            if(products[i].os == filterOS){
                productDisplay.push(products[i]);

            }else if(filterOS == 'none'){
                productDisplay = products;
            }
        }
        console.log(productDisplay);

        $('#brand').change(function(filterOS,productDisplay){
            productDisplay1 = []
            var filterBrand = $(this).val();
            for(var i = 0; i < productDisplay.length; i++){
                if(productDisplay[i].brand == filterBrand){
                    productDisplay1.push(productDisplay[i]);
    
                }else if(filterBrand == 'none'){
                    productDisplay1 = productDisplay;
                }else if(filterOS == 'none'){
                    productDisplay1 = products;
                }
            }
            console.log(productDisplay1);
    
            
        });

        
    });
    


        

});

