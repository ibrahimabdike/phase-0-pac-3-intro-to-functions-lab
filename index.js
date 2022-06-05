function shout(shoutString) {
	return shoutString.toUpperCase();
	}

function whisper(whisperString) {
	return whisperString.toLowerCase();
	}

function logShout(shoutLog) {
	console.log(shoutLog.toUpperCase());
	}

function logWhisper(whisperLog) {
	console.log(whisperLog.toLowerCase());
	}

function sayHiToHeadphonedRoommate(hiRoommate) {
	switch (true) {
		case (hiRoommate === hiRoommate.toLowerCase()): return "I can't hear you!";
		case (hiRoommate === hiRoommate.toUpperCase()): return "YES INDEED!";
		case (hiRoommate === "I would love to!"): return "Let's have dinner together!";
		default: return "String does not match tested values, please try again.";
		}
	}
