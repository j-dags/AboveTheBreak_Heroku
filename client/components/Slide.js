import React from 'react';
import { useSpring } from 'react-spring';
import './Slide.css';

function Slide() {
	const props = useSpring({
		from: {
			left: '0%',
			top: '0%',
			width: '100%',
			height: '0%',
			background: 'lightgreen',
		},
		to: {
			left: '0%',
			top: '0%',
			width: '100%',
			height: '100%',
			background: 'lightblue',
		},
	});

	return (
		<div style={props}>
			I'm baby hell of banh mi health goth, everyday carry four loko 3 wolf moon
			normcore iceland offal synth messenger bag vexillologist kinfolk. Jean
			shorts four loko kogi art party yr, selvage +1 marfa man braid neutra
			microdosing truffaut four dollar toast. Drinking vinegar readymade echo
			park shoreditch lomo chia craft beer tote bag freegan poke iPhone man
			braid seitan. Church-key cardigan taiyaki vape neutra listicle blue bottle
			la croix. Man braid crucifix YOLO fashion axe beard deep v 8-bit vice poke
			mixtape four dollar toast bespoke brunch. Hot chicken tumeric poke squid
			distillery stumptown four loko iPhone butcher hella small batch bespoke
			vexillologist. Tbh tumblr cliche taiyaki kale chips bicycle rights. Venmo
			cloud bread blue bottle, pabst keytar tacos cornhole leggings bespoke
			wayfarers tousled helvetica. Tumeric kogi hot chicken, shoreditch raw
			denim forage bicycle rights activated charcoal next level single-origin
			coffee franzen heirloom copper mug banh mi gluten-free. Tote bag gastropub
			flannel chia. Unicorn disrupt pabst godard DIY. Cray pour-over ramps
			aesthetic messenger bag affogato. Keffiyeh twee bicycle rights, heirloom
			bespoke af vinyl glossier tofu YOLO ennui asymmetrical. Hot chicken
			ethical pickled tattooed meditation, hashtag green juice brooklyn tilde
			mixtape. Photo booth fanny pack raclette keytar sartorial, cloud bread
			swag letterpress meggings retro slow-carb. Chartreuse copper mug photo
			booth unicorn, gochujang single-origin coffee freegan cold-pressed schlitz
			letterpress prism chia. Vinyl +1 chillwave, lo-fi four dollar toast tacos
			tumblr aesthetic pitchfork chartreuse austin. Pug waistcoat af
			chicharrones, kinfolk marfa gochujang taiyaki photo booth venmo master
			cleanse vexillologist whatever meh. Everyday carry try-hard enamel pin
			chicharrones small batch selfies paleo meditation beard hexagon
			thundercats before they sold out tacos kinfolk. Cred humblebrag portland
			pickled taxidermy squid tumeric food truck microdosing austin crucifix
			biodiesel tote bag blue bottle authentic. Raw denim gastropub waistcoat
			paleo, PBR&B dreamcatcher narwhal echo park offal. Glossier poke coloring
			book, palo santo godard readymade thundercats mumblecore la croix
			letterpress before they sold out pickled art party pinterest tacos. Pabst
			semiotics jean shorts typewriter cliche gentrify. Man bun live-edge cronut
			godard af banh mi forage portland beard polaroid. 8-bit bicycle rights
			green juice, church-key next level lumbersexual put a bird on it man braid
			portland. Godard post-ironic 3 wolf moon keffiyeh. Messenger bag cardigan
			tacos wayfarers cold-pressed mixtape everyday carry copper mug tousled
			fam. Ethical kinfolk master cleanse lumbersexual, gochujang mumblecore
			small batch brunch. Bitters food truck wayfarers raclette live-edge
			adaptogen pitchfork celiac viral portland cliche blog 8-bit.
		</div>
	);
}

export default Slide;
