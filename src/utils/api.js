const baseUrl = "http://localhost:3001";

function getitems() {
  return fetch(`${baseUrl}/items`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch items: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error(error.message);
      return [];
    });
}

export { getitems };
