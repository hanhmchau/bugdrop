'use strict';

Hooks.on('createToken', () => {
	if (!game.user.isGM) {
		for (const token of canvas.tokens.controlled) {
			setTimeout(() => token.control(), 10);
		}
	}
});
