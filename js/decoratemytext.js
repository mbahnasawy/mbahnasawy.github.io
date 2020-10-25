
window.onload=()=>{
    let biggerBtn = document.getElementById("biggerBtn");

    //Normal btn functino
    // biggerBtn.onclick = ()=>{
    //     const txtArea = document.querySelector("#txtArea");
    //     txtArea.style.fontSize = "4em";
    // };

    biggerBtn.onclick = ()=>{

        let fontStoper = 4;
        let fontTimer = setInterval(()=>{
            const txtArea = document.querySelector("#txtArea");
            let style = window.getComputedStyle(txtArea,null).getPropertyValue("font-size");
            let myfontSize = parseInt(style)+2;
            txtArea.style.fontSize = myfontSize+"pt";
            fontStoper--;
            if(fontStoper===0){
                clearInterval(fontTimer);
            }

        },500);
    };




    const blingBox = document.querySelector("#blingBox");
    blingBox.onchange=()=>{
        let page = document.getElementById("page");
        const txtArea = document.querySelector("#txtArea");
        if(blingBox.checked){
            txtArea.style.fontWeight = "bold";
            txtArea.style.color = "green";
            txtArea.style.textDecoration = "underline";
            page.style.backgroundImage = "url(\"http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg\")";
        }
        else{
            txtArea.style.fontWeight = "";
            txtArea.style.color = "";
            txtArea.style.textDecoration = "";
            page.style.backgroundImage ="";
        }

    };

    const igpayBtn = document.querySelector("#igpayBtn");
    igpayBtn.onclick= ()=> {
        var txtArea = document.getElementById("txtArea");
        var str = txtArea.value.toLowerCase();
        var st = str.split(" ");
        for (let i = 0; i < st.length; i++) {
            if ("aeiouAEIOU".indexOf(st[i][0]) !== -1){
                st[i] = st[i].substr(1,st[i].length)+"ay";
                continue;
            }
            for(let j =0;j<st[i].length;j++){
                 {
                    if ("aeiouAEIOU".indexOf(st[i][j]) !== -1){
                        let extention =st[i].substr(0,j)+"ay";
                        st[i]=st[i].substr(j,st[i].length)+extention;
                        break;
                    }
                }
            }
        }
        document.getElementById('txtArea').value = st.join(" ");
    }

    const malkovitchBtn = document.querySelector("#malkovitchBtn");
    malkovitchBtn.onclick = ()=>{
        var txtArea = document.getElementById("txtArea");
        var str = txtArea.value.split(" ");
        var txtValue = "";
        for (var i = 0; i < str.length; i++) {
            if (str[i].length >= 5) {
                str[i] = "Malkovich";
                txtValue = str.join(" ");
            }
        }
        document.getElementById("txtArea").value = txtValue;
    }
};