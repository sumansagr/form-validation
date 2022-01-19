const url = 'https://jsonplaceholder.typicode.com/posts'

function run(){
fetch(url, { method: 'GET' }).then((response) => {
    console.log(response);
    return response.json()
}).then((datas) => {
    console.log(datas);
 

    let postsData = "<ul >"
    datas.map((post) => {
        //template literals (ES6)
        postsData += `<li style="font-size: 20px; padding:20px; width: 600px; background-color: #;color: black;border-radius: 10px; margin-bottom: 10px; " ><a herf='#'>Id:-${post.id} <br/> Title:-${post.title}</a></li>`
    })
    postsData += '</ul>'
    const divElement = document.getElementById('id')
    divElement.innerHTML = postsData
}).catch(err => {
    console.log(err);
    console.error(err.message);
})
}run()
function myFunction() {
    let input = document.getElementById('myInput').value;
    let filter = input.toUpperCase();
    let ol = document.getElementById('myOl')
    let li = document.getElementsByTagName('li')

    for (let i = 0; i < li.length; i++) {

        let a = li[i].getElementsByTagName("a")[0];
        let textVal = a.textContent || a.innerText;

        if (textVal.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function asscending() {
    fetch(url, { method: 'GET' }).then((response) => {
        console.log(response);
        return response.json()
    }).then((data) => {
        console.log(data);
        let postsData = "<ul >"
        data.map((post) => {
            //template literals (ES6)
            postsData += `<li style="font-size: 20px; padding:20px; width: 600px; background-color: #;color: black;border-radius: 10px; margin-bottom: 10px; " ><a herf='#'>Id:-${post.id} <br/> Title:-${post.title}</a></li>`
        })
        postsData += '</ul>'
        const divElement = document.getElementById('id')
        divElement.innerHTML = postsData
        myFunction();
        console.log('postsData', postsData);
    }).catch(err => {
        console.log(err);
        console.error(err.message);
    })

}

function descending(){

    fetch(url, { method: 'GET' }).then((response) => {
        console.log(response);
        return response.json()
    }).then((data) => {
        console.log(data);
        let revData=data.reverse()
        let postsData = "<ul>"
        revData.map((post) => {
            //template literals (ES6)
            postsData += `<li style="font-size: 20px; padding:20px; width: 600px; background-color: #;color: black;border-radius: 10px; margin-bottom: 10px; " ><a herf='#'>Id:-${post.id} <br/> Title:-${post.title}</a></li>`
        })
        postsData += '</ul>'
        const divElement = document.getElementById('id')
        divElement.innerHTML = postsData
        myFunction();
        console.log('postsData', postsData);
    }).catch(err => {
        console.log(err);
        console.error(err.message);
    })

}
