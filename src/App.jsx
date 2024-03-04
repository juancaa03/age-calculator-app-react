import './App.css'
import Footer from './components/Footer'

function App() {  

  let day = ''
  let month = ''
  let year = ''
  const calculateAge = (e) => {
    e.preventDefault()

    day = document.querySelector('input[placeholder="DD"]').value
    month = document.querySelector('input[placeholder="MM"]').value
    year = document.querySelector('input[placeholder="YYYY"]').value

    if(day === '' || month === '' || year === '') {
      document.getElementById('day-label').style.color = 'hsl(0, 100%, 67%)'
      document.getElementById('month-label').style.color = 'hsl(0, 100%, 67%)'
      document.getElementById('year-label').style.color = 'hsl(0, 100%, 67%)'

      document.querySelector('input[placeholder="DD"]').style.borderColor = 'hsl(0, 100%, 67%)';
      document.querySelector('input[placeholder="MM"]').style.borderColor = 'hsl(0, 100%, 67%)';
      document.querySelector('input[placeholder="YYYY"]').style.borderColor = 'hsl(0, 100%, 67%)';
      return
    }
    if(day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2024) {
      document.getElementById('day-label').style.color = 'hsl(0, 100%, 67%)'
      document.getElementById('month-label').style.color = 'hsl(0, 100%, 67%)'
      document.getElementById('year-label').style.color = 'hsl(0, 100%, 67%)'

      document.querySelector('input[placeholder="DD"]').style.borderColor = 'hsl(0, 100%, 67%)';
      document.querySelector('input[placeholder="MM"]').style.borderColor = 'hsl(0, 100%, 67%)';
      document.querySelector('input[placeholder="YYYY"]').style.borderColor = 'hsl(0, 100%, 67%)';
      return
    }

    let date = new Date()
    let currentDay = date.getDate()
    let currentMonth = date.getMonth() + 1
    let currentYear = date.getFullYear()

    let age = currentYear - year
    let monthAge = currentMonth - month
    let dayAge = currentDay - day

    if (monthAge < 0 || (monthAge === 0 && dayAge < 0)) {
      age--
      monthAge = 12 + monthAge
    }

    if (dayAge < 0) {
      monthAge--
      dayAge = 30 + dayAge
    }

    document.getElementById('res-day').innerHTML = age
    document.getElementById('res-month').innerHTML = monthAge
    document.getElementById('res-year').innerHTML = dayAge
  }

  return (
    <>
      <div className='body-page'>
        <form className='main-page' onSubmit={calculateAge}>
          <section className='input-box'>
            <div className='input-container'>
              <label htmlFor="" id='day-label'>DAY</label>
              <input type="day" placeholder='DD'/>
            </div>

            <div className="input-container">
              <label htmlFor="" id='month-label'>MONTH</label>
              <input type="day" placeholder='MM'/>
            </div>

            <div className="input-container">
              <label htmlFor="" id='year-label'>YEAR</label>
              <input type="year" placeholder='YYYY'/>
            </div>
          </section>
          <div className='decoration'>
            <hr />
            <div className="decoration-img">
              <button className='form-button' type='submit'><img src='.\assets\images\icon-arrow.svg'></img></button>
            </div>
          </div>
          <section className='form-response'>
            <div className="res"><span id='res-day'>--</span> years</div>
            <div className="res"><span id='res-month'>--</span> months</div>
            <div className="res"><span id='res-year'>--</span> days</div>
          </section>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default App
