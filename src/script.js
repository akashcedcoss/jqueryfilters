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

        display(products);

        $(".dropBrandbtn").click(function(){
            $(".brand_content").toggle("");
        })
        $(".dropOsBtn").click(function(){
            $(".os_content").toggle("");
        })
        
       
    
            $("#id_brand,#id_os").on("change", function () {
                var brand_values = $('#id_brand').find("option:selected").val();
                var os_values = $('#id_os').find("option:selected").val();
                SearchData(brand_values, os_values)
            });

        $("#id_brand,#id_os").on("change", function () {
			var brand_values = $('#id_brand').find("option:selected").val();
			var os_values = $('#id_os').find("option:selected").val();
			SearchData(brand_values, os_values)
		});

    
    
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

    // ----------------------------------------OS CLICK CHANGES --------------------------
    
    $('#os, #brand').change(function(){
        productDisplay = []
        var filterOS = $('#os').val();
        var filterBrand = $('#brand').val();
        for(var i = 0; i < products.length; i++){
            if(products[i].os == 'none' && products[i].brand == 'none'  ){
                productDisplay.push(products[i]);

            }if(filterOS == products[i].os && filterBrand == products[i].os){
                productDisplay = products;
            }
        }
        
        console.log(productDisplay);
        display(productDisplay, osDrop, brandDrop);
       


    //------------------------------BRAND CLICK CHANGES ----------------------------------------------------

   

searchProduct = '<input id="searchPro" type = "text">';
$('#container').before(searchProduct);
$('#searchPro').on("keyup", function(){
    var value = $(this).val().toLowerCase();
    $("table tr").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value)> -1);
    })
})
var productValue = $('#searchPro').val();
console.log(productValue);


    
    



        

});

function display(resArray, osDrop, brandDrop){

    var text = " <table>\
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
        }function SearchData(brand_values, os_values) {
            if (brand_values.toUpperCase() == 'ALL' && os_values.toUpperCase() == 'ALL') {
                $('#table1 tbody tr').show();
            } else {
                $('#table1 tbody tr:has(td)').each(function () {
                    var rowbrand_values = $.trim($(this).find('td:nth-child(3)').text());
                    var rowos_values = $.trim($(this).find('td:nth-child(4)').text());
                    if (brand_values.toUpperCase() != 'ALL' && os_values.toUpperCase() != 'ALL') {
                        if (rowbrand_values.toUpperCase() == brand_values.toUpperCase() && rowos_values == os_values) {
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    } else if ($(this).find('td:eq(1)').text() != '' || $(this).find('td:eq(1)').text() != '') {
                        if (brand_values != 'all') {
                            if (rowbrand_values.toUpperCase() == brand_values.toUpperCase()) {
                                $(this).show();
                            } else {
                                $(this).hide();
                            }
                        }
                        if (os_values != 'all') {
                            if (rowos_values == os_values) {
                                $(this).show();
                            }
                            else {
                                $(this).hide();
                            }
                        }
                    }
        
                });
            }
        }
        text+= '</table>'
        $('#container').html(text);
        $('table').before(osDrop);
        $('table').before(brandDrop);

}  



