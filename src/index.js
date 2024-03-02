export default {
  async fetch(request) {
		// if /pdf is requested, serve the pdf file.
		// if (request.url.includes('/pdf')) {
			let response = await fetch(`https://github.com/ADV1K/ADV1K/releases/latest/download/resume-advik.pdf`);
			return new Response(response.body, {
				headers: {
					"content-type": "application/pdf",
					"content-disposition": "inline; filename=Advik's Resume.pdf"
				},
			});
		// }

  },
};

// 2. Serve the pdf using drive.google.com pdf viewer. taken from vibhakar.
// const html = `<!DOCTYPE html>
// <style>
//   body {
//     height: 100dvh;
//     overflow: hidden;
//     margin:0;
//   }
//   .ndfHFb-c4YZDc-q77wGc {
//     display: nonel
//   }
// </style>
// <body>
//   <iframe
//     src="https://drive.google.com/file/d/1NkpwiLwOf_wiNVeSPaKFKsBzwj80DA3N/preview"
//     allow="autoplay"
//     height="100%"
//     width="100%"
//     style="border: none;">
//     </iframe>
// </body>`;
//
// return new Response(html, {
//   headers: {
//     "content-type": "text/html;charset=UTF-8",
//   },
// });

