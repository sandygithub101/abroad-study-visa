
// var waypoint = new Waypoint({
//     element: document.getElementById('px-offset-waypoint'),
//     handler: function(direction) {
//       notify('I am 20px from the top of the window')
//     },
//     offset: 20 
//   });

$(document).ready(function(){
    $('.desktop-img').waypoint(function(direction){
        $('.desktop-img').addClass('animate__animated animate__backInRight')
    },
        {
            offset: "100px"
        })

    $('.consult-img').waypoint(function(direction){
        $('.consult-img').addClass('animate__animated animate__backInLeft')
    },
        {
            offset: "20%"
        })

    $('.manage').waypoint(function(direction){
        $('.manage').addClass('animate__animated animate__backInLeft')
    },
        {
            offset: "20%"
        })

    $('.camp_img').waypoint(function(direction){
        $('.camp_img').addClass('animate__animated animate__backInRight')
    },
        {
            offset: "20%"
        })

    $('.globe_img ').waypoint(function(direction){
        $('.globe_img').addClass('animate__animated animate__backInLeft')
    },
        {
            offset: "20%"
        })

});
