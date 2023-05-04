export const card = function (obj){ return `
<div class="card mb-3" id='card-${obj.house}' >
<div class="card-header" id='cheader-${obj.house}'>${obj.house}</div>
<div class="row g-0">
  <div class="col-md-4" id='port-con'>
    <img src="${obj.avatar}" style='height:225px;' id='portrait' id='cavatar-${obj.house}' class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8" id='global-tile' id='tile-${obj.house}'>
    <div class="card-body" id='cbody-${obj.house}'>
      <h5 class="card-title">${obj.name}</h5>
      <img src='${obj.badge}'  id='badge-${obj.house}'>
      <button class='card-btn' id="expel--${obj.id}">Expel!</button>
    </div>
  </div>
</div>
</div>

`
};

export const badCard = function (obj){ return `
<div class="card mb-3" >
<div class="card-header">${obj.house}</div>
<div class="row g-0">
  <div class="col-md-4">
    <img src="${obj.avatar}" class='portrait' class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${obj.name}</h5>
      
      <button class='card-btn' id="kill--${obj.id}">Eliminate!</button>
    </div>
  </div>
</div>
</div>

`

}
