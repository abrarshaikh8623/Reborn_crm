import { base_url, swal_alert } from "./custom/setup.js";
let loader = '<i class="mdi mdi-timer-sand"></i> VALIDAING ...';
let btn_text = "LOGIN";
let url = `${base_url}login/authenticate`;
let login_btn = document.querySelector("#login-btn");
let username = document.querySelector("#user-email");
let password = document.querySelector("#user-password");
let rememeber = document.querySelector("#remember-me");
let username_alert = document.querySelector("#username-alert");
let password_alert = document.querySelector("#password-alert");

// function show_alert(config) {
// 	swal(config?.title, config?.message, config?.msg_type);
// }

const validate = async () => {
	let email = username.value;
	let pass = password.value;
	let rememeber_me = rememeber.checked ? "yes" : "no";
	let flag = 0;
	// validate fields
	if (email == "") {
		username_alert.classList.remove("d-none");
		flag = 1;
	} else {
		username_alert.classList.add("d-none");
	}
	if (pass == "") {
		password_alert.classList.remove("d-none");
		flag = 1;
	} else {
		password_alert.classList.add("d-none");
	}
	if (flag == 1) return false;
	login_btn.innerHTML = loader;
	login_btn.disabled = true;
	// Send Data to server for validation
	const response = await fetch(url, {
		method: "POST",
		body: JSON.stringify({
			username: email,
			password: pass,
			rememeber: rememeber_me,
		}),
		headers: {
			"Content-Type": "application/json",
			Authorization: "117b15c97578610ee20b2435de923dc1df23fb31344045dd49181031499a2849",
		},
	});
	const data = await response.json();
	login_btn.innerHTML = btn_text;
	login_btn.disabled = false;
	if (response.status == 401 || response.status == 400) {
		swal_alert({
			title: "Error",
			message: data.error,
			msg_type: "error",
		});
		return false;
	}
	window.location = base_url;
};
login_btn.addEventListener("click", validate);


document.querySelector('.toggle-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const icon = document.querySelector('.eye');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    if (passwordField.getAttribute('type') === 'password') {
        icon.classList.add("feather-eye-off");
        icon.classList.remove("feather-eye");
    } else {
        icon.classList.add("feather-eye");
        icon.classList.remove("feather-eye-off");
    }
    passwordField.setAttribute('type', type);
});