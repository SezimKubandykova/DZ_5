const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur")


const convert = (elem, target, target2) => {
  elem.addEventListener("input", () => {
    const req = new XMLHttpRequest();
    req.open("GET", "data.json");
    req.setRequestHeader("Content-type", "application/json");
    req.send();
    req.addEventListener("load", () => {
      const response = JSON.parse(req.response);
      if (elem === som) {
          target.value = (elem.value / response.usd).toFixed(2)
          target2.value = (elem.value / response.eur).toFixed(2)
      } else if (elem === usd) {
          target.value = (elem.value * response.eur2).toFixed(2)
          target2.value = (elem.value * response.usd).toFixed(2)
      } else {
          target2.value = (elem.value / response.eur2).toFixed(2) 
          target.value = (elem.value * response.eur).toFixed(2)
      }
      // elem.value === "" & (target.value = "") && (target2.value = "")

      // elem.value = "",
      // target2.value = "" 
      // target.value = ""
    
    });
  });
};
  
convert(som, usd, eur);
convert(usd, eur, som);
convert(eur, som, usd);

// const form = document.querySelectorAll('form')

// const postData = (form) => {
//   form.addEventListener('submit', (e) => {
//     e.preventdefault()
//     const request = new XMLHttpRequest();
//     request.open("POST", "server.php");
//     request.setRequestHeader("Content-type", "application/json");

//     const formData = new FormData(form) 

//     const obj = {}

//     formData.forEach((item, i) => {
//       obj[i] = item
//     })
//     const json = JSON.stringify(obj)
//     request.send(json);
//     request.addEventListener("load", () => {
//       if (request.status === 200) {
//         console.log (request.response)
//       } else {
//         console.log("error");
//       }
      
//       const response = JSON.parse(req.response);
//       usd.value = (som.value / response.usd).toFixed(2);
//     });
//   });
// }



  
  