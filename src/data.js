// estas funciones son de ejemplo

export const filterData = (data, condition) => {
  return data.filter((element)=>{
    return element.team == condition
  })

  
};
// function filterItems(query) {
//   return fruits.filter(function(el) {
//       return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
//   })
