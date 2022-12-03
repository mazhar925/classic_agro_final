    const id = localStorage.getItem('id');
    fetch(`http://localhost:2500/api/stocksledgerSingle?ID=${id}`)
    .then(res => res.json())
    .then(data =>{
    const pages = Math.ceil(data.data.length/7);
    for(let i = 1; i<=pages; i++){
        let btn  = document.createElement('button');
        btn.setAttribute('class', 'page_btn');
        btn.setAttribute('onclick', `dataTable(${(i-1)*7}, ${(i*7)-1})`);
        btn.innerHTML = `${i}`;
        document.querySelector('.pagination').append(btn);
    }
    dataTable(0, 6);
});

    function dataTable(initial, final){
        const tBody = document.getElementById('tBody');
        tBody.innerHTML = '';
        fetch(`http://localhost:2500/api/stocksledgerSingle?ID=${id}`)
        .then(res => res.json())
        .then(data =>{
        for(let i = initial; i<=final; i++){
            if(data.data[i]){
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${data.data[i].ID}</td>
                        <td>${data.data[i].date}</td>
                        <td>${data.data[i].product_name}</td>
                        <td>${data.data[i].stock}</td>
                        <td>${data.data[i].user_id}</td>
                        <td>
                            <button class="tableBtn" onclick="openModal('userEditModal', ${data.data[i].ID})">Edit</button>
                        </td>`;
                    tBody.appendChild(tr);
            }
            else{
                return;
            }
        }
        }).catch(err=>console.log(err));
    }