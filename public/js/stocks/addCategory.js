const addModal = (signal)=>{
    document.getElementById(signal).style.display = "block";
}

const closeProductModal = (signal)=>{
    document.getElementById(signal).style.display = "none";
   }

    const getData = async ()=>{
        try{
            const res = await fetch('http://localhost:2500/api/productAllstocks')
            const data = await res.json();
            for(let i = 0; i<data.data.length; i++){
                document.getElementById('product_name').innerHTML +=` <option value="${data.data[i].ID}">${data.data[i].product_name}</option>`;
            }
    }
        catch(err){
            console.log(err)
        }
    }
    getData();

    const getUserData = async ()=>{
        try{
            const res = await fetch('http://localhost:2500/api/usersStock')
            const data = await res.json();
            for(let i = 0; i<data.data.length; i++){
                document.getElementById('user_name').innerHTML +=` <option value="${data.data[i].ID}">${data.data[i].username}</option>`;
            }
    }
        catch(err){
            console.log(err)
        }
    }
    getUserData();


    const addStock = ()=>{
        const dateIn = document.getElementById('inputDateUp').value;
        const userIn = document.getElementById('user_name').value;
        const nameIN = document.getElementById('product_name').value;
        const qtyIn = document.getElementById('inputQty').value;
        const sendData = async ()=>{
            try{
                const res = await fetch('http://localhost:2500/api/stocksAdd',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    date: dateIn,
                    user: userIn,
                    name: nameIN,
                    qty: qtyIn
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