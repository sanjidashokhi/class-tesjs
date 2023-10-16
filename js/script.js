// let arr = [
//     {
//         name: 'sanjidans',
//         age: '25',
//         address: 'savar',
//     },
//     {
//         name: 'sanjidaps',
//         age: '25',
//         address: 'savar',
//     },
//     {
//         name: 'sanjidabm',
//         age: '25',
//         address: 'savar',
//     },
// ]

// console.log(arr) 


// let array = [10, 20,30,40,50]

// array.map (function(name){
//     console.log(name);

// })
$("#addcolor").click(function(){
    $(".box").addClass("box_two");
});

$("#removecolor").click(function(){
    $(".box").removeClass("box_two");
});

$("#addremovecolor").click(function(){
    $(".box").toggleClass("box_two");
});
$("#hide").click(function(){
    $(".box").hide(2000);
});
$("#show").click(function(){
    $(".box").show(2000);
});
$("#hideshow").click(function(){
    $(".box").toggle(2000);
});
$("#slideup").click(function(){
    $(".box").slideUp(2000);
});
$("#sliddown").click(function(){
    $(".box").slideDown(2000);
});

$("#slidupdown").click(function(){
    $(".box").toggle(2000);
});
