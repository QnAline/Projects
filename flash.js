const question=document.querySelector('#question');
const answer=document.querySelector('#answer');
const checkanswer = document.querySelector('.check_answer');
const nextquestion=document.querySelector('.next');

Sample={
 'what is coding':'Coding is the process of writing instructions for computers and other hardware to follow.',
'which programming used to create app on Iphone':'Swift and Objective-C or pure react native',
'define data structure':'It is a way of organizing data in a computer so that it can be used efficiently. ',
'discuss about debugging':'Debugging is the process of finding and fixing errors in code. Debugging is an essential part of the software development process.'
}
const data=Object.entries(Sample);//converting object into an array

function getquestion(){
randomquestion=data[Math.floor(Math.random()*data.length)];
   question.innerHTML=`${randomquestion[0]}`;//to get question
   question.style.padding='10px';
}
checkanswer.addEventListener('click',function(){
    answer.style.padding='50px'
    answer.innerHTML=`${randomquestion[1]}`;
});
nextquestion.addEventListener('click',function(){
    answer.innerHTML='ANSWER';
   getquestion();
});
