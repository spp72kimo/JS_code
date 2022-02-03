/*
reverse("abcd"); // returns "dcba"
reverse("I am a good guy."); // returns ".yug doog a am I"
*/

function reverse(txt){
    let rev_txt = '';
    for ( let i = txt.length - 1; i >= 0; i--){
        rev_txt += txt[i];
    }
    // console.log(txt);
    console.log(rev_txt);
}

reverse('steven');