const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");  //  slector all los mete a todos los de la misma clase en una variable , que en realidad es un array
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#id__btn_slider_left");
const btnRight = document.querySelector("#id__btn_slider_right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];  // de aca llamo al primer elemento del array de arriba sliderSection//
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
      slider.style.transition = "none";
      slider.insertAdjacentElement('beforeend', sliderSectionFirst);
      slider.style.marginLeft = "-100%";
      
  }, 500);
 
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");  //  slector all los mete a todos los de la misma clase en una variable , que en realidad es un array
    let sliderSectionLast = sliderSection[sliderSection.length -1];  
    
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
        
    }, 500);
  
  }


    btnRight.addEventListener('click', function(){
    Next();
});

    btnLeft.addEventListener('click', function(){
    Prev();
});

 setInterval(function(){    //ejecuta una funcion cada x milisegundos//
    Next();
}, 4000);

