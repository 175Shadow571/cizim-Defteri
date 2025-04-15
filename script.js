const body = document.body;
const disDiv = document.querySelector(".disDiv")

const kareSayisi = document.querySelector("#kareSayisi")
const btnOlustur = document.querySelector("#olustur")
let sayi = 16;

let sayiKutu = 1;
let sayiContainer = 1;

let kutuGenislik = sayi;
let kutuUzunluk = sayi;


function kutuOlusturucu (){
    disDiv.innerHTML = "";
    sayiKutu = 1;
    sayiContainer = 1;
    let divContainer = [];
    for(let i =0;i<kutuUzunluk;i++){      
        divContainer.push(document.createElement("div"))
        divContainer[i].classList.add(`container${i + 1}`);
        divContainer[i].style = "display:flex; ";
        disDiv.appendChild(divContainer[i])

        for(let a = 0; a < kutuGenislik;a++){
            let child = document.createElement("div");
            child.classList.add(`kutu${a+ 1}`)
            child.style = "flex:1; aspect-ratio: 1; border: 0.25px solid black"
            divContainer[i].appendChild(child)
        }
    }
}
kutuOlusturucu();




btnOlustur.addEventListener("click", function (){
    console.log(kareSayisi.value);
    if (kareSayisi.value > 100){
        uyari.textContent = "Lütfen Daha Küçük Rakam Girin! Sınır:100"
    }else{
        sayi = parseInt(kareSayisi.value)
        kutuGenislik = sayi;
        kutuUzunluk = sayi;
        
        kutuOlusturucu();
    }
  
})



disDiv.addEventListener("pointermove", function (a) {    
    a.target.style.backgroundColor = "red"
})

let uyari = document.createElement("h3")
body.appendChild(uyari)
let gecersizBasis = 1;
uyari.style = "text-align:center; color:red; font-size:40px; margin: 12px;"


function kutuBulucu(){
    let basla = "";
    return basla = document.querySelector(`.container${sayiContainer} .kutu${sayiKutu}`)
}


body.addEventListener("keydown", function (tus){

    if(tus.key == "ArrowUp"){
        sayiContainer --;
        basla = kutuBulucu();
    }else if(tus.key == "ArrowDown"){
        sayiContainer ++;
        basla = kutuBulucu();
    }else if(tus.key == "ArrowRight"){
        sayiKutu ++;
        basla = kutuBulucu()
    } else if (tus.key == "ArrowLeft"){
        sayiKutu --;
        basla = kutuBulucu()
    }else{
        if (gecersizBasis === 1){
            gecersizBasis ++;
            return uyari.textContent = "Lütfen Ok Tuş Larını Kullanın"
        }else{
            gecersizBasis ++;
            return uyari.textContent = `Geçersiz basış: ${gecersizBasis}`
 
        }
    }



    if (sayiContainer === 0){
        sayiContainer++
        return uyari.textContent = "Daha Fazla Yukarı Gidemessiniz!!"
    }else if(sayiContainer === (kutuUzunluk +1) ){
        sayiContainer--
        return uyari.textContent = "Daha Fazla Aşşağı İnemessiniz!!"
    }else if (sayiKutu === 0){
        sayiKutu++;
        return uyari.textContent = "Daha Fazla Sola Gidemezsiniz!!"
    }else if(sayiKutu === (kutuGenislik +1) ){
        sayiKutu--;
        return uyari.textContent = "Daha Fazla Sağa Gidemezsiniz!!"
    }


    sayiContainer === 0 ? sayiContainer++: null ;
    sayiContainer ===  (kutuUzunluk + 1) ? sayiContainer-- : null;
    sayiKutu === 0 ? sayiKutu++ : null;
    sayiKutu ===( kutuGenislik +1) ? sayiKutu--  : null;

    basla.style.backgroundColor = "black"

} )



