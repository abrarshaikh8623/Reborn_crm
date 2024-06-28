<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Loging-CRM</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link href="<?= base_url() ?>assets/plugins/icons/icons.css" rel="stylesheet" />
    <link rel="icon" href="<?= base_url() ?>assets/images/brand/reborn_logo.png" type="image/x-icon" />




</head>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f7f8fb;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }

    .container {
        background-color: #ffffff;
        padding: 40px 150px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    .login-form {
        max-width: 400px;
        width: 100%;
    }

    .login-form h2 {
        margin-bottom: 10px;
    }

    .login-form p {
        margin-bottom: 20px;
        font-size: 14px;
    }

    .login-form .input-group {
        margin-bottom: 15px;
        position: relative;
    }

    .login-form label {
        display: block;
        font-size: 14px;
        margin-bottom: 5px;
    }

    .login-form input[type="email"],
    .login-form input[type="password"],
    .login-form input[type="text"] {
        width: calc(100% - 30px);
        /* padding: 10px; */
        /* font-size: 14px; */
        /* border: 1px solid #ccc; */
        /* border-radius: 4px; */
    }

    .login-form .toggle-password {
        position: absolute;
        right: 10px;
        top: 35px;
        cursor: pointer;
    }

    .login-form input[type="checkbox"] {
        margin-right: 10px;
    }

    .login-form button[type="submit"] {
        width: 100%;
        padding: 10px;
        background-color: #0061f2;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    .login-form .forgot-password {
        display: block;
        margin-top: 15px;
        font-size: 14px;
        text-align: center;
    }

    .social-login {
        margin-top: 20px;
        text-align: center;
    }

    .social-login p {
        margin-bottom: 10px;
        font-size: 14px;
    }

    .social-login .google-btn,
    .social-login .facebook-btn {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    .social-login .google-btn {
        background-color: white;
        border: 1px solid #ccc;
        color: black;
    }

    .social-login .facebook-btn {
        background-color: #4267B2;
        color: white;
    }

    .eye {
        display: flex;
        align-items: center;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: var(--bs-body-color);
        text-align: center;
        white-space: nowrap;

    }

    .bottom-shadow {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        /* Adjust the values as needed */
        border-radius: 50%;
        width: 77px;
    }
</style>

<body>

    <div class="container justify-content-center col-md-6 ">
        <form class="login-form ">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="col-md-12 mb-4">
                        <img class="bottom-shadow" src="<?= base_url() ?>assets/images/brand/reborn_logo.png" alt="">

                    </div>
                    <h2>Sign In</h2>
                    <div class="input-group">
                        <label for="email">Email</label>
                        <input type="email" id="user-email" class="form-control" required>
                    </div>
                    <p class="text-danger d-none text-align-left" id="username-alert">Username is required</p>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="user-password" class="form-control" required>
                        <i class="feather feather-eye  eye toggle-password" for="password"></i>

                    </div>
                    <p class="text-danger d-none text-align-left" id="password-alert">Password is required</p>
                    <?php if ($this->session->userdata('crm_flash_msg') != '') : ?>
                        <div class="alert alert-danger">
                            <?= $this->session->userdata('crm_flash_msg') ?>
                        </div>
                    <?php endif; ?>
                    <div class="input-group">
                        <input type="checkbox" id="remember-me">
                        <label for="keep-signed-in">Keep me signed in</label>
                    </div>
                    <button type="submit" id="login-btn">Sign In</button>
                    <a href="#" class="forgot-password">Forgot Your Password?</a>
                    <!-- <div class="social-login">
                        <p>Or sign in using:</p>
                        <button class="google-btn">Continue with Google</button>
                        <button class="facebook-btn">Continue with Facebook</button>
                    </div> -->
                </div>
            </div>
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <!-- swal-alert -->
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    
    <script type="module" src="<?= base_url() ?>assets\js\login.js"></script>
</body>

</html>