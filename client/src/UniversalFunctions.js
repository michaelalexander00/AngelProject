// export const add = (x, y) => {
//     return x + y
// }
// import $ from 'jquery'

export function returnAppInfo() {
  const getAppInfo = localStorage.getItem("appInfo");
  const parsedAppInfo = JSON.parse(getAppInfo);
  return parsedAppInfo
}

export function updateAppInfo(hash) {
  const newAppInfo = returnAppInfo();
  for (var field in hash) {
    newAppInfo[field] = hash[field];
  };
  localStorage.setItem("appInfo",JSON.stringify(newAppInfo));
}

export function randomString() {
  var chars = "0123456789abcdefghiklmnopqrstuvwxyz"; var randomstring = '';
  for (var i = 0; i < 16; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars[rnum];
  }
  return randomstring;
}

function returnMenuChanges()  {
  const menuChange = localStorage.getItem("menuChanges");
  console.log(JSON.parse(menuChange))
  return JSON.parse(menuChange)
}

export const updateItem = (id) => {
  const newArr = returnMenuChanges();
  console.log(newArr)
  if (!newArr.includes(id)) {
    newArr.push(id);
    localStorage.setItem("menuChanges",JSON.stringify(newArr))
  }
}

export function returnResponseHash() {
  if (localStorage.getItem('responseHash')===null||localStorage.getItem('responseHash')===undefined||localStorage.getItem('responseHash')==='') {
    return {}
  } else {
    return JSON.parse(localStorage.getItem('responseHash'))
  }
};

// export function isValid(cID) {
//   if (![$("#"+cID).val(),$("input#"+cID+"field1").val(),$("input#"+cID+"field2").val(),$("input#"+cID+"price1").val(),$("input#"+cID+"price2").val()].includes("")) {
//       console.log($("#"+cID).val());
//       // console.log(iN);
//       // for (let ik = 1; ik  < iN; ik++) {
//       //     console.log("#"+cID+"field"+ik)
//       //     console.log($("input#"+cID+"field"+ik).val())
//       //     console.log($("input#"+cID+"price"+ik).val())
//       //     console.log($("input#"+cID+"default"+ik).is(':checked'))
//       // }
//   } else {console.log("nope")}
// };

export function returnUpdateHash() {
  if (localStorage.getItem('updateHash')===null||localStorage.getItem('updateHash')===undefined||localStorage.getItem('updateHash')==='') {
    return {}
  } else {
    return JSON.parse(localStorage.getItem('updateHash'))
  }
};

export function returnObject(obj) {
  if (typeof obj === "string") {
    return JSON.parse(obj)
  } else {
    return obj
  }
}

export function getSortedHash(inputHash){
  var resultHash = {};
  var keys = Object.keys(inputHash);
  keys.sort(function(a, b) {
    return inputHash[a] - inputHash[b]
  }).forEach(function(k) {
    resultHash[k] = inputHash[k];
  });
  return resultHash;
}

const chooseCategory = event => {
  this.setState({category:event.currentTarget.value})
}

export function returnCategories(location,setState) {
  const nOl = JSON.parse(localStorage.getItem('DashboardHsh'));  const categoryArr = [];
  for (var menu in nOl.locations[location].menus) {
      for (var category in nOl.locations[location].menus[menu]) {
          if (!categoryArr.includes(category)) {
              if (category!=="timeStart"&&category!=="timeEnd") {
                  categoryArr.push(category)
              }
          }
      }
  }
  if (localStorage.getItem("possibleCategories")!==undefined&&JSON.parse(localStorage.getItem("possibleCategories")).length>0) {
      JSON.parse(localStorage.getItem("possibleCategories")).forEach(c=>{
          if (!categoryArr.includes(c.content)) {
              if (c.content!=="timeStart"&&c.content!=="timeEnd") {
                  categoryArr.push(c.content)
              }                    
          }
      })
  }
  const finalArr = categoryArr.map(category=>{
      return(<option value={category} onClick={() => setState({category:category})}>{category}</option>)
  });
  return [finalArr,categoryArr[0]]
}