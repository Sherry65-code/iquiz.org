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
        <div class="ques">Q1. Which is the national tree of India?</div><br>
        <div class="option" onclick="c1()">A) Banyan Tree</div><br>
        <div class="option" onclick="w1()">B) Banana Tree</div><br>
        <div class="option" onclick="w1()">C) None of the Above</div><br>
        <div class="option" onclick="w1()">D) Papaya Tree</div>
    </div><br><br>
    
        <div class="box" id="q2">
        <div class="ques">Q2. Which is the holy river of India?</div><br>
        <div class="option" onclick="w2()">A) Yamuna</div><br>
        <div class="option" onclick="w2()">B) Ganga</div><br>
        <div class="option" onclick="w2()">C) Ob</div><br>
        <div class="option" onclick="c2()">D) Bhramaputra</div>
    </div><br><br>
    
        <div class="box" id="q3">
        <div class="ques">Q3. Which is the smallest country in the world?</div><br>
        <div class="option" onclick="w3()">A) India</div><br>
        <div class="option" onclick="w3()">B) Pakistan</div><br>
        <div class="option" onclick="c3()">C) Vatican City</div><br>
        <div class="option" onclick="w3()">D) Australia</div>
    </div><br><br>
    
        <div class="box" id="q4">
        <div class="ques">Q4. Which city is also known as the Pink City?</div><br>
        <div class="option" onclick="c4()">A) Jaipur</div><br>
        <div class="option" onclick="w4()">B) Lucknow</div><br>
        <div class="option" onclick="w4()">C) Kerela</div><br>
        <div class="option" onclick="w4()">D) Leh</div>
    </div><br><br>
    
        <div class="box" id="q5">
        <div class="ques">Q5. Which sport does Saina Mirza pplay?</div><br>
        <div class="option" onclick="c5()">A) Tennis</div><br>
        <div class="option" onclick="w5()">B) Badminton</div><br>
        <div class="option" onclick="w5()">C) Cricket</div><br>
        <div class="option" onclick="w5()">D) Chess</div>
    </div><br><br>
    
        <div class="box" id="q6">
        <div class="ques">Q6.  Who built Taj Mahal?</div><br>
        <div class="option" onclick="w6()">A) Aurenzeb</div><br>
        <div class="option" onclick="w6()">B) Akbar</div><br>
        <div class="option" onclick="c6()">C) Shah Jahan</div><br>
        <div class="option" onclick="w6()">D) None of the above</div>
    </div><br><br>
    
        <div class="box" id="q7">
        <div class="ques">Q7. Which is the largest river in the world?</div><br>
        <div class="option" onclick="w7()">A) Nile</div><br>
        <div class="option" onclick="c7()">B) Amazon</div><br>
        <div class="option" onclick="w7()">C) Ob</div><br>
        <div class="option" onclick="w7()">D) Ganga</div>
    </div><br><br>
        <div class="box" id="q8">
        <div class="ques">Q8. Who is know as the Human-Computer?</div><br>
        <div class="option" onclick="w8()">A) Charles Babbage</div><br>
        <div class="option" onclick="c8()">B) Shakuntala Devi</div><br>
        <div class="option" onclick="w8()">C) Mark Zuckerberg</div><br>
        <div class="option" onclick="w8()">D) None of the above</div>
    </div><br><br>
    
        <div class="box" id="q9">
        <div class="ques">Q9.Which is the largest ocean in the world?</div><br>
        <div class="option" onclick="w9()">A) Indian Ocean</div><br>
        <div class="option" onclick="c9()">B) Pacific Ocean</div><br>
        <div class="option" onclick="w9()">C) Antartic Ocean</div><br>
        <div class="option" onclick="w9()">D) Atlantic Ocean</div>
    </div><br><br>
    
        <div class="box" id="q10">
        <div class="ques">Q10. Which is the highest mountain peak in the world?</div><br>
        <div class="option" onclick="w10()">A) Mt. Kanchengejana</div><br>
        <div class="option" onclick="c10()">B) Mt. Everest</div><br>
        <div class="option" onclick="w10()">C) Mt. Abu</div><br>
        <div class="option" onclick="w10()">D) Mt. Weke</div>
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
