function openModal(signal, val1){
    document.getElementById(signal).style.display = "block";
                const inputCategory = document.getElementById('inputCategory');
                const idPro = document.getElementById('idPro');
                if(val1){
                  const fetchData = async (a)=>{
                    try{
                      const url = `http://localhost:2500/api/modalcategory?id=${a}`;
                      const res = await fetch(url);
                      const data = await res.json();
                      idPro.innerHTML=data.data[0].ID;
                      inputCategory.value = data.data[0].category_name;
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
      const catID = document.getElementById("idPro");
      const inputVal = document.getElementById("inputCategory").value;
          const apiCall = async ()=>{
              try{
                  const url=`http://localhost:5000/api/categoryedit?id=${catID.innerHTML}`;
                  const res = await fetch(url,{
                  method: 'PATCH',
                  mode: 'cors',
                  body: JSON.stringify({
                      category_name: inputVal
                  }),
                  headers: {
                      "Content-type": "application/json; charset=UTF-8",
                  },
              });
              }
              catch(err){
                  console.log(err);
              }
              location.reload();
          }
          apiCall();
  }