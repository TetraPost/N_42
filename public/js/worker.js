const app = document.querySelector('.propertyType');
const btnTwo = document.querySelector('.buttonTwo');
const textInfo = document.querySelector('.textInfo');

async function fetchData() {
  try {
    btnTwo.innerText = 'Wait';
    const response = await axios.get('/list');
    const data = response.data;
    let options = '';
    for (let i = 0; i < data.length; i++) {
      options += `<option value="${[i]}">${data[i]}</option>`;
    }
    app.innerHTML = options;
    btnTwo.innerText = 'Push';
    textInfo.innerText = data.length;
  } catch (error) {
    console.log(error);
  }
}

btnTwo.onclick = () => {
  fetchData();
};
