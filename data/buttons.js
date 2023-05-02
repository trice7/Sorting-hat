export const filterButtons = `
<button id="btn-all">Show All</button>
<button id="btn-gry">Gryffindor</button>
<button id="btn-rav">Ravenclaw</button>
<button id="btn-huf">Hufflepuff</button>
<button id="btn-sly">Slytherin</button>
`

export const modalStart = `
<button id ='form-init' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-student">
Apply!
</button>
`

export const studentApp = `
<div class="modal fade" id='add-student' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form id="submit-form">
        <div class="mb-3">
          <label for="name" class="form-label">First and last name</label>
          <input type="text" class="form-control" id="name-field">
        </div>
        <div class="mb-3">
          <label for="pic" class="form-label">Link for School ID image</label>
          <input type="text" class="form-control" id="image-field">
        </div>
    
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gender-radio" id="male-radio" value = 'male'>
          <label class="form-check-label" for="flexRadioDefault1">
            Male
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gender-radio" id="female-radio" value = 'female'>
          <label class="form-check-label" for="flexRadioDefault2">
            Female
          </label>
        </div>
        <button type="submit" id="btn-submit" data-bs-dismiss="modal">Submit</button>
      </form>
    </div>
  </div>
</div>
</div>
`
