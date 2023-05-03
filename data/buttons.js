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
export const landing = `
<h5 id="land-header" class="card-header">Welcome to Hogwarts!</h5>
    <div id="init-card" class="card">
      <img class="card-img" src="https://wallpapers.com/images/featured/0f0g45ihwlijl35w.jpg" alt="Card image">
      <div class="card-img-overlay">
        <h5 class='init-title' class="card-title">It's time to get sorted</h5>
        <p class ='land-card' class="card-text">Each student will be assigned to one of four houses. Please form an orderly line in front of the Sorting Hat. Once sorted we will immediately print your school ID.
        </p>
        <p class ='land-card' class="card-text">
          As an aside, there has been an uptick in Death Eater activity in the area. Students are reminded to immediately head to your dorm once sorted. Your prefects will guide you on rules and expectations.
        </p>
        <button id="init-btn">Enter!</button>
      </div>
    </div>
`
