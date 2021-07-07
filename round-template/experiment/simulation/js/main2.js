var quest_no = 0;
var quest_answered = 0;
//Getting Input from Input element
function input_comp(){
    var rin1=document.getElementById('rin1').value;
    var rin2=document.getElementById('rin2').value;
    var rin3=document.getElementById('rin3').value;
    if(rin1!=2 || rin2!=2 || rin3>1)
    { alert("Error");
      alert("Rin=2,Rf&Rg=2 and Op-amp=1");
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
//Calculating Results
  function results()
  {
    var r1=document.getElementById('r1').value;
    var r2=document.getElementById('r2').value;
    var rg=document.getElementById('rg').value;
    var rf=document.getElementById('rf').value;
    var v1=document.getElementById('v1').value;
    var v2=document.getElementById('v2').value;
    var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
    if(r1==r2 && r2==rg && rg==rf )
      {
       var vo= v1-v2;
       cell1.innerHTML = v1;
      cell2.innerHTML = v2;
      cell3.innerHTML = vo;
      // document.getElementById('vin1').innerHTML=v1;
      // document.getElementById('vin2').innerHTML=v2;
      // document.getElementById('v0').innerHTML=vo;
    }
    else
      {
        alert("Values of R1,R2,R3,Rf must be equal");
      }


    }

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var imageObj = new Image();
imageObj.onload = function() {
ctx.drawImage(imageObj,0,0);
};
imageObj.src = 'images/subtractor_circuit.png';


//-------CREATE CONNECTIONS---------//
function connections()
{
//Connection from Vin1 to Rin1
    ctx.beginPath();
    ctx.moveTo(53,137);
    ctx.lineTo(87,137);
    ctx.lineWidth=3;
    ctx.strokeStyle='#DC143C';
    ctx.stroke();
//Connection from Rin1 vertical
ctx.beginPath();
    ctx.moveTo(150,137);
    ctx.lineTo(240,137);
    ctx.stroke();

//Connection from Vin2 to Rin2
ctx.beginPath();
ctx.moveTo(53,240);
ctx.lineTo(87,240);
ctx.stroke();
//Connection from Rin2 vertical
    ctx.beginPath();
    ctx.moveTo(150,240);
    ctx.lineTo(243,240);
    ctx.stroke();
//Connection from R2 to Rg
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(197,240);
    ctx.lineTo(197,310);
    ctx.stroke();
    //
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(197,370);
    ctx.lineTo(197,400);
    ctx.stroke();

//R1 to Op-amp
    ctx.beginPath();
    ctx.moveTo(200,137);
    ctx.lineTo(200,50);
    ctx.moveTo(200,30);
    ctx.stroke();

//
ctx.beginPath();
ctx.moveTo(200,50);
ctx.lineTo(290,50);
ctx.stroke();
//---
ctx.beginPath();
ctx.moveTo(355,50);
ctx.lineTo(460,50);
ctx.stroke();
//
ctx.beginPath();
ctx.moveTo(440,196);
ctx.lineTo(510,196);
ctx.stroke();
//
ctx.beginPath();
ctx.moveTo(460,50);
ctx.lineTo(460,193);
ctx.stroke();
}
//-----REMOVE CONNECTIONS--------//
function remove_connections()
{
  //Connection from Vin1 to Rin1
  ctx.beginPath();
  ctx.moveTo(53,137);
  ctx.lineTo(87,137);
  ctx.lineWidth=5;
  ctx.strokeStyle='#FFFFFF';
  ctx.stroke();
//Connection from Rin1 vertical
  ctx.beginPath();
  ctx.moveTo(150,137);
  ctx.lineTo(240,137);
  ctx.stroke();
//Connection from Vin2 to Rin2
  ctx.beginPath();
  ctx.moveTo(53,240);
  ctx.lineTo(87,240);
  ctx.stroke();
//Connection from Rin2 vertical
  ctx.beginPath();
  ctx.moveTo(150,240);
  ctx.lineTo(243,240);
  ctx.stroke();
//Connection from R2 to Rg
ctx.stroke();
ctx.beginPath();
ctx.moveTo(197,240);
ctx.lineTo(197,310);
ctx.stroke();
//R1 to Op-amp
ctx.beginPath();
ctx.moveTo(200,137);
ctx.lineTo(200,50);
ctx.moveTo(200,30);
ctx.stroke();
//
ctx.beginPath();
ctx.moveTo(200,50);
ctx.lineTo(290,50);
ctx.stroke();
//
ctx.beginPath();
ctx.moveTo(200,50);
ctx.lineTo(290,50);
ctx.stroke();
////---
ctx.beginPath();
ctx.moveTo(355,50);
ctx.lineTo(460,50);
ctx.stroke();
//
ctx.beginPath();
ctx.moveTo(440,196);
ctx.lineTo(510,196);
ctx.stroke();
//
ctx.beginPath();
ctx.moveTo(460,50);
ctx.lineTo(460,193);
ctx.stroke();
//
ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(197,370);
    ctx.lineTo(197,400);
    ctx.stroke();

}

//////-------------POWER SUPPLY BUTTON---------------/////////
const btn = document.querySelector('.btn2');
const heading = document.querySelector('.heading');
let active = false;
const turnOn = () => {
  btn.classList.add('active');
  heading.classList.add('active');
  if(document.getElementById('con_button').clicked == true)
{
  alert("Check if circuit is connected ");


}else{
  alert("Power Supply:on,Click on Result button ");

}
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
//-------------------------Questions----------------------------//
var q1=0;
// Function disabler
function disable() {
  var x1 = " "
  if(quest_answered === 0 ){
    x1 = "true";
  }
  else{
    x1 =false;
  }
  document.getElementById("con_button").disabled = x1;
  document.getElementById("pwr_button").disabled = x1;
  document.getElementById("dis_connect").disabled = x1;
  document.getElementById("clear").disabled = x1;
  document.getElementById("disconnect").disabled = x1;
  document.getElementById("r1").disabled = x1;
  document.getElementById("r2").disabled = x1;
  document.getElementById("rf").disabled = x1;
  document.getElementById("rg").disabled = x1;
  document.getElementById("v1").disabled = x1;
  document.getElementById("v2").disabled = x1;
}
//Question 1
function ques1()
{   quest_no = 1;
    while(q1<quest_no)
    {dialog1 = document.getElementById('pop_up_quest_1')
    dialog1.show()
    q1 = q1+quest_no;
    quest_answered = 0;
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
      quest_answered = 0;
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
  quest_answered = 0;
    disable();
  }
}
//
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
      alert("Wrong answer!"+"\nCorrect answer:  741 and 741A");
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
//----------------------DISCONNECT CONNECTION-----------------//

function disconnect()
{
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(0,0);
  ctx.stroke();
}
// //----display button on power supply on-----//
// $(".btn1").hide();
// $(".btn2").click(function() {

//   var lable = $(".btn2").text().trim();

//   if(lable == "On") {


//     $(".btn2").text("Off");
//     $(".btn1").hide();
//    // $("#disconnect").show();
//     $('#disconnect').trigger('click');
//     alert("Power Supply => Off , Circuit Disconnected");

//   }
//   else {
//     $(".btn2").text("On");
//     $(".btn1").show();

//   }

//  });
//  /////////////////////////////////
// $(".btn2").hide();
// $(".pwr_ind").hide();
// $("#con_button").click(function() {

//   $(".btn2").show();
// $(".pwr_ind").show();



//  });
//  $("#disconnect").click(function() {


//   $(".btn2").hide();
//   $(".pwr_ind").hide();

//   $("#dis_connect").hide();

//   $("#disconnect").hide();




//  });
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

    //  // $("#disconnect").show();
      $('#disconnect').trigger('click');
    //   alert("Power Supply => Off , Circuit Disconnected");

    document.getElementById("disconnect").disabled = true;
    document.getElementById("pwr_button").disabled = true;
    document.getElementById("dis_connect").disabled = true;

    }
    else {
      $(".btn2").text("On");
      document.getElementById("disconnect").disabled = false;

      $(".btn1").show();

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
