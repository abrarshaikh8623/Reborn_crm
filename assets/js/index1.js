$(function (e) {
	if ($("#index1").hasClass("dark-mode")) {
		var o = document.querySelector("#chartLine").getContext("2d");
		new Chart(o, {
			data: {
				labels: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
					"Nov",
					"Dec",
				],
				datasets: [
					{
						label: "Total BUdget",
						data: [
							100, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210, 410,
						],
						borderWidth: 3,
						backgroundColor: "transparent",
						borderColor: "#3366ff",
						pointBackgroundColor: "#ffffff",
						pointRadius: 0,
						type: "line",
					},
					{
						label: "Total Employess",
						data: [
							200, 530, 110, 110, 480, 520, 780, 435, 475, 738, 454, 454, 230,
						],
						borderWidth: 3,
						backgroundColor: "transparent",
						borderColor: "#2e3471",
						pointBackgroundColor: "#ffffff",
						pointRadius: 0,
						type: "line",
						borderDash: [7, 3],
					},
				],
			},
			options: {
				responsive: !0,
				maintainAspectRatio: !1,
				layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
				tooltips: { enabled: !1 },
				scales: {
					yAxes: [
						{
							gridLines: {
								display: !0,
								drawBorder: !1,
								zeroLineColor: "rgba(142, 156, 173,0.1)",
								color: "rgba(142, 156, 173,0.1)",
							},
							scaleLabel: { display: !1 },
							ticks: {
								beginAtZero: !0,
								min: 0,
								max: 1050,
								stepSize: 150,
								fontColor: "#8492a6",
							},
						},
					],
					xAxes: [
						{
							ticks: { beginAtZero: !0, fontColor: "#8492a6" },
							gridLines: { color: "rgba(142, 156, 173,0.1)", display: !1 },
						},
					],
				},
				legend: { display: !1 },
				elements: { point: { radius: 0 } },
			},
		}),
			((a = document.getElementById("sales-summary")).height = "300"),
			new Chart(a, {
				type: "bar",
				data: {
					labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					datasets: [
						{
							label: "This Month",
							data: [27, 50, 28, 50, 18, 30, 22],
							backgroundColor: "#3366ff",
							borderWidth: 2,
							hoverBackgroundColor: "#3366ff",
							hoverBorderWidth: 0,
							borderColor: "#3366ff",
							hoverBorderColor: "#3366ff",
							borderDash: [5, 2],
						},
						{
							label: "Last Month",
							data: [68, 57, 53, 58, 23, 75, 28],
							backgroundColor: "#fe7f00",
							borderWidth: 2,
							hoverBackgroundColor: "#fe7f00",
							hoverBorderWidth: 0,
							borderColor: "#fe7f00",
							hoverBorderColor: "#fe7f00",
						},
						{
							label: "Last Month",
							data: [100, 78, 68, 95, 0, 98, 58],
							backgroundColor: "#2e3471",
							borderWidth: 2,
							hoverBackgroundColor: "#2e3471",
							hoverBorderWidth: 0,
							borderColor: "#2e3471",
							hoverBorderColor: "#2e3471",
						},
					],
				},
				options: {
					responsive: !0,
					maintainAspectRatio: !1,
					layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
					tooltips: { enabled: !1 },
					scales: {
						yAxes: [
							{
								gridLines: {
									display: !0,
									drawBorder: !1,
									zeroLineColor: "rgba(142, 156, 173,0.1)",
									color: "rgba(142, 156, 173,0.1)",
								},
								scaleLabel: { display: !1 },
								ticks: {
									beginAtZero: !0,
									stepSize: 25,
									suggestedMin: 0,
									suggestedMax: 100,
									fontColor: "#8492a6",
									userCallback: function (e) {
										return e.toString() + "%";
									},
								},
							},
						],
						xAxes: [
							{
								barPercentage: 0.15,
								barValueSpacing: 0,
								barDatasetSpacing: 0,
								barRadius: 0,
								stacked: !0,
								ticks: { beginAtZero: !0, fontColor: "#8492a6" },
								gridLines: { color: "rgba(142, 156, 173,0.1)", display: !1 },
							},
						],
					},
					legend: { display: !1 },
					elements: { point: { radius: 0 } },
				},
			});
		var r = {
			series: [74, 35],
			chart: { height: 300, type: "donut" },
			dataLabels: { enabled: !1 },
			legend: { show: !1 },
			stroke: { show: !0, width: 0 },
			plotOptions: {
				pie: {
					donut: {
						size: "80%",
						background: "transparent",
						labels: {
							show: !0,
							name: {
								show: !0,
								fontSize: "29px",
								color: "#6c6f9a",
								offsetY: -10,
							},
							value: {
								show: !0,
								fontSize: "26px",
								color: void 0,
								offsetY: 16,
								formatter: function (e) {
									return e + "%";
								},
							},
							total: {
								show: !0,
								showAlways: !1,
								label: "Total",
								fontSize: "22px",
								fontWeight: 600,
								color: "#373d3f",
							},
						},
					},
				},
			},
			responsive: [{ options: { legend: { show: !1 } } }],
			labels: ["Male", "Female"],
			colors: ["#3366ff", "#fe7f00"],
		};
		new ApexCharts(document.querySelector("#employees"), r).render(),
			$(".fc-datepicker").datepicker({
				dateFormat: "dd M yy",
				monthNamesShort: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"Maj",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Okt",
					"Nov",
					"Dec",
				],
			}),
			$("#tpBasic").timepicker(),
			$("#clocktimer").countdowntimer({
				currentTime: !0,
				size: "md",
				borderColor: "transparent",
				backgroundColor: "transparent",
				fontColor: "#313e6a",
			});
	} else {
		var a;
		(o = document.querySelector("#chartLine").getContext("2d")),
			new Chart(o, {
				data: {
					labels: [
						"Jan",
						"Feb",
						"Mar",
						"Apr",
						"May",
						"Jun",
						"Jul",
						"Aug",
						"Sep",
						"Oct",
						"Nov",
						"Dec",
					],
					datasets: [
						{
							label: "Total BUdget",
							data: [
								100, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210, 410,
							],
							borderWidth: 3,
							backgroundColor: "transparent",
							borderColor: "#3366ff",
							pointBackgroundColor: "#ffffff",
							pointRadius: 0,
							type: "line",
						},
						{
							label: "Total Employess",
							data: [
								200, 530, 110, 110, 480, 520, 780, 435, 475, 738, 454, 454, 230,
							],
							borderWidth: 3,
							backgroundColor: "transparent",
							borderColor: "#ccd9ff",
							pointBackgroundColor: "#ffffff",
							pointRadius: 0,
							type: "line",
							borderDash: [7, 3],
						},
					],
				},
				options: {
					responsive: !0,
					maintainAspectRatio: !1,
					layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
					tooltips: { enabled: !1 },
					scales: {
						yAxes: [
							{
								gridLines: {
									display: !0,
									drawBorder: !1,
									zeroLineColor: "rgba(142, 156, 173,0.1)",
									color: "rgba(142, 156, 173,0.1)",
								},
								scaleLabel: { display: !1 },
								ticks: {
									beginAtZero: !0,
									min: 0,
									max: 1050,
									stepSize: 150,
									fontColor: "#8492a6",
								},
							},
						],
						xAxes: [
							{
								ticks: { beginAtZero: !0, fontColor: "#8492a6" },
								gridLines: { color: "rgba(142, 156, 173,0.1)", display: !1 },
							},
						],
					},
					legend: { display: !1 },
					elements: { point: { radius: 0 } },
				},
			}),
			((a = document.getElementById("sales-summary")).height = "300"),
			new Chart(a, {
				type: "bar",
				data: {
					labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					datasets: [
						{
							label: "This Month",
							data: [27, 50, 28, 50, 18, 30, 22],
							backgroundColor: "#3366ff",
							borderWidth: 2,
							hoverBackgroundColor: "#3366ff",
							hoverBorderWidth: 0,
							borderColor: "#3366ff",
							hoverBorderColor: "#3366ff",
							borderDash: [5, 2],
						},
						{
							label: "Last Month",
							data: [68, 57, 53, 58, 23, 75, 28],
							backgroundColor: "#fe7f00",
							borderWidth: 2,
							hoverBackgroundColor: "#fe7f00",
							hoverBorderWidth: 0,
							borderColor: "#fe7f00",
							hoverBorderColor: "#fe7f00",
						},
						{
							label: "Last Month",
							data: [100, 78, 68, 95, 0, 98, 58],
							backgroundColor: "#dbe2fc",
							borderWidth: 2,
							hoverBackgroundColor: "#dbe2fc",
							hoverBorderWidth: 0,
							borderColor: "#dbe2fc",
							hoverBorderColor: "#dbe2fc",
						},
					],
				},
				options: {
					responsive: !0,
					maintainAspectRatio: !1,
					layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
					tooltips: { enabled: !1 },
					scales: {
						yAxes: [
							{
								gridLines: {
									display: !0,
									drawBorder: !1,
									zeroLineColor: "rgba(142, 156, 173,0.1)",
									color: "rgba(142, 156, 173,0.1)",
								},
								scaleLabel: { display: !1 },
								ticks: {
									beginAtZero: !0,
									stepSize: 25,
									suggestedMin: 0,
									suggestedMax: 100,
									fontColor: "#8492a6",
									userCallback: function (e) {
										return e.toString() + "%";
									},
								},
							},
						],
						xAxes: [
							{
								barPercentage: 0.15,
								barValueSpacing: 0,
								barDatasetSpacing: 0,
								barRadius: 0,
								stacked: !0,
								ticks: { beginAtZero: !0, fontColor: "#8492a6" },
								gridLines: { color: "rgba(142, 156, 173,0.1)", display: !1 },
							},
						],
					},
					legend: { display: !1 },
					elements: { point: { radius: 0 } },
				},
			}),
			(r = {
				series: [74, 35],
				chart: { height: 300, type: "donut" },
				dataLabels: { enabled: !1 },
				legend: { show: !1 },
				stroke: { show: !0, width: 0 },
				plotOptions: {
					pie: {
						donut: {
							size: "80%",
							background: "transparent",
							labels: {
								show: !0,
								name: {
									show: !0,
									fontSize: "29px",
									color: "#6c6f9a",
									offsetY: -10,
								},
								value: {
									show: !0,
									fontSize: "26px",
									color: void 0,
									offsetY: 16,
									formatter: function (e) {
										return e + "%";
									},
								},
								total: {
									show: !0,
									showAlways: !1,
									label: "Total",
									fontSize: "22px",
									fontWeight: 600,
									color: "#373d3f",
								},
							},
						},
					},
				},
				responsive: [{ options: { legend: { show: !1 } } }],
				labels: ["Male", "Female"],
				colors: ["#3366ff", "#fe7f00"],
			}),
			new ApexCharts(document.querySelector("#employees"), r).render(),
			$(".fc-datepicker").datepicker({
				dateFormat: "dd M yy",
				monthNamesShort: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"Maj",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Okt",
					"Nov",
					"Dec",
				],
			}),
			$("#tpBasic").timepicker(),
			$("#clocktimer").countdowntimer({
				currentTime: !0,
				size: "md",
				borderColor: "transparent",
				backgroundColor: "transparent",
				fontColor: "#313e6a",
			});
	}
	$("#background-left2").on("click", function () {
		var e = document.querySelector("#chartLine").getContext("2d"),
			o =
				(new Chart(e, {
					data: {
						labels: [
							"Jan",
							"Feb",
							"Mar",
							"Apr",
							"May",
							"Jun",
							"Jul",
							"Aug",
							"Sep",
							"Oct",
							"Nov",
							"Dec",
						],
						datasets: [
							{
								label: "Total BUdget",
								data: [
									100, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210,
									410,
								],
								borderWidth: 3,
								backgroundColor: "transparent",
								borderColor: "#3366ff",
								pointBackgroundColor: "#ffffff",
								pointRadius: 0,
								type: "line",
							},
							{
								label: "Total Employess",
								data: [
									200, 530, 110, 110, 480, 520, 780, 435, 475, 738, 454, 454,
									230,
								],
								borderWidth: 3,
								backgroundColor: "transparent",
								borderColor: "#2e3471",
								pointBackgroundColor: "#ffffff",
								pointRadius: 0,
								type: "line",
								borderDash: [7, 3],
							},
						],
					},
					options: {
						responsive: !0,
						maintainAspectRatio: !1,
						layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
						tooltips: { enabled: !1 },
						scales: {
							yAxes: [
								{
									gridLines: {
										display: !0,
										drawBorder: !1,
										zeroLineColor: "rgba(142, 156, 173,0.1)",
										color: "rgba(142, 156, 173,0.1)",
									},
									scaleLabel: { display: !1 },
									ticks: {
										beginAtZero: !0,
										min: 0,
										max: 1050,
										stepSize: 150,
										fontColor: "#8492a6",
									},
								},
							],
							xAxes: [
								{
									ticks: { beginAtZero: !0, fontColor: "#8492a6" },
									gridLines: { color: "rgba(142, 156, 173,0.1)", display: !1 },
								},
							],
						},
						legend: { display: !1 },
						elements: { point: { radius: 0 } },
					},
				}),
				document.getElementById("sales-summary"));
		(o.height = "300"),
			new Chart(o, {
				type: "bar",
				data: {
					labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					datasets: [
						{
							label: "This Month",
							data: [27, 50, 28, 50, 18, 30, 22],
							backgroundColor: "#3366ff",
							borderWidth: 2,
							hoverBackgroundColor: "#3366ff",
							hoverBorderWidth: 0,
							borderColor: "#3366ff",
							hoverBorderColor: "#3366ff",
							borderDash: [5, 2],
						},
						{
							label: "Last Month",
							data: [68, 57, 53, 58, 23, 75, 28],
							backgroundColor: "#fe7f00",
							borderWidth: 2,
							hoverBackgroundColor: "#fe7f00",
							hoverBorderWidth: 0,
							borderColor: "#fe7f00",
							hoverBorderColor: "#fe7f00",
						},
						{
							label: "Last Month",
							data: [100, 78, 68, 95, 0, 98, 58],
							backgroundColor: "#2e3471",
							borderWidth: 2,
							hoverBackgroundColor: "#2e3471",
							hoverBorderWidth: 0,
							borderColor: "#2e3471",
							hoverBorderColor: "#2e3471",
						},
					],
				},
				options: {
					responsive: !0,
					maintainAspectRatio: !1,
					layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
					tooltips: { enabled: !1 },
					scales: {
						yAxes: [
							{
								gridLines: {
									display: !0,
									drawBorder: !1,
									zeroLineColor: "rgba(142, 156, 173,0.1)",
									color: "rgba(142, 156, 173,0.1)",
								},
								scaleLabel: { display: !1 },
								ticks: {
									beginAtZero: !0,
									stepSize: 25,
									suggestedMin: 0,
									suggestedMax: 100,
									fontColor: "#8492a6",
									userCallback: function (e) {
										return e.toString() + "%";
									},
								},
							},
						],
						xAxes: [
							{
								barPercentage: 0.15,
								barValueSpacing: 0,
								barDatasetSpacing: 0,
								barRadius: 0,
								stacked: !0,
								ticks: { beginAtZero: !0, fontColor: "#8492a6" },
								gridLines: { color: "rgba(142, 156, 173,0.1)", display: !1 },
							},
						],
					},
					legend: { display: !1 },
					elements: { point: { radius: 0 } },
				},
			}),
			$(".fc-datepicker").datepicker({
				dateFormat: "dd M yy",
				monthNamesShort: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"Maj",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Okt",
					"Nov",
					"Dec",
				],
			}),
			$("#tpBasic").timepicker(),
			$("#clocktimer").countdowntimer({
				currentTime: !0,
				size: "md",
				borderColor: "transparent",
				backgroundColor: "transparent",
				fontColor: "#313e6a",
			});
	}),
		$("#background-left1").on("click", function () {
			var e = document.querySelector("#chartLine").getContext("2d"),
				o =
					(new Chart(e, {
						data: {
							labels: [
								"Jan",
								"Feb",
								"Mar",
								"Apr",
								"May",
								"Jun",
								"Jul",
								"Aug",
								"Sep",
								"Oct",
								"Nov",
								"Dec",
							],
							datasets: [
								{
									label: "Total BUdget",
									data: [
										100, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210,
										410,
									],
									borderWidth: 3,
									backgroundColor: "transparent",
									borderColor: "#3366ff",
									pointBackgroundColor: "#ffffff",
									pointRadius: 0,
									type: "line",
								},
								{
									label: "Total Employess",
									data: [
										200, 530, 110, 110, 480, 520, 780, 435, 475, 738, 454, 454,
										230,
									],
									borderWidth: 3,
									backgroundColor: "transparent",
									borderColor: "#ccd9ff",
									pointBackgroundColor: "#ffffff",
									pointRadius: 0,
									type: "line",
									borderDash: [7, 3],
								},
							],
						},
						options: {
							responsive: !0,
							maintainAspectRatio: !1,
							layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
							tooltips: { enabled: !1 },
							scales: {
								yAxes: [
									{
										gridLines: {
											display: !0,
											drawBorder: !1,
											zeroLineColor: "rgba(142, 156, 173,0.1)",
											color: "rgba(142, 156, 173,0.1)",
										},
										scaleLabel: { display: !1 },
										ticks: {
											beginAtZero: !0,
											min: 0,
											max: 1050,
											stepSize: 150,
											fontColor: "#8492a6",
										},
									},
								],
								xAxes: [
									{
										ticks: { beginAtZero: !0, fontColor: "#8492a6" },
										gridLines: {
											color: "rgba(142, 156, 173,0.1)",
											display: !1,
										},
									},
								],
							},
							legend: { display: !1 },
							elements: { point: { radius: 0 } },
						},
					}),
					document.getElementById("sales-summary"));
			(o.height = "300"),
				new Chart(o, {
					type: "bar",
					data: {
						labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
						datasets: [
							{
								label: "This Month",
								data: [27, 50, 28, 50, 18, 30, 22],
								backgroundColor: "#3366ff",
								borderWidth: 2,
								hoverBackgroundColor: "#3366ff",
								hoverBorderWidth: 0,
								borderColor: "#3366ff",
								hoverBorderColor: "#3366ff",
								borderDash: [5, 2],
							},
							{
								label: "Last Month",
								data: [68, 57, 53, 58, 23, 75, 28],
								backgroundColor: "#fe7f00",
								borderWidth: 2,
								hoverBackgroundColor: "#fe7f00",
								hoverBorderWidth: 0,
								borderColor: "#fe7f00",
								hoverBorderColor: "#fe7f00",
							},
							{
								label: "Last Month",
								data: [100, 78, 68, 95, 0, 98, 58],
								backgroundColor: "#dbe2fc",
								borderWidth: 2,
								hoverBackgroundColor: "#dbe2fc",
								hoverBorderWidth: 0,
								borderColor: "#dbe2fc",
								hoverBorderColor: "#dbe2fc",
							},
						],
					},
					options: {
						responsive: !0,
						maintainAspectRatio: !1,
						layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
						tooltips: { enabled: !1 },
						scales: {
							yAxes: [
								{
									gridLines: {
										display: !0,
										drawBorder: !1,
										zeroLineColor: "rgba(142, 156, 173,0.1)",
										color: "rgba(142, 156, 173,0.1)",
									},
									scaleLabel: { display: !1 },
									ticks: {
										beginAtZero: !0,
										stepSize: 25,
										suggestedMin: 0,
										suggestedMax: 100,
										fontColor: "#8492a6",
										userCallback: function (e) {
											return e.toString() + "%";
										},
									},
								},
							],
							xAxes: [
								{
									barPercentage: 0.15,
									barValueSpacing: 0,
									barDatasetSpacing: 0,
									barRadius: 0,
									stacked: !0,
									ticks: { beginAtZero: !0, fontColor: "#8492a6" },
									gridLines: { color: "rgba(142, 156, 173,0.1)", display: !1 },
								},
							],
						},
						legend: { display: !1 },
						elements: { point: { radius: 0 } },
					},
				}),
				$(".fc-datepicker").datepicker({
					dateFormat: "dd M yy",
					monthNamesShort: [
						"Jan",
						"Feb",
						"Mar",
						"Apr",
						"Maj",
						"Jun",
						"Jul",
						"Aug",
						"Sep",
						"Okt",
						"Nov",
						"Dec",
					],
				}),
				$("#tpBasic").timepicker(),
				$("#clocktimer").countdowntimer({
					currentTime: !0,
					size: "md",
					borderColor: "transparent",
					backgroundColor: "transparent",
					fontColor: "#313e6a",
				});
		});
});
