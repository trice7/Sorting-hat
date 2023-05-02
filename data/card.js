export const card = function (obj){ return `
<div class="card mb-3" >
<div class="card-header">${obj.house}</div>
<div class="row g-0">
  <div class="col-md-4">
    <img src="${obj.avatar}" class='portrait' class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${obj.name}</h5>
      <p class="card-text">First Year</p>
      <p class="card-text">House: ${obj.house}</p>
      <button class='card-btn' id="delbtn--${obj.id}">Expel!</button>
    </div>
  </div>
</div>
</div>

`
};
