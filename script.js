var score = 0;
function c1() {
document.querySelector('.correct').style = "visibility: visible;";
setTimeout(hide , 1500);
score += 1;
document.getElementById('q1').style.display = "none";
}
function w1() {
document.querySelector('.wrong').style = "visibility: visible;";
setTimeout(hide , 1500);
score += 0;
document.getElementById('q1').style.display = "none";
}
function hide() {
    document.querySelector('.correct').style = "visibility: hidden;";
    document.querySelector('.wrong').style = "visibility: hidden;";
}
function c2() {
    document.querySelector('.correct').style = "visibility: visible;";
    setTimeout(hide , 2000);
    score += 1;
    document.getElementById('q2').style.display = "none";
    }
    function w2() {
    document.querySelector('.wrong').style = "visibility: visible;";
    setTimeout(hide , 2000);
    score += 0;
    document.getElementById('q2').style.display = "none";
}
function c3() {
    document.querySelector('.correct').style = "visibility: visible;";
    setTimeout(hide , 2000);
    score += 1;
    document.getElementById('q3').style.display = "none";
    }
    function w3() {
    document.querySelector('.wrong').style = "visibility: visible;";
    setTimeout(hide , 2000);
    score += 0;
    document.getElementById('q3').style.display = "none";
    }
function c4() {
    document.querySelector('.correct').style = "visibility: visible;";
    setTimeout(hide , 2000);
    score += 1;
    document.getElementById('q4').style.display = "none";
    }
    function w4() {
    document.querySelector('.wrong').style = "visibility: visible;";
    setTimeout(hide , 2000);
    score += 0;
    document.getElementById('q4').style.display = "none";
    }
function c5() {
    document.querySelector('.correct').style = "visibility: visible;";
    setTimeout(hide , 2000);
    score += 1;
    document.getElementById('q5').style.display = "none";
    }
    function w5() {
    document.querySelector('.wrong').style = "visibility: visible;";
    setTimeout(hide , 2000);
    score += 0;
    document.getElementById('q5').style.display = "none";
    }
function c6() {
    document.querySelector('.correct').style = "visibility: visible;";
    setTimeout(hide , 2000);
    score += 1;
    document.getElementById('q6').style.display = "none";
    }
    function w6() {
    document.querySelector('.wrong').style = "visibility: visible;";
    setTimeout(hide , 2000);
    score += 0;
    document.getElementById('q6').style.display = "none";
    }
function c7() {
    document.querySelector('.correct').style = "visibility: visible;";
    setTimeout(hide , 2000);
    score += 1;
    document.getElementById('q7').style.display = "none";
    }
    function w7() {
    document.querySelector('.wrong').style = "visibility: visible;";
    setTimeout(hide , 2000);
    score += 0;
    document.getElementById('q7').style.display = "none";
    }
function c8() {
    document.querySelector('.correct').style = "visibility: visible;";
    setTimeout(hide , 2000);
    score += 1;
    document.getElementById('q8').style.display = "none";
    }
    function w8() {
    document.querySelector('.wrong').style = "visibility: visible;";
    setTimeout(hide , 2000);
    score += 0;
    document.getElementById('q8').style.display = "none";
    }
function c9() {
    document.querySelector('.correct').style = "visibility: visible;";
    setTimeout(hide , 2000);
    score += 1;
    document.getElementById('q9').style.display = "none";
    }
    function w9() {
    document.querySelector('.wrong').style = "visibility: visible;";
    setTimeout(hide , 2000);
    score += 0;
    document.getElementById('q9').style.display = "none";
    }
function c10() {
    document.querySelector('.correct').style = "visibility: visible;";
    setTimeout(hide , 2000);
    score += 1;
    document.getElementById('q10').style.display = "none";
    finish();
    }
    function w10() {
    document.querySelector('.wrong').style = "visibility: visible;";
    setTimeout(hide , 2000);
    score += 0;
    document.getElementById('q10').style.display = "none";
    finish();    
}
function finish() {
    let quote = "";
    if (score <= 5){
        quote = "Need To Work Hard :(";
    }
    else if (score > 5){
        quote = "Good Job :)";
    }
    document.querySelector('.main').innerHTML = `
    <h1>Result</h1><br><br><br>
    <span>Score is `+score*10+`/100</span><br><br><br>
    <span>`+quote+`</span><br><br>
    <button onclick="restart()">Retry</button>
    `;
}
function restart() {
    document.querySelector('.main').innerHTML = `

<div class="main">
    <div class="box" id="q1">
    <div class="ques">Q1. Who was the first indian to go to Space?</div><br>
    <div class="option" onclick="c1()">A) Rakesh Sharma</div><br>
    <div class="option" onclick="w1()">B) Neil ArmStrong</div><br>
    <div class="option" onclick="w1()">C) Robinson Hood</div><br>
    <div class="option" onclick="w1()">D) Marks Stephen</div>
</div><br><br>

    <div class="box" id="q2">
    <div class="ques">Q2. Who invented Light Bulb?</div><br>
    <div class="option" onclick="w2()">A) Denis Libnerman</div><br>
    <div class="option" onclick="w2()">B) Zohans Zukengberg</div><br>
    <div class="option" onclick="w2()">C) Steve Jobs</div><br>
    <div class="option" onclick="c2()">D) Thomsa Alva Edison</div>
</div><br><br>

    <div class="box" id="q3">
    <div class="ques">Q3. Which planet is also known as the blue planet?</div><br>
    <div class="option" onclick="w3()">A) Mars</div><br>
    <div class="option" onclick="c3()">B) Earth</div><br>
    <div class="option" onclick="w3()">C) Saturn</div><br>
    <div class="option" onclick="w3()">D) Pluto</div>
</div><br><br>

    <div class="box" id="q4">
    <div class="ques">Q4. Which is the smallest bird in the world?</div><br>
    <div class="option" onclick="c4()">A) Humming Birds</div><br>
    <div class="option" onclick="w4()">B) Dolphin</div><br>
    <div class="option" onclick="w4()">C) Robin Hood</div><br>
    <div class="option" onclick="w4()">D) KingFisher</div>
</div><br><br>

    <div class="box" id="q5">
    <div class="ques">Q5. Who invented the Computer?</div><br>
    <div class="option" onclick="w5()">A) Rakesh Sharma</div><br>
    <div class="option" onclick="c5()">B) Charles Babbage</div><br>
    <div class="option" onclick="w5()">C) Wright Brothers</div><br>
    <div class="option" onclick="w5()">D) Mark Zukerberg</div>
</div><br><br>

    <div class="box" id="q6">
    <div class="ques">Q6.  Who are the founders of Google?</div><br>
    <div class="option" onclick="w6()">A) Mark Zukerberg</div><br>
    <div class="option" onclick="w6()">B) Steve Jobs</div><br>
    <div class="option" onclick="w6()">C) Bill Gates</div><br>
    <div class="option" onclick="c6()">D) Larry Page & Sergey Brin</div>
</div><br><br>

    <div class="box" id="q7">
    <div class="ques">Q7. Which is the largest continent?</div><br>
    <div class="option" onclick="w7()">A) Europe</div><br>
    <div class="option" onclick="w7()">B) Africa</div><br>
    <div class="option" onclick="w7()">C) America (South)</div><br>
    <div class="option" onclick="c7()">D) Asia</div>
</div><br><br>
    <div class="box" id="q8">
    <div class="ques">Q8. Who founded Facebook?</div><br>
    <div class="option" onclick="w8()">A) Sergey Brin</div><br>
    <div class="option" onclick="w8()">B) Neil ArmStrong</div><br>
    <div class="option" onclick="c8()">C) Mark Zuckerberg</div><br>
    <div class="option" onclick="w8()">D) Marks Stephen</div>
</div><br><br>

    <div class="box" id="q9">
    <div class="ques">Q9.Which is the longest river on Earth?</div><br>
    <div class="option" onclick="w9()">A) Ob</div><br>
    <div class="option" onclick="w9()">B) Ganga</div><br>
    <div class="option" onclick="w9()">C) Yamuna</div><br>
    <div class="option" onclick="c9()">D) Nile</div>
</div><br><br>

    <div class="box" id="q10">
    <div class="ques">Q10. Who wrote the national Anthem of India?</div><br>
    <div class="option" onclick="w10()">A) Mahatma Gandhi</div><br>
    <div class="option" onclick="c10()">B) Rabindranath Tagore</div><br>
    <div class="option" onclick="w10()">C) Chandra Chattarji</div><br>
    <div class="option" onclick="w10()">D) B.R Ambedkar</div>
</div><br><br>
</div>
<div class="correct">
<img src="good.png" width="90%" alt="">
</div>
<div class="wrong">
<img src="./bad.png" width="90%" alt="">
</div>
<script src="./script.js"></script>
    
    `;
}
