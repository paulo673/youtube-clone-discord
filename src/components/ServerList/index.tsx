import React from 'react';

import { Container, Separator } from './styles';

import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
	return (
		<Container>
			<ServerButton isHome />

			<Separator />

			<ServerButton />
			<ServerButton  hasNotifications />
			<ServerButton />
			<ServerButton  hasNotifications />
			<ServerButton />
			<ServerButton />
			<ServerButton />
			<ServerButton  hasNotifications />
			<ServerButton  hasNotifications />
			<ServerButton />
			<ServerButton  hasNotifications />
			<ServerButton mentions={5}/>
			<ServerButton />
			<ServerButton />
			<ServerButton  hasNotifications />
			<ServerButton />
			<ServerButton  hasNotifications />
			<ServerButton mentions={5}/>
			<ServerButton />
			<ServerButton mentions={5}/>
			<ServerButton />
		</Container>
	);
};

export default ServerList;