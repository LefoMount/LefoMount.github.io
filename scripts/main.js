let greetings = document.getElementById("greetings");

function setGreetings() {
    var date = new Date();
    this.hour = date.getHours();

    if (this.hour < 12){
        greetings.textContent = "上午好！";
    } else{
        greetings.textContent = "下午好！";
    }
}

window.onload=setGreetings();