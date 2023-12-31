const baseUrl = 'http://localhost:3000';

async function signUp(event){
    try{
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const mobileNumber = document.getElementById('mobilenumber').value;
        const password = document.getElementById('password').value;
        
        const newUser = {
            name: name,
            email:email,
            mobileNumber: mobileNumber,
            password: password
        };
    
        const response = await axios.post(`${baseUrl}/user/signup`, newUser);
        console.log(response.data.newUser);
        alert('Successfully Signed Up');
        window.location.href = '../logIn/index.html';
    } catch (error){
        showError(error);
    }
} 

function showError(error) {
    const errorEle = document.getElementById('error');
    errorEle.innerHTML = error.response.data.message;
}

