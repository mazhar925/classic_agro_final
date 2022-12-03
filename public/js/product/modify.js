function openModal(signal, val1){
    document.getElementById(signal).style.display = "block";
                const inputProduct = document.getElementById('inputProduct');
                const inputQty = document.getElementById('inputQty');
                const inputPc = document.getElementById('inputPc');
                const inputMrp = document.getElementById('inputMrp');
                const inputTp = document.getElementById('inputTp');
                const idPro = document.getElementById('idPro');
                if(val1){
                  const fetchData = async (a)=>{
                    try{
                      const url = `http://localhost:2500/api/modalproduct?id=${a}`;
                      const res = await fetch(url);
                      const data = await res.json();
                      inputProduct.value=data.data[0].product_name;
                      inputQty.value=data.data[0].qty;
                      inputPc.value=data.data[0].pc;
                      inputMrp.value=data.data[0].mrp;
                      idPro.innerHTML=data.data[0].ID;
                      inputTp.value=data.data[0].tp;
                    }
                    catch(err){
                      console.log(err);
                    }
                  }
                  fetchData(val1)
                }
    }
    function closeModal(signal){
    document.getElementById(signal).style.display = "none";
    }


    const modifyData =()=>{
        const pID = document.getElementById("idPro");
        const inputProduct = document.getElementById('inputProduct').value;
        // const inputQty = document.getElementById('inputQty').value;
        // const inputPc = document.getElementById('inputPc').value;
        // const inputMrp = document.getElementById('inputMrp').value;
            const apiCall = async ()=>{
                try{
                    const url=`http://localhost:2500/api/modifyproduct?id=${pID.innerHTML}`;
                    const res = await fetch(url,{
                    method: 'PATCH',
                    body: JSON.stringify({
                        product_name: inputProduct,
                        // pro_qty: inputQty,
                        // pro_pc: inputQty,
                        // pro_mrp: inputMrp
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                });
                }
                catch(err){
                    console.log(err);
                }
            }
            apiCall();
    }