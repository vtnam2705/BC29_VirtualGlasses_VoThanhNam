const getID = id => document.getElementById(id);

const renderGlassList = () => {
    const content = dataGlasses.reduce((glass, ele) => {
        // console.log(ele.id);
        glass += `
        <div class="col-md-4 my-4 glassList">
            <img src="${ele.virtualImg}" class="img-fluid" style="cursor: pointer" onclick="addGlass('${ele.id}')">
        </div>
        `
        return glass;
    }, "");
    getID("vglassesList").innerHTML = content;
}

renderGlassList();

const renderLayout = (id) => {
    let content = "";
    dataGlasses.forEach(ele => {
        if (ele.id === id) {
            content += `<img src="${ele.virtualImg}" class="img-fluid addedGlass">`;
        }
    });
    return content;
}

const renderContent = (id) => {
    let content = "";
    dataGlasses.forEach(ele => {
        if (ele.id === id) {
            content += `
            <div>
                <h5>${ele.name} - ${ele.brand} (${ele.color})</h5>
                <span class="price">$${ele.price}</span>
                <p class="mb-0">${ele.description}</p>
            </div>
            `;
        }
    });
    return content;
}

window.addGlass = (id) => {
    getID("glassesInfo").style.display = "block";
    getID("avatar").innerHTML = renderLayout(id);
    getID("glassesInfo").innerHTML = renderContent(id);
}

window.removeGlasses = (isAdd) => {
    let Added = document.getElementsByClassName("addedGlass")[0];
    Added = isAdd ? Added.style.display = "block" : Added.style.display = "none";
}