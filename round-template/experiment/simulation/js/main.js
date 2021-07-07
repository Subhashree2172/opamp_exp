var quest_no = 0;
var quest_answered = 0;
///////-------------POWER SUPPLY BUTTON---------------/////////
const btn = document.querySelector('.btn2');
const heading = document.querySelector('.heading');
let active = false;
const turnOn = () => {
  btn.classList.add('active');
  heading.classList.add('active');
//   if(document.getElementById('con_button').clicked == true)
// {
//   alert("Check if circuit is connected ");

// }else{
//   alert("Power Supply => On,Click on Result button ");

// }
}
const turnOff = () => {
  btn.classList.remove('active');
  heading.classList.remove('active');
}
const toggleAnimation = () => {
  btn.classList.remove('animating');
  active ? turnOn() : turnOff();
};
function clickHandler() {
  active = !active;
  btn.classList.add('animating');
  btn.addEventListener('animationend', toggleAnimation);
}

btn.addEventListener('click', clickHandler);

function input_comp(){
  var rin1=document.getElementById('rin1').value;
  var rin2=document.getElementById('rin2').value;
  var rin3=document.getElementById('rin3').value;
  if(rin1!=3 || rin3>1 || rin2>1)
  { alert("Error");
    alert("Rin=3,Rf=1 and Op-amp=1 ");
  }
  else
  {
    alert("Components Selected, Scroll to circuit simulation");
  }
}

function clear_result()
{
  var row = document.getElementById("myTable");
  row.deleteRow(1);
}

function results()
{
  var r1=document.getElementById('r1').value;
  var r2=document.getElementById('r2').value;
  var r3=document.getElementById('r3').value;
  var rf=document.getElementById('rf').value;
  var v1=document.getElementById('v1').value;
  var v2=document.getElementById('v2').value;
  var v3=document.getElementById('v3').value;
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  if(r1==r2 && r2==r3 && r3==rf )
    {

      var vin1=(rf/r1)*v1;
      var vin2=(rf/r2)*v2;
      var vin3=(rf/r3)*v3;
      var v0 = vin1+vin2+vin3;

      cell1.innerHTML = v1;
      cell2.innerHTML = v2;
      cell3.innerHTML = v3;
      cell4.innerHTML = "-"+v0;
     //document.getElementById('vin1').innerHTML=v1;
     //document.getElementById('vin2').innerHTML=v2;
     //document.getElementById('vin3').innerHTML=v3;
     //document.getElementById('v0').innerHTML="-"+vo;

   }
  else
    {
      alert("Values of R1,R2,R3,Rf must be equal");
    }


  }

//
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var imageObj = new Image();
imageObj.onload = function() {
ctx.drawImage(imageObj,0,0);
};
imageObj.src = 'images/summing_circuit.png';


function remove_connections()
{
  ctx.beginPath();
  ctx.moveTo(80,60);
  ctx.lineTo(160,60);
  ctx.lineWidth=7;
  ctx.strokeStyle='#FFFFFF';
  ctx.stroke();
//Connection from Vin2 to Rin2

  ctx.beginPath();
  ctx.moveTo(80,130);
  ctx.lineTo(160,130);
  ctx.stroke();
//Connection from Vin3 to Rin3
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(80,200);
  ctx.lineTo(160,200);
  ctx.stroke();
//R1 parallel
  ctx.beginPath();
  ctx.moveTo(245,60);
  ctx.lineTo(315,60);
  ctx.stroke();
//R2 parallel
  ctx.beginPath();
  ctx.moveTo(245,130);
  ctx.lineTo(420,130);
  ctx.stroke();
//R3 parallel
  ctx.beginPath();
  ctx.moveTo(245,200);
  ctx.lineTo(378,200);
  ctx.stroke();
//Connecting line for Parallel Connection
  ctx.beginPath();
  ctx.moveTo(315,60);
  ctx.lineTo(315,200);
  ctx.stroke();
//Ground Connection for IC
ctx.beginPath();
ctx.moveTo(311,247);
ctx.lineTo(311,280);
ctx.moveTo(311,247);
ctx.lineTo(379,247);
ctx.stroke();
//Vout connection
ctx.beginPath();
ctx.moveTo(510,224);
ctx.lineTo(693,224);
ctx.stroke();
//Rf to Vout
ctx.beginPath();
ctx.moveTo(510,130);
ctx.lineTo(570,130);
ctx.moveTo(570,130);
ctx.lineTo(570,227);
ctx.stroke();
}
function connections()
{

//Connection from Vin1 to Rin1
    ctx.beginPath();
    ctx.moveTo(80,60);
    ctx.lineTo(160,60);
    ctx.lineWidth=5;
    ctx.strokeStyle='#DC143C';
    ctx.stroke();
//Connection from Vin2 to Rin2

    ctx.beginPath();
    ctx.moveTo(80,130);
    ctx.lineTo(160,130);
    ctx.stroke();
//Connection from Vin3 to Rin3
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(80,200);
    ctx.lineTo(160,200);
    ctx.stroke();
//R1 parallel
    ctx.beginPath();
    ctx.moveTo(245,60);
    ctx.lineTo(315,60);
    ctx.stroke();
//R2 parallel
    ctx.beginPath();
    ctx.moveTo(245,130);
    ctx.lineTo(420,130);
    ctx.stroke();
//R3 parallel
    ctx.beginPath();
    ctx.moveTo(245,200);
    ctx.lineTo(378,200);
    ctx.stroke();
//Connecting line for Parallel Connection
  ctx.beginPath();
  ctx.moveTo(315,60);
  ctx.lineTo(315,200);
  ctx.stroke();
//Ground Connection for IC
  ctx.beginPath();
  ctx.moveTo(311,247);
  ctx.lineTo(311,280);
  ctx.moveTo(311,247);
  ctx.lineTo(379,247);
  ctx.stroke();
//Vout connection
  ctx.beginPath();
  ctx.moveTo(510,224);
  ctx.lineTo(693,224);
  ctx.stroke();
//Rf to Vout
  ctx.beginPath();
  ctx.moveTo(510,130);
  ctx.lineTo(570,130);
  ctx.moveTo(570,130);
  ctx.lineTo(570,227);
  ctx.stroke();


}



//----------------------ENABLING BUTTONS----------------------//

function enableConnect()
{
    //document.getElementById("disconnect").disabled = false;
    document.getElementById("pwr_button").disabled = false;
}
//---------------------ENABLING RESULT BUTTON--------------//

function resultEnable()
{

    document.getElementById("dis_connect").disabled = false;

}
//---------------------POWER CHECK---------------------------//
function pwrCheck()
{
    var lable = $(".btn2").text().trim();

    if(lable == "On") {

        $(".btn2").text("Off");

        remove_connections();
        alert("Power Supply => Off , Circuit Disconnected");

    document.getElementById("disconnect").disabled = true;
    document.getElementById("pwr_button").disabled = true;
    document.getElementById("dis_connect").disabled = true;

    }
    else
    {
      $(".btn2").text("On");
      document.getElementById("disconnect").disabled = false;

      alert("Power Supply => On , Circuit Connected");

      //$(".btn1").show();

    // document.getElementById("disconnect").disabled = false;
    // document.getElementById("pwr_button").disabled = false;
    // document.getElementById("dis_connect").disabled = false;


    }
}
//----------------------DISCONNECT BUTTON- Disabling-------------//
function disableBtn()
{




    document.getElementById("disconnect").disabled = true;
    document.getElementById("dis_connect").disabled = true;

    document.getElementById("pwr_button").disabled = true;

}
function dis_pwr_off()
{
    var lable = $(".btn2").text().trim();
    if(lable == "On") {
        $(".btn2").text("Off");
        console.log("durinf disc");
        alert("Power Supply => Off , Circuit Disconnected");
        turnOff();
        clickHandler();
        disableBtn();
    }
}
// function disableConnections()
// {
//       $(".btn2").trigger('click');

//     //  // $("#disconnect").show();
//       $('#disconnect').trigger('click');
//     //   alert("Power Supply => Off , Circuit Disconnected");

//     document.getElementById("disconnect").disabled = true;
//     document.getElementById("pwr_button").disabled = true;
//     document.getElementById("dis_connect").disabled = true;



//     // document.getElementById("disconnect").disabled = false;
//     // document.getElementById("pwr_button").disabled = false;
//     // document.getElementById("dis_connect").disabled = false;



// }
//----------------------DISCONNECT CONNECTION-----------------//

function disconnect()
{
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(0,0);
  ctx.stroke();

  //

}
//-------------------------Questions----------------------------//
var q1=0;
//Question 1
function ques1()
{   quest_no = 1;
    while(q1<quest_no)
    {dialog1 = document.getElementById('pop_up_quest_1')
    dialog1.show();
    quest_answered = 0;
    q1 = q1+quest_no;
    disable();
}
}
//Question 2
function ques2()
{
  quest_no = 2;
  while(q1<quest_no)
  {dialog1 = document.getElementById('pop_up_quest_2')
    dialog1.show();
    q1 = q1+quest_no;
    quest_answered = 0;
    disable();
  }
}
//Question 3
function ques3()
{
  quest_no = 3;
  while(q1<quest_no)
  {dialog1 = document.getElementById('pop_up_quest_3')
    dialog1.show();
    q1 = q1+quest_no;
    quest_answered =0;
    disable();
  }
}
//Question 4
function ques4()
{
  quest_no = 4;
  while(q1<quest_no)
  {dialog1 = document.getElementById('pop_up_quest_4')
    dialog1.show();
    q1 = q1+quest_no;
    quest_answered = 0;
    disable();
  }
}
//Question 5
function ques5()
{
  quest_no = 5;
  while(q1<quest_no)
  {dialog1 = document.getElementById('pop_up_quest_5')
    dialog1.show();
    q1 = q1+quest_no;
    quest_answered=0;
    disable();
  }
}
//Disable function
function disable() {
  var x = " "
  if(quest_answered ===0 ){
    x = "true";
  }
  else{
    x=false
  }
  document.getElementById("con_button").disabled = x;
  document.getElementById("pwr_button").disabled = x;
  document.getElementById("dis_connect").disabled = x;
  document.getElementById("clear").disabled = x;
  document.getElementById("disconnect").disabled = x;
  document.getElementById("r1").disabled = x;
  document.getElementById("v1").disabled = x;
  document.getElementById("r2").disabled = x;
  document.getElementById("v2").disabled = x;
  document.getElementById("r3").disabled = x;
  document.getElementById("v3").disabled = x;
  document.getElementById("rf").disabled = x;
}
// POPup question function
for(i=0;i<document.querySelectorAll(".answer").length;i++){
  document.querySelectorAll(".answer")[i].addEventListener("click", function(){
    var value = this.value;
    ans_display(Number(value),quest_no);
  } ); }
function ans_display(ans,quest_no){
  if(ans == 1){
    alert("Correct answer!");
  }
  else{
    switch(quest_no){
      case 1:
      alert("Wrong answer!"+" \nCorrect answer: 741S");
      break;

      case 2:
      alert("Wrong answer!"+"\nCorrect answer: 741 and 741A");
      break;

      case 3:
      alert("Wrong answer!"+"\nCorrect answer: Audio Power Amplifier");
      break;

      case 4:
      alert("Wrong answer!"+"\n Correct answer: -2V");
      break;

      case 5:
      alert("Wrong answer!"+"\nCorrect answer:VO= A×(V1-V2)");
      quest_no = 0;
      break;
    }
  }
  dialog1.close();
  quest_answered = 1;
  disable();
}
//----display button on power supply on-----//
