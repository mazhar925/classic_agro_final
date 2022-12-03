function searchFunction() {
    const input = document.getElementById('dataInput');
    const tBody = document.getElementById('tBody');
            tBody.innerHTML = '';
            fetch(`http://localhost:2500/api/productByName?name=${input.value}`)
            .then(res => res.json())
            .then(data =>{
            for(let i = 0; i<=data.data.length; i++){
                if(data.data[i]){
                    const tr = document.createElement('tr');
                    tr.innerHTML = `<td>${data.data[i].ID}</td>
                            <td>${data.data[i].category_name}</td>
                            <td>${data.data[i].product_name}</td>
                            <td>${data.data[i].qty}</td>
                            <td>${data.data[i].pc}</td>
                            <td>${data.data[i].mrp}</td>
                            <td>${data.data[i].tp}</td>
                            <td>
                                <input type="checkbox" name="activity" id="" checked disabled>
                            </td>
                            <td>
                                <button class="tableBtn" onclick="openModal('userEditModal', ${data.data[i].ID})">Edit</button>
                                <button class="tableBtn">Ledger</button>
                            </td>`;
                        tBody.appendChild(tr);
                }
                else{
                    return;
                }
            }
            }).catch(err=>console.log(err));
    }