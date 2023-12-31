import { createContext, useContext, useEffect, useState } from 'react';
import scrollToTop from '../utils/scrollToTop';
import { set } from 'react-hook-form';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		const sidebar = document.getElementById('sidebar');
		if (isSidebarOpen) {
			sidebar.inert = true;
			sidebar.show();
			sidebar.classList.add('sidebar-show');
			sidebar.inert = false;
			return;
		}
		sidebar.classList.remove('sidebar-show');
		setTimeout(() => {
			sidebar.close();
		}, 250);
	};

	const handleMenuBtnClick = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const smoothRender = () => {
		const obsItems = document.querySelectorAll('.obs-item');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.intersectionRatio > 0) {
						entry.target.classList.add('show');
					} else {
						entry.target.classList.remove('show');
					}
					if (entry.isIntersecting) observer.unobserve(entry.target);
				});
			},
			{
				threshold: 0.1,
			}
		);
		obsItems.forEach((item) => {
			observer.observe(item);
		});
	};

	useEffect(() => {
		toggleSidebar();
	}, [isSidebarOpen]);

	useEffect(() => {
		scrollToTop();
	}, []);

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				setIsSidebarOpen,
				toggleSidebar,
				handleMenuBtnClick,
				smoothRender,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
