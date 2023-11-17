import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		const sidebar = document.getElementById('sidebar');
		if (isSidebarOpen) {
			sidebar.show();
			return;
		}
		sidebar.close();
	};

	const handleMenuBtnClick = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	useEffect(() => {
		toggleSidebar();
	}, [isSidebarOpen]);

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				setIsSidebarOpen,
				toggleSidebar,
				handleMenuBtnClick,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
