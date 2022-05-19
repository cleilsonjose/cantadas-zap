function send(element){
    let text = element.firstElementChild.innerText;
    let number = prompt("Qual é o número")
    let link = `https://api.whatsapp.com/send?phone=55${number}&text${text}`;
    window.open(link);
}