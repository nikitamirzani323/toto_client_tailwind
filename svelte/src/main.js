import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
  props: {
		// path_api: "/",
		path_api: "http://localhost:7071/",
	}
})

export default app
