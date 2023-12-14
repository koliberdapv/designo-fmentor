import styled from 'styled-components';
import { CTA, LocationItem } from '../components/ui';
import { useEffect } from 'react';
import scrollToTop from '../utils/scrollToTop';
import { useGlobalContext } from '../context/context';

const Locations = () => {
	const { setIsSidebarOpen } = useGlobalContext();
	useEffect(() => {
		scrollToTop();
		setIsSidebarOpen(false);
	}, []);
	const locationsList = [
		{
			id: 1,
			name: 'Canada',
			address: {
				title: 'Designo Central Office',
				address: ['3886 Wellington Street', 'Toronto, Ontario M9C 3J5'],
			},
			contact: {
				title: 'Contact',
				phone: ['P : +1 253-863-8967', 'M : contact@designo.co'],
			},
			coordinates: [43.644544255510866, -79.39427856551758],
		},
		{
			id: 2,
			name: 'Australia',
			address: {
				title: 'Designo AU Office',
				address: ['19 Balonne Street', 'New South Wales 2443'],
			},
			contact: {
				title: 'Contact',
				phone: ['P : (02) 6720 9092', 'M : contact@designo.au'],
			},
			coordinates: [-30.328916865296183, 149.788234517419],
		},
		{
			id: 3,
			name: 'United Kingdom',
			address: {
				title: 'Designo UK Office',
				address: ['13 Colorado Way', 'Rhyd-y-fro SA8 9GA'],
			},
			contact: {
				title: 'Contact',
				phone: ['P : 078 3115 1400', 'M : contact@designo.uk'],
			},
			coordinates: [51.73250967041934, -3.8618999079010314],
		},
	];
	return (
		<Wrapper>
			{locationsList.map((location) => {
				return (
					<LocationItem
						key={location.id}
						location={location}
					/>
				);
			})}
			<CTA />
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: grid;
	gap: 2rem;
	@media screen and (width >= 768px) {
		gap: 7.5rem;
	}
	@media screen and (width >= 1024px) {
		gap: 1.5rem;
	}
`;

export default Locations;
