
const divi = document.getElementById('data')

const addData = () => {
    const name = document.getElementById('username').value
    const email = document.getElementById('emailofuser').value
    const password = document.getElementById('password').value
    
    document.getElementById("one").innerText = `Name: ${name}`


    document.getElementById("two").innerText = `Email: ${email}`


    document.getElementById("three").innerText = `password: ${password}`


    if (document.getElementById("exampleCheck1").checked == true) {
        document.getElementById('four').innerText = `SKILL1: JAVA`
    }
    if (document.getElementById("exampleCheck2").checked == true) {
        document.getElementById('five').innerText = `SKILL2: JAVASCRIPT`
    }
    if (document.getElementById("exampleCheck3").checked == true) {
        document.getElementById('six').innerText = `SKILL3: PYTHON`
    }

    var ele = document.getElementsByName('flexRadioDefault');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            document.getElementById("seven").innerHTML
                = "Gender: " + ele[i].value;
    }


}