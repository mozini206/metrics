
function renderHTML(data) {

    data = data.split('\n');
    data = data.map(x => x.trim()).filter(x => x);
    console.log('data',data)
    function htmlTableRow(thead, th, thVal) {
        var tr = document.createElement("tr");

        var th = document.createElement("th");
        th.textContent = thVal[0];
        tr.appendChild(th);
        var th2 = document.createElement("th");

        th2.textContent = thVal[1];
        tr.appendChild(th2);
        thead.appendChild(tr);
    }

    const main = document.getElementById('main');
    var table = document.createElement('table');
    table.setAttribute('id', 'ValidationsTable');
    main.appendChild(table);

    var thead = document.createElement('thead');
    table.appendChild(thead);
    htmlTableRow(thead, 'th', ['Validation Status', 'Count']);



    var tbody = document.createElement('tbody');

    tbody.setAttribute('id', 'tbody');

    table.appendChild(tbody);


    function htmlTextElement(tr, td, tdVal) {
        var td = document.createElement("td");
        td.textContent = tdVal;
        tr.appendChild(td);
    }

    function tableCellWithHTMLAnchor(tr, src, text) {
        console.log('src',src)
        var a = document.createElement("a");
        a.href = src;
        a.textContent = text;
        tr.appendChild(a);
    }

    let mapObj = {
        "24": "Abandoned",
        "21": "Approved",
        "25": "Declined",
        "19": "In Progress",
        "20": "Requested",
    };

    for (let i = 0; i < data.length; ++i) {

        row = data[i];
        var tr = document.createElement('tr');

        tbody.appendChild(tr);

        htmlTextElement(tr, 'td', mapObj[row]);
        tableCellWithHTMLAnchor(tr, 'edit_checklist.html#' + mapObj[row], 'Edit');

    }

}
