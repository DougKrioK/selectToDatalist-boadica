const selects = document.querySelector('#modelo');
const options = document.querySelectorAll('#modelo option');
const label = selects.parentElement;
let optionDatalist = '';

for (var i = 1; i < options.length; i++) {
	optionDatalist = `${optionDatalist} <option value="${options[i].value}">${options[i].text}</option>`;
}

label.innerHTML = `\n Modelo: \n <input id="modelo" list="datalist-select" name="modelo" placeholder="Selecione um modelo" autocomplete="off" style="width:250px"><datalist id="datalist-select">${optionDatalist}</datalist>`;
