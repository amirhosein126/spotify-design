var divs = document.querySelectorAll(".hidden-Div");
var divr = document.querySelectorAll(".over"); // تغییر "your-div-class" به کلاس مورد نظر شما

// حلقه روی هر دیو
divs.forEach(function(div) {
    
    div.addEventListener("mouseover", function() {
        // نمایش دیو مخفی درون هر دیو
        div.querySelector(".trigger-Div").style.display = "block";
    });
    
    // حالت موس از روی دیو
    div.addEventListener("mouseout", function() {
        // پنهان کردن دیو مخفی درون هر دیو
        div.querySelector(".trigger-Div").style.display = "none";
       
    });
});



divr.forEach(function(div) {
    
    div.addEventListener("mouseover", function() {
        div.querySelector('.hover-div').style.bottom = '0';
        div.querySelector('.hover-div').style.opacity = '1';
    });
    
    // حالت موس از روی دیو
    div.addEventListener("mouseout", function() {
        div.querySelector('.hover-div').style.bottom = '-50%';
        div.querySelector('.hover-div').style.opacity = '0';
       
    });
   
});