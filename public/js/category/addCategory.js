const addModal = (signal)=>{
    document.getElementById(signal).style.display = "block";
}

const closeProductModal = (signal)=>{
    document.getElementById(signal).style.display = "none";
   }

const categoryAdd = ()=>{
    const inputName = document.getElementById('inputAddCategory').value;
    const sendData = async ()=>{
        try{
            const res = await fetch('http://localhost:2500/api/category',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                category: inputName,
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