const productAddModal = (signal)=>{
    document.getElementById(signal).style.display = "block";
    const catName = document.getElementById('category_name');
    fetch('http://localhost:2500/categoryName')
    .then(res=>res.json())
    .then(data=>{
        for(let i = 0; i<data.data.length; i++){
            catName.innerHTML +=` <option value="${data.data[i].ID}">${data.data[i].category_name}</option>`;
        }
    }).catch(err=>console.log(err));
}

const closeProductModal = (signal)=>{
    document.getElementById(signal).style.display = "none";
   }

const productAdd = ()=>{
    const inputName = document.getElementById('inputAddProduct').value;
    const inputQty = document.getElementById('inputAddQty').value;
    const inputPc = document.getElementById('inputAddPc').value;
    const inputMrp = document.getElementById('inputAddMrp').value;
    const inputTp = document.getElementById('inputAddTp').value;
    const catName = document.getElementById('category_name').value;
    const sendData = async ()=>{
        try{
            const res = await fetch('http://localhost:2500/api/productAdd',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                product_name: inputName,
                pro_cat: catName,
                pro_qty: inputQty,
                pro_pc: inputPc,
                pro_mrp: inputMrp,
                pro_tp: inputTp
                })
        })
        if(res.ok){
        }
        else{
            throw new Error("error"+res.status);
        }
        }
        catch(err){
            console.log(err);
        }
        location.reload();
    }
    sendData();
}