let parent=document.querySelector(".gridcls")
let row=document.querySelector(".row")
let table=document.querySelector("#tblparent")
let url="http://localhost:3000/users"
fetch(url)
.then(response=>
    {
       return response.json()// returns promise
    })
.then(data=>
    {
       //for creating cards
        for (const obj of data) 
        {
           let col=document.createElement('div')
           col.setAttribute('class','col-sm-12 col-md-4 col-lg-4 pt-2 ')

           let card=document.createElement('div')
           card.setAttribute('class','card')

           let close=document.createElement('button')
           let closeIcon=document.createElement('i')
           closeIcon.setAttribute('class',"fas fa-times-circle")
           close.setAttribute('class','btn btn-sm text-danger ms-auto')

           let img=document.createElement('img')
           if(obj.gender=='female')
           {
            img.src='../HandsOn 3/Female1.jpg'
            img.setAttribute('class','w-75 mx-auto ')
           }
           else
           {
            img.src='../HandsOn 3/Male.png'
            img.setAttribute('class','w-75 mx-auto ')
           }

           let cardbody=document.createElement('div')
           cardbody.setAttribute('class','card-body')

           let name=document.createElement('p')
           name.textContent="Name: "
           name.setAttribute('class','d-inline')
           let name1=document.createElement('p')
           name1.textContent=obj.name
           name1.setAttribute('class','d-inline')
           let br1=document.createElement('br')

           let id=document.createElement('p')
           id.textContent="Id: "
           id.setAttribute('class','d-inline')
           let id1=document.createElement('p')
           id1.textContent=obj.id
           id1.setAttribute('class','d-inline ms-2')
           let br2=document.createElement('br')

           let skills=document.createElement('p')
           skills.textContent="Skills: "
           skills.setAttribute('class','d-inline')
           let skills1=document.createElement('p')
           skills1.textContent=obj.skills
           skills1.setAttribute('class','d-inline')
           let br3=document.createElement('br')

           let project=document.createElement('p')
           project.textContent="Project: "
           project.setAttribute('class','d-inline')
           let project1=document.createElement('p')
           project1.textContent=obj.project
           project1.setAttribute('class','d-inline')
           let br4=document.createElement('br')

           let hcm=document.createElement('p')
           hcm.textContent="HCM: "
           hcm.setAttribute('class','d-inline')
           let hcm1=document.createElement('p')
           hcm1.textContent=obj.hcm
           hcm1.setAttribute('class','d-inline')
           let footer=document.createElement('div')
           let btn1=document.createElement('button')
           btn1.setAttribute('class','btn btn-sm  d-block ms-auto ')
           btn1.textContent="Edit"
           let inp1=document.createElement('input')
           inp1.setAttribute('type','text')


            //For replacing and updating of the cards
                btn1.addEventListener('click',()=>
                {
                    if(btn1.textContent=="Edit")
                    {
                        cardbody.replaceChild(inp1,skills1)
                        btn1.textContent="Save"
                    }
                    else
                    {
                        let data1=inp1.value;
                        obj.skills=data1.split(',')
                        skills1.textContent=obj.skills
                        cardbody.replaceChild(skills1,inp1)
                        let a=id1.textContent;
                        fetch(url +'/'+a,
                        {
                            method: 'PATCH',
                            body:JSON.stringify({"skills":obj.skills}),
                            headers:{"Content-Type":"application/json"}
                        })
                        .then(res=>{
                            return res.json()
                        })
                        .then(data=>
                          {
                              console.table(data)
                          })
                        .catch(err=>console.log(err))
                        btn1.textContent="Edit"
                    }
                })
                //for deleting
                close.addEventListener('click',function() 
                {
                    let a=id1.textContent;
                    fetch(url +'/'+a,
                    {
                        method: 'DELETE',
                    })
                    .then(res=>{
                        return res.json()
                    })
                    .then(data=>
                      {
                          console.table(data)
                      })
                    .catch(err=>console.log(err))
                    col.remove()
                })

            //appending child
           row.appendChild(col)
           col.appendChild(card)
           card.appendChild(close)
           close.appendChild(closeIcon)
           card.appendChild(img)
           card.appendChild(cardbody)
           cardbody.appendChild(name)
           cardbody.appendChild(name1)
           cardbody.appendChild(br1)
           cardbody.appendChild(id)
           cardbody.appendChild(id1)
           cardbody.appendChild(br2)
           cardbody.appendChild(skills)
           cardbody.appendChild(skills1)
           cardbody.appendChild(br3)
           cardbody.appendChild(project)
           cardbody.appendChild(project1)
           cardbody.appendChild(br4)
           cardbody.appendChild(hcm)
           cardbody.appendChild(hcm1)
           cardbody.appendChild(footer)
           footer.appendChild(btn1)
        }

        //for creating table
        for (const obj of data) 
        {
           let tbody=document.createElement('tbody')
           let newRow =document.createElement("tr")
           let newData1 =document.createElement("td")
           newData1.textContent=obj.name
           let newData2=document.createElement("td")
           newData2.textContent=obj.id
           let newData3=document.createElement("td")
           newData3.textContent=obj.skills
           let newData4=document.createElement("td")
           newData4.textContent=obj.project
           let newData5=document.createElement("td")
           newData5.textContent=obj.hcm

           let newData6=document.createElement("td")
           let btnGrp=document.createElement('div')
           btnGrp.setAttribute('class','btn-group')
           let editBtn=document.createElement('button')
           let editIcon=document.createElement('i')
           editIcon.setAttribute('class',"fas fa-edit")
           editBtn.setAttribute('class','btn btn-sm text-dark')
           let closeBtn=document.createElement('button')
           let clsIcon=document.createElement('i')
           clsIcon.setAttribute('class',"fas fa-times-circle")
           closeBtn.setAttribute('class','btn btn-sm text-danger')
           let inp1=document.createElement('input')
           inp1.setAttribute('type','text')

           //For replacing and updating the table data
           editBtn.addEventListener('click',()=>
           {
               if(editIcon.getAttribute('class')=="fas fa-edit")
               {
                  newRow.replaceChild(inp1,newData3)
                  editIcon.setAttribute('class',"fas fa-save")
               }
               else
               {
                let data1=inp1.value;
                obj.skills=data1.split(',')
                newData3.textContent=obj.skills
                newRow.replaceChild(newData3,inp1)
                let a=newData2.textContent;
                fetch(url +'/'+a,
                {
                    method: 'PATCH',
                    body:JSON.stringify({"skills":obj.skills}),
                    headers:{"Content-Type":"application/json"}
                })
                .then(res=>{
                    return res.json()
                })
                .then(data=>
                  {
                      console.table(data)
                  })
                .catch(err=>console.log(err))
                editIcon.setAttribute('class',"fas fa-edit")
               }
           })

            //for deleting
            closeBtn.addEventListener('click',function()
            {
                let a=newData2.textContent;
                fetch(url+'/'+a,
                {
                    method: 'DELETE',
                })
                .then(res=>{
                    return res.json()
                })
                .then(data=>
                  {
                      console.table(data)
                  })
                .catch(err=>console.log(err))
                newRow.remove()
            })
          
           //append child
           table.appendChild(tbody)
           tbody.appendChild(newRow)
           newRow.appendChild(newData1)
           newRow.appendChild(newData2)
           newRow.appendChild(newData3)
           newRow.appendChild(newData4)
           newRow.appendChild(newData5)
           newRow.appendChild(newData6)
           newData6.appendChild(btnGrp)
           btnGrp.appendChild(editBtn)
           editBtn.appendChild(editIcon)
           btnGrp.appendChild(closeBtn)
           closeBtn.appendChild(clsIcon)
        }
    })
.catch(err=>
    {
        console.log(err)
    })