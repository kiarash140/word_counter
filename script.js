let inputel=document.querySelector('#input');
const facebook=2200;
const twitter=280;
inputel.addEventListener('input', function(){
   let paragraph=inputel.value;
   document.querySelector('#charecter_count_show').textContent=paragraph.length;

   let twitter_count_showel=twitter-paragraph.length;
   document.querySelector('#twitter_count_show').textContent=twitter_count_showel;
    let facebook_count_showel=facebook-paragraph.length;
    document.querySelector('#facebook_count_show').textContent=facebook_count_showel;
    const words = (s) => s.trim().split(/\s+/).length;
    document.querySelector('#word_count_show').textContent=words(paragraph);
    if (paragraph.length===0){
        document.querySelector('#word_count_show').textContent=0;

    }
    if(paragraph.length>=280){
        document.querySelector('#twitter').style.backgroundColor="red";
    }
    else{
        document.querySelector('#twitter').style.backgroundColor="#F1F6F8FF";
    }
    if(paragraph.length>=2200){
        document.querySelector('#facebook').style.backgroundColor="red";
    }
    else{
        document.querySelector('#facebook').style.backgroundColor="#F1F6F8FF";
    }

});
