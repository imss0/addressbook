let lists = [];
let itemId = 0;
const $form = $('#add-contact');
const $listArea = $('.search-list tbody');
const $searchArea = $('input.search');

/* add contact */
const itemFactory = (items) => {
  return {
		firstName: items[0].value,
		lastName: items[1].value,
		phone: items[2].value,
		address: items[3].value,
		id: itemId++,
	};
};

const drawItem = (lists) => {
  let $newItemHtml = $(`<tr><td scope="row">${lists[lists.length - 1].firstName}</td><td scope="row">${lists[lists.length - 1].lastName}</td><td scope="row">${lists[lists.length - 1].phone}</td><td scope="row">${lists[lists.length - 1].address}</td><td scope="row"><button class="delete">delete</button></td></tr>`);
  let $deleteBtn = $($newItemHtml[0].childNodes[4].childNodes[0]);
  $deleteBtn.attr('id', `${lists[lists.length - 1].id}`);
  $newItemHtml.appendTo($listArea);
}

$form.on('submit', function(event){
	event.preventDefault();
  let $inputs = $(this).find('input');
  let newItem = itemFactory($inputs);
  lists.push(newItem);
  drawItem(lists);
	$inputs.val('');
})


$('input[onlyNumber]').on('keyup', function () {
	$(this).val($(this).val().replace(/[^0-9 -]/g, ""));
});


/* delete contact */
$('body').on('click', '.delete', function(event) {
	event.preventDefault();
	let $itemToDelete = $(event.target);
	$itemToDelete.parent().parent().empty();
  lists = lists.filter(item => item.id !== Number($itemToDelete[0].id))
});


/* search */
$searchArea.on('keyup', function(event) {
	let $searchingItem = $(`tr:contains(${$searchArea.val()})`);
	if ($searchArea.val() !== '') {
		$('.search-list tbody tr').hide();
		$searchingItem.show();
	} else {
		$('.search-list tbody tr').show();
	}
})