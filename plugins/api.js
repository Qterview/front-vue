export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: "text/plain, */*",
      },
    },
  });

  // Set baseURL to something different
  // api.setBaseURL("http://3.39.253.103");
  api.setBaseURL("https://charm10jo-dragonball.shop")

  // Inject to context as $api
  inject("api", api);
}
