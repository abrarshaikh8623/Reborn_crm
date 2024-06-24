<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Emp_list extends CI_Controller
{
    public function index()
	{
		$this->load->view('emp-list');
	}
}
