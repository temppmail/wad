function display(){
    let users=JSON.parse(localStorage.getItem('users'))||[];
    let html=`
    <center >
        <table border='2px'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Division</th>
                </tr>
            </thead>
            <tbody>
    `;
    users.forEach(element=>{
        html+=`
        <tr>
            <td>${element.name}</td>
            <td>${element.mobile}</td>
            <td>${element.divis}</td>
        </tr>
        `
    })
    html+=`</tbody> </table> </center>`
    const w=open();
    w.document.body.innerHTML=html;
}

function addData(data){
    let arr=JSON.parse(localStorage.getItem('users'))||[];
    arr.unshift(data);
    localStorage.setItem("users",JSON.stringify(arr));
    display();
}

document.forms.register.addEventListener("submit", formSubmit)

function formSubmit(event){
    event.preventDefault();

    let name=document.getElementById('name').value;
    let mobile=document.getElementById('mobile').value;
    let division=document.getElementById('divis').value;

    let info={name,mobile,division};

    $.ajax({
        type:'POST',
        url:"https://jsonplaceholder.typicode.com/users'",
        data:JSON.stringify(info),
        contenType:"application/json",
        success:function(addusers){
            addData(info)
        },
        error:function (error){
            console.log(error)
            addData(info)
        }
    })
}