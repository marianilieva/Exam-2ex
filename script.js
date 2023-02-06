let count = 2;

$(function()    {
    $('#add').on('click', function()    {
        let html = '';
        html += `<div class="box" data-id="${count}">`;
        html += `<label for="item${count}" class="form-label">Item ${count}</label>`;
        html += '<div class="row">';
        html += '    <div class="col-9">';
        html += '        <input type="text" class="form-control"';
        html += `            id="item${count}" placeholder="Enter some text"`;
        html += '        >';
        html += '    </div>';
        html += '    <div class="col-3">';
        html += `        <button id="${count}" class="btn btn-danger col-2">X</button>`;
        html += '    </div>';
        html += '</div>';
        html += '</div>';
        $('#content').append(html);

        count++;
        if (count > 200)    {
            count = 2;
            alert('Please, reset the page or it will stop work properly!');
        }
    })

    $('body').on('click', '.btn-danger', function() {
        let num = this.id;
        $(`div[data-id="${num}"]`).remove();
    })
})