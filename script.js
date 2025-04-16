const body = document.body;
const disDiv = document.querySelector(".disDiv")
const btnOlustur = document.querySelector("#olustur")
const container = document.querySelector(".container")
const btnRenk = document.querySelectorAll(".btnRenk")

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





let input = document.createElement("input")
let bilgilendirme = document.createElement("h3")
bilgilendirme.classList.add("animasyon")
container.appendChild(bilgilendirme)
let kontrol = false;
let kareSayisi = null;
input.classList.add("animasyon")
input.id = "input"
input.type = "text"
input.maxLength = "3"
container.appendChild(input)
bilgilendirme.textContent = "Hoş Geldiniz."
input.placeholder = "Sayı Giriniz."



btnOlustur.addEventListener("click", function (){
                   
    if(!kontrol){

        kontrol = true

        
        setTimeout(() => {
            bilgilendirme.classList.add("animasyonGirdi")
            input.classList.add("animasyonGirdi")
        },10)


    }else if(kontrol){
 
        kareSayisi = document.querySelector("#input")
        kontrol = false;

        if (kareSayisi.value > 0 && kareSayisi.value < 101){
            sayi = parseInt(kareSayisi.value)
            kutuGenislik = sayi;
            kutuUzunluk = sayi;
            kutuOlusturucu();
        }else{
            return bilgilendirme.textContent = "Lütfen Geçerli Bir Sayı Giriniz!!"
        }

    setTimeout(() => {
        bilgilendirme.classList.remove("animasyonGirdi")
        input.classList.remove("animasyonGirdi")
    },10)
    input.value = "";
    }

})





let renk = "black";
disDiv.addEventListener("mouseover", function (a) {    
    
    a.target.style.backgroundColor = renk

    if(a.target.style.opacity < "0.4"){
        a.target.style.opacity = "0.4"
    }else if (a.target.style.opacity < "0.7" ){
        a.target.style.opacity = "0.7"
    }else if (a.target.style.opacity < "1"){a.target.style.opacity = "1"}

})

let uyari = document.createElement("h3")
body.appendChild(uyari)
let gecersizBasis = 1;
uyari.style = "text-align:center; color:red; font-size:40px; margin: 12px;"






btnRenk.forEach(function(deger,numara){
    deger.addEventListener("click", function(){
        console.log(numara);
        numara == 0 ? renk = "black":null;
        numara == 1 ? renk = "red":null;
        numara == 2 ? renk = "blue":null;
        numara == 3 ? renk = "green":null
        numara == 4 ? renk = "white":null;
        console.log(renk);
        
    })    
})








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
    // Harekitin dışa çıkmdan durdurulması
    sayiContainer === 0 ? sayiContainer++: null ;
    sayiContainer ===  (kutuUzunluk + 1) ? sayiContainer-- : null;
    sayiKutu === 0 ? sayiKutu++ : null;
    sayiKutu ===( kutuGenislik +1) ? sayiKutu--  : null;

    basla.style.backgroundColor = "black"

} )



