let userName=prompt("Ban la ai?");
if (userName=='hieu') {
    let pass= prompt('password?');
    if (pass=="123") {
        alert('Welcome');
    } else if (pass=='anh') {
        alert('dat.dit');
    } else {
        alert("mk sai");
    }
} else if (userName=='vu') {
    alert('Cancedel');
} else {
    alert("I don't know you");
}