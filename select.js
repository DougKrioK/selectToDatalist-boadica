//const selects = $(`select`, `#div-filtros`)
const selects = $(`#modelo`, `#div-filtros`)

selects.each((index, el) => {
	let indice = index;
	const $el = $(el);
	const $options = $(`option`, $el);
	const label = $el.parent();

	let options = ``;

	$options.each((index, el) => {
		options = options + `<option value="${el.value}">${el.text}</option>`;
	});

	$el.remove();
	let datalist = $(`<datalist>`).attr('id', 'datalist'+indice).append(options);
	let input = $(`<input>`).attr({
		list: 'datalist'+indice,
		id: 'modelo',
		name: 'modelo',
		autocomplete:'off'
	}).css('width', '250px');;
	label.append(input).append(datalist);

});
