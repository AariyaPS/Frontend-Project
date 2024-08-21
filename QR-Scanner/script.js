const wrapper = document.querySelector(".wrapper");
form = wrapper.querySelector("form");
fileInp=form.querySelector("input");
infoText=form.querySelector("p");
copyBtn=wrapper.querySelector(".copy");
closeBtn=wrapper.querySelector(".close");

function fetchRequest(formData,file){
    infoText.innerText="Scanning the code.."
    //sending the post request to qr server api with passing
    //form data as body and getting response from it.
    fetch("http://api.qserver.com/v1/read-qr-code/",{
        method: "POST", body: formData
    }).then(res=>res.json()).then(result=>{
        result = result[0].symbol[0].data;
        console.log(result);
        infoText.innerText=result?"Upload QR Code to Scan":"Couldn't Scan the code";
        if(!file) return;
        wrapper.querySelector("textarea").innerText=result;
        form.querySelector("img").src=URL.createObjectURL(file);
        /*URL.createObjectURL creates string containing the URL 
        of passed object. And passing the URL as the image src.*/ 
        /*console.log(result);*/
        wrapper.classList.add("active");
    }).catch(()=>{
        infoText.innerText="Couldn't Scan the code";
    });
}

fileInp.addEventListener("change",e=>{
    let file=e.target.files[0]; //Getting user selected file.
    if(!file) return;
    let formData = new FormData(); //creating the new FormData object
    formData.append("file",file);//adding the selected to the FormData
    fetchRequest(formData,file);
    console.log(file);
})

copyBtn.addEventListener("click",() => {
    let text = wrapper.querySelector("textarea").textContent;
    navigator.clipboard.writeText(text);
});

form.addEventListener("click", ()=> fileInp.click());
closeBtn.addEventListener("click", () => wrapper.classList.add("active"));