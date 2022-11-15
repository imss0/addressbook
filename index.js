const lists = [];
let itemId = 0;
const $form = $('#add-contact')
const $listArea = $('.search-list tbody');

/* add contact */
const itemFactory = (items) => {
    return {
      firstName: items[0].value,
      lastName: items[1].value,
      phone: items[2].value,
      address: items[3].value,
      id: itemId++,
    }
};

const drawItem = (lists) => {
    let $newItemHtml = $(`<tr><td scope="row">${lists[lists.length - 1].firstName}</td><td scope="row">${lists[lists.length - 1].lastName}</td><td scope="row">${lists[lists.length - 1].phone}</td><td scope="row">${lists[lists.length - 1].address}</td><td scope="row"><button class="delete">delete</button></td></tr>`)
    $newItemHtml.appendTo($listArea);
}

$form.on('submit', function(event){
        event.preventDefault();
        var $inputs = $(this).find('input');
        var newItem = itemFactory($inputs);
        lists.push(newItem);
        drawItem(lists);
        $inputs.val('');
    }
)

