let answer = Math.floor(Math.random() *100);
let n1=0;
let n2=99;
while (true){
    let guess = Number(prompt("請輸入數字("+ n1 + "~" + n2 +")"));
    if(guess < n1 ||  guess > n2){
        alert("請輸入0-99之間數字");
        continue;
    }
    if (guess == answer){
        alert("恭喜您答對，數字為"+ answer);
        break;
    }
            else if(guess < answer){
                n1 = guess;
            }else if(guess > answer){
                n2 = guess;
            
        
    }
}