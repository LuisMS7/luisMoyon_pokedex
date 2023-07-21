export function titlecase(sentence: string) {
	const excludeWords = ["y", "en", "de", "del", "los", "el", "la", "lo"];
	const words = sentence?.split(" ").filter((word) => word.trim() !== "");
	if (words) {
		for (let i = 0; i < words?.length; i++) {
			if (excludeWords.find((word) => word === words[i].toLowerCase())) {
				words[i] = words[i].toLowerCase();
			} else if (words[i]) {
				words[i] =
					words[i][0].toUpperCase() +
					words[i].substr(1).toLowerCase();
			}
		}
		return words?.join(" ");
	}
	return "";
}
