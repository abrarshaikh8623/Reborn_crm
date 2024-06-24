<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Welcome extends CI_Controller
{

	//1
	public function index()
	{
		$data['view_path'] = 'pages/admin/dashboard';
		$data['active '] = 1;
		// $data['scripts'] = [base_url('assets/js/pages/admin/product.js')];
		$this->load->view('template', $data);
	}

	

}
