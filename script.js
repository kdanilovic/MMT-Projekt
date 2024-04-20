document.getElementById('slika_pocetna1').addEventListener('click', function() {
    osoba2.setAttribute('hidden', true);
    
    if (osoba1.hasAttribute('hidden')) {
        osoba1.removeAttribute('hidden');
        slika_pocetna1.classList.remove('grayscale');
        slika_pocetna2.classList.add('grayscale');
    } else {
        osoba1.setAttribute('hidden', true);
        slika_pocetna2.classList.remove('grayscale');
    
    
    }
    
    

});


document.getElementById('slika_pocetna2').addEventListener('click', function() {
    osoba1.setAttribute('hidden', true);
    if (osoba2.hasAttribute('hidden')) {
        osoba2.removeAttribute('hidden');
        slika_pocetna2.classList.remove('grayscale');
        slika_pocetna1.classList.add('grayscale');
    } else {
        osoba2.setAttribute('hidden', true);
        slika_pocetna1.classList.remove('grayscale');
    }
    
    
    
});

document.getElementById('playgumb1').addEventListener('click', function() {
   
    
    if(audioplayer1.hasAttribute('hidden')){
        audioplayer1.removeAttribute('hidden');
    }
    else{
        audioplayer1.setAttribute('hidden',true);
    }
});

document.getElementById('playgumb2').addEventListener('click', function() {
   
    
    if(audioplayer2.hasAttribute('hidden')){
        audioplayer2.removeAttribute('hidden');
    }
    else{
        audioplayer2.setAttribute('hidden',true);
    }
});



document.getElementById('ostali_studenti').addEventListener('click', function() {
    if(students.hasAttribute('hidden')){
        students.removeAttribute('hidden');
        ostali_studenti.setAttribute('hidden',true);
    }
    else{
        students.setAttribute('hidden',true);
        ostali_studenti.removeAttribute('hidden');
    }
    
});

