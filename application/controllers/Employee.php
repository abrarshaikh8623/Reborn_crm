<?php
defined('BASEPATH') or exit('No direct script access allowed');
require_once "application/controllers/CRM.php";

class Employee extends CRM
{

    public function add()
	{
		$data['view_path'] = 'pages/employees/add';
		$data['active '] = 1;
		// $data['scripts'] = [base_url('assets/js/pages/admin/product.js')];
		$this->load->view('template', $data);
	}
}
