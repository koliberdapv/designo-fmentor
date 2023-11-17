const toggleSidebar = (isSidebarOpen) => {
	const sidebar = document.getElementById('sidebar');
	if (isSidebarOpen) {
		sidebar.show();
		return;
	}
	sidebar.close();
};
export default toggleSidebar;
