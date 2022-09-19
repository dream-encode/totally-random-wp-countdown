const COUNTDOWN_DATE = 'Nov 24, 2022 12:30:00';

class TRWPC {
	constructor() {
		this.countdownDate      = Date.parse( COUNTDOWN_DATE );
		this.countdownContainer = document.getElementById( 'countdown' );

		this.init();
	}

	init() {
		this.updateCountdown();

		setInterval( () => this.updateCountdown(), 1000 );
	}

	updateCountdown() {
		const nowDate = new Date();

		const difference = this.countdownDate - nowDate;

		const days    = Math.floor( difference / ( 1000 * 60 * 60 * 24 ) );
		const hours   = Math.floor( difference / ( 1000 * 60 * 60 ) );
		const minutes = Math.floor( difference / ( 1000 * 60 ) );
		const seconds = Math.floor( difference / 1000 );

		const hoursRemaining   = ( hours - days * 24 );
		const minutesRemaining = ( minutes - hours * 60 );
		const secondsRemaining = ( seconds - minutes * 60 );

		const newCountdownContent = `
			<div>${days}<span>Days</span></div>
			<div>${hoursRemaining}<span>Hours</span></div>
			<div>${minutesRemaining}<span>Minutes</span></div>
			<div>${secondsRemaining}<span>Seconds</span></div>
		`;

		this.countdownContainer.innerHTML = newCountdownContent;
	}
}

new TRWPC();