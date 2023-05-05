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
      <button class='card-btn'  id="expel--${obj.id}" id='remove-student'>Expel!</button>
    </div>
  </div>
</div>
</div>

`
};

export const badCard = function (obj){ return `
<div id="de-card">
    <h4 id="de-wanted">Death Eater</h4>
    <img src="${obj.avatar}" id="de-pic">
    <h5 id="de-name">${obj.name}</h5>
    <p id="de-text">Warning! Extremely dangerous. Approach with caution. Individual is wanted by the Ministry of Magic for crimes agains Wizard-kind. If you have any information please consult your nearest Auror immediately.
    </p>
  </div>

`

}
