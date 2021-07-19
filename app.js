const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

for (const placeholder of placeholders) {
	//над
	placeholder.addEventListener('dragover', dragover)
	//на територии
	placeholder.addEventListener('dragenter', dragenter)
	//вышли из територии
	placeholder.addEventListener('dragleave', dragleave)
	//бросили
	placeholder.addEventListener('drop', dragdrop)
}


item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend',dragend)

function dragstart(event) {
	event.target.classList.add('hold')
	setTimeout(()=>event.target.classList.add('hide'),0)
}

function dragend(event) {
	event.target.classList.remove('hold','hide')
}
	//перетаскивание над
function dragover(event) {
	//отменяем действия по умолчанию
	event.preventDefault()
	
}
//перетаскивание на територии
function dragenter(event) {
event.target.classList.add('hovered')

}
//перетаскивание за територей
function dragleave(event) {
	event.target.classList.remove('hovered')
	
}

function dragdrop(event) {
	//помещаем item в нужнфй placeholder
	event.target.classList.remove('hovered')
	event.target.append(item);

	
}