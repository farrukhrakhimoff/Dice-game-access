let diceBtn = document.querySelector('.diceBtn');   // knopokani ushlab olamiz;
let diceRes = document.querySelector('.diceRes');   // knopka va paragraph turgan divni ushlab olamiz;
let diceCenter = document.querySelector('.dice-center');    //Shularni hammasini o'z ichiga oladigan div ni ushlab olamiz

const diceArr1 = ['one', 'two', 'three', 'four', 'five', 'six']; //sonlarni iconlarni tanlab olishda(randomly) kerak boladi;
const diceArr2 = ['one', 'two', 'three', 'four', 'five', 'six'];

diceBtn.addEventListener('click', function(){   //knopkani bosganimizda bajariladigan ishlar:  ;
    let diceRandom1 = Math.floor(Math.random()*diceArr1.length);    //1-6 gacha sonlarni tanlab oladi va diceRandoom1/2 ga SON o'zlashtiradi
    let diceRandom2 = Math.floor(Math.random()*diceArr2.length);

    let dice1 = diceArr1[diceRandom1]; //random sonni diceArr1 arraydagi indexini olishorqali elementlardan birini random tanlab oladi;
    let dice2 = diceArr2[diceRandom2];

    diceResult(dice1, dice2);

    document.querySelectorAll('.die').forEach(value=>{ //shu orqali animatsiyani ikkala dice ga apply qildiryapti;
        value.classList.add('rot')  //.rot klassini qoshish orqali;
    })

});

function diceResult(dice1, dice2){  //tushgan random raqamlarni oladi va quyidagi amallarni bajaradi:
    if(dice1 == dice2){     //agar ikkala dice ham bir hil raqam chiqib qolsa
        //diceRes degan knopka va p turgan butun boshli divni tag-pagi bilan ichidagi contentlarni o'zgartiramiz
        diceRes.innerHTML = `
        <p class="green">Luck is with you! </br>Welcome to my GitHub :)</p>
                <i class="die die1 fas fa-dice-${dice1}"></i>   
                <i class="die die1 fas fa-dice-${dice2}"></i>   
        `;          
        setTimeout(function(){  //setTimeOut orqali shu amal 1s da bajariladi, ya'ni ikkita bir xil son tushsa, boshqa manzilga yonaltiriladi, yoki div ni bosh qilib qoyish vhz amallar bajarish mumkin
            // diceCenter.classList.add('newDice-center');  //bu yerda osha divga bir class qoshish orqali u div ichiga display: none berib oppoq oyna hosil qilish korsatilgan
            window.location.href = "https://github.com/farrukhrakhimoff";   //bu yerda boshqa manzilga yonaltirish berilgan
        },1000) //1000ms = 1s
    }
    else{
        //aks holda boshqatadan urinib korish tavsiya qiladi
        diceRes.innerHTML = `
        <p class="red">Try again, buddy! :(</p>
            <i class="die die1 fas fa-dice-${dice1}"></i>
            <i class="die die1 fas fa-dice-${dice2}"></i>
        `;
    }
}