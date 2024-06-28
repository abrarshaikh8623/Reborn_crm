<?php

class Login_model extends CI_Model
{
	function authenticate($username, $password)
	{
		date_default_timezone_set('Asia/Kolkata');
		$this->db->where('account_status', 'active');
		$this->db->where('email', $username);
		$this->db->where('password', hash("sha256", $password));
		$auth = $this->db->get('reborn_users')->row_array();
		return $auth;
	}
}
