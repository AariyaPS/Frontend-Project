const wrapper=document.querySelector(".wrapper"),
qrInput=wrapper.querySelector(".form input"),
generateBtn=wrapper.querySelector(".form button");
qrImg=wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click",()=>{
    let qrvalue=qrInput.value;
    if(!qrvalue) return //If the input is empty then it return from here.
    generateBtn.innerText="Generating QR Code....";
    //getting the qr code of the user entered value using the qr server
    //api and passing the api returned the img src to qrImg
    qrImg.src='https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue)';
    qrImg.addEventListener("load",()=>{//once QR code img loaded
        wrapper.classList.add("active");
        generateBtn.innerText="Generating QR Code";
    });
    //console.log(qrvalue);
});

qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})