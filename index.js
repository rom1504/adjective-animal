const adjectiveAnimal=require("adjective-animal");
document.body.innerHTML+=`<ul>${adjectiveAnimal.generateNameList(20).map(e => `<li>${e}</li>`).join("\n")}</ul>`;