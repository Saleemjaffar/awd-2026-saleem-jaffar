function showMessage() {
    alert("Welcome to my portfolio website!");
}

const btn = document.getElementById("luxuryBtn");

const popup = document.getElementById("popup");

const close = document.getElementById("closePopup");

btn.onclick = function () {

    popup.classList.add("active");

    for(let i=0;i<50;i++){

        let spark=document.createElement("span");

        spark.className="spark";

        spark.style.left=(window.innerWidth/2)+"px";

        spark.style.top=(btn.getBoundingClientRect().top+20)+"px";

        spark.style.setProperty("--x",(Math.random()*400-200)+"px");

        spark.style.setProperty("--y",(Math.random()*400-200)+"px");

        document.body.appendChild(spark);

        setTimeout(()=>{

            spark.remove();

        },900);

    }

}

close.onclick=function(){

popup.classList.remove("active");

}