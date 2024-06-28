<?php
defined('BASEPATH') or exit('No direct script access allowed');

class CRM extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
		$this->isAuthenticated();
	}

	// Check authentication of the system users
	function isAuthenticated()
	{
		// Read the value of a cookie
		$token = $this->input->cookie('__crmautht');
		// Check if the cookie value is set
		if ($token) {
			if ($this->db->query("SELECT * FROM reborn_users where auth_token = '$token'")->row_array() == null) {
				$this->session->set_flashdata('crm_flash_msg', "Authentication Token is Missing");
				redirect(base_url('login'));
			}
		} else {
			// Cookie not found or not set
			$this->session->set_flashdata('crm_flash_msg', "Authentication Token is Missing");
			redirect(base_url('login'));
		}
	}

	function logout()
	{
		setcookie('__crmautht', '', time() - 3600, '/', 'localhost', false, TRUE);
		redirect(base_url('login'));
	}
}
