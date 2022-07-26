//Input

function input() {
	const addInput = document.querySelector('.adding__input');
	const list = document.querySelector('.list');
	const addForm = document.querySelector('form.input_area');

	const toDoList = {
		list: [],
	};

	addForm.addEventListener('submit', (e) => {
		e.preventDefault();

		let newList = addInput.value;

		if (newList) {
			if (newList.length > 20) {
				newList = `${newList.substring(0, 21)}...`;
			}

			toDoList.list.push(newList);

			list.innerHTML = '';

			toDoList.list.forEach((listItem) => {
				list.innerHTML += `
			<li data-checked="check" class="list_item">
			 ${listItem}
				<div class="delete"></div>
			</li>
			`;
			});
		} else {
			alert('write smth');
		}

		e.target.reset();
		deleteOnClick();
	});

	//delete when click on ico
	function deleteOnClick() {
		const trashBox = document.querySelectorAll('.delete');
		trashBox.forEach((elem, i) => {
			elem.addEventListener('click', () => {
				elem.parentElement.remove();
				toDoList.list.splice(i, 1);
			});
		});
	}
}

export default input;
