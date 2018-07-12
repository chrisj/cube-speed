const path = 'https://storage.googleapis.com/e2198_compressed/Volume-10015-16102/';

async function loadStack(url) {
	return new Promise((f, r) => {
		let progress = 0;

		for (let z = 0; z < 256; z++) {
			const img = new Image();

			img.onload = () => {
				progress++;

				if (progress === 256) {
					f();
				}
			}

			img.crossOrigin = "Anonymous"; // gcloud fails if CORS header exists and this isn't set
			img.src = `${url}jpg/${z}.jpg?rand=${performance.now()}`;
		}
	});
}

const start = performance.now();
loadStack('https://storage.googleapis.com/e2198_compressed/Volume-10015-16102/').then(() => {
	alert('time: ' + (performance.now() - start));
})
