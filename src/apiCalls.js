export const getData = async () => {
    try {
      const response = await fetch('https://api.mocki.io/v2/016d11e8/product-widgets');
      if (response.status === 200) {
        const data = await response.json();
        return data;
      }
    } catch(error) {
      console.log(error);
    }
}