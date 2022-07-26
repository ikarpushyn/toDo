// create check effect on click
function checkedButton() {
	const checked = document.querySelector('.list');

	checked.addEventListener(
		'click',
		(e) => {
			if (e.target.tagName === 'LI') {
				e.target.classList.toggle('checked');
			}
		},
		false
	);
}
export default checkedButton;
