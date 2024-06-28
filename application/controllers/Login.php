<?php 


class Login extends CI_Controller
{
    function index()
    {
        $this->load->view('pages/login');
    }

    function authenticate()
	{
		$authorization = $this->input->get_request_header('Authorization');
		if ($authorization == '117b15c97578610ee20b2435de923dc1df23fb31344045dd49181031499a2849') {
			$requestBody = $this->input->raw_input_stream;
			$requestBody = $this->security->xss_clean($requestBody);
			// Access the sanitized data
			if (empty($requestBody)) {
				// Empty request body
				http_response_code(400);
				echo json_encode(array('error' => 'Empty request body'));
				return;
			}
			$requestData = json_decode($requestBody, true);
			$authenticated = $this->login_model->authenticate($requestData['username'], $requestData['password']);
			if ($authenticated != null) {
				$user_id = $authenticated['id'];
				$login_time = date('d-M-Y h:i:s');
				$token = base64_encode($user_id);
				$this->db->query("UPDATE reborn_users SET last_login = '$login_time', auth_token = '$token' WHERE id = $user_id");
				// Login successful
				// Set cookie and auth token in the browser
				$expiration = $requestData['rememeber'] == 'yes' ? 0 : time() + (24 * 60 * 60);
				setcookie('__crmautht', $token, $expiration, '/', 'localhost', false, TRUE);
				// send response
				$response = array('message' => 'Login successful');
				$this->output
					->set_status_header(200)
					->set_content_type('application/json')
					->set_output(json_encode($response));
			} else {
				// Login failed
				$response = array('error' => 'Invalid username or password');
				$this->output
					->set_status_header(401)
					->set_content_type('application/json')
					->set_output(json_encode($response));
			}
		} else {
			http_response_code(401);
			echo json_encode(array('error' => 'Unauthorized Access'));
			return;
		}
	}
}