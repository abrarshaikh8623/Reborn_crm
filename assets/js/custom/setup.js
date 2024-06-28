function get_base_url() {
	var pathparts = location.pathname.split("/");
	if (location.host == "localhost")
		var url = location.origin + "/" + pathparts[1].trim("/") + "/";
	else var url = location.origin;

	return url;
}
export const base_url = get_base_url();

export const swal_alert = (config) => {
	swal(config?.title, config?.message, config?.msg_type);
};
