function validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

//Test
function run2() {
    const input = "emailtest@!gmailexample.com"
    const validation = validateEmail(input);
    console.log(`Valid email: true / not Valid email: false`, validation);
}

run2();
