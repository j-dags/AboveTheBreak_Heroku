import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const CardExampleCard = () => (
	<Card>
		<Image
			src="https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png"
			wrapped
			ui={false}
		/>
		<Card.Content>
			<Card.Header>Matthew</Card.Header>
			<Card.Meta>
				<span className="date">Joined in 2015</span>
			</Card.Meta>
			<Card.Description>
				Matthew is a musician living in Nashville.
			</Card.Description>
		</Card.Content>
		<Card.Content extra>
			<a href="asdf">
				<Icon name="user" />
				22 Friends
			</a>
		</Card.Content>
	</Card>
);

export default CardExampleCard;
