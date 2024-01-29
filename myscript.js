// init emailjs
(function(){
    emailjs.init("qP5xofdIk09EzRZL-");
})();

window.onload = () => {
  document.querySelectorAll('input').forEach((e) => {
    e.addEventListener('blur', ($event) => checkInputValidation($event.target))
  })
}

function checkInputValidation(element) {
  !element.value ? element.classList.add('is-invalid') : element.classList.remove('is-invalid');
}

function scrollMainIntoView(){
  const element = document.getElementById('mainSection');
  const offset = 50;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
  // document.getElementById('mainSection').scrollIntoView({behavior:'smooth',block:'start'});
}

function togglePageTwoThree() {
  document.getElementById('inputForm').classList.toggle('show')
  document.getElementById('outputTable').classList.toggle('show')
  scrollMainIntoView()
}

function togglePageOneTwo() {
  document.getElementById('yearSection').classList.toggle('show')
  document.getElementById('inputForm').classList.toggle('show')
  scrollMainIntoView()
}

function sendMail(){
    let userMail = prompt('Please enter your email!')
    let data = {
        from_name:'NYU|STERN TEAM',
        to_email:userMail,
        last_year:'Year:'+ document.getElementById('previousYear').value,
        this_year:'Year:'+ document.getElementById('currentYear').value,
        d4:document.getElementById('d4').innerText,
    }

    Array.from(document.outputForm.elements)
        .filter((e) => e.tagName === "INPUT")
        .forEach(e => data[e.name] = e.value);

    emailjs.send("service_e1vtpkc", "template_u1yjupb", data, 'qP5xofdIk09EzRZL-')
        .then(r=>console.log(r))
        .catch(e=>console.log(e));
}

function fillYearDetail() {
  let validForm = true
  const inputArr = ['previousYear', 'currentYear']
  for (let index = 0; index < inputArr.length; index++) {
    const element = document.getElementById(inputArr[index])
    if (!element.value) {
      validForm = false;
      element.classList.add('is-invalid')
    } else {
      element.classList.remove('is-invalid')
    }
  }
  if (validForm) {
    document.getElementById('validationLabelyear').style.display = 'none'
    setYear()
    togglePageOneTwo();
  } else {
    document.getElementById('validationLabelyear').style.display = 'block'
  }
}

function setYear() {
  document.querySelectorAll('[data-last-year]').forEach(e => {
    e.innerText = "Year: " + document.getElementById('previousYear').value;
  })
  document.querySelectorAll('[data-this-year]').forEach(e => {
    e.innerText = "Year: " + document.getElementById('currentYear').value;
  })
}

function validateForm() {
  let validForm = true;
  const allField = Array.from(document.inputForm.elements).filter((e) => e.tagName === "INPUT")
  for (let index = 0; index < allField.length; index++) {
    if (!allField[index].value) {
      validForm = false;
      allField[index].classList.add('is-invalid')
    } else {
      allField[index].classList.remove('is-invalid')
    }
  }
  return validForm;
}

function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculate() {
  const validattionFlag = validateForm()
  if (validattionFlag) {
    // hiding error message
    document.getElementById('validationLabel').style.display = 'none';
    d24.value = ((+d14.value) * (+d18.value) * (+d19.value)).toFixed(2);
    e24.value = ((+e14.value) * (+e18.value) * (+e19.value)).toFixed(2);
    d25.value = ((+d15.value) * (+d20.value) * (+d21.value)).toFixed(2);
    e25.value = ((+e15.value) * (+e20.value) * (+e21.value)).toFixed(2);
    d57.value = (+d9.value).toFixed(2);
    e57.value = (+e9.value).toFixed(2);
    d58.value = ((+d57.value) * (+d28.value / 100) * (+d10.value / 100)).toFixed(2);
    e58.value = ((+e57.value) * (+e28.value / 100) * (+e10.value / 100)).toFixed(2);
    d59.value = ((+d57.value) * (+d31.value / 100) * (+d10.value / 100)).toFixed(2);
    e59.value = ((+e57.value) * (+e31.value / 100) * (+e10.value / 100)).toFixed(2);
    d60.value = ((+d59.value) - (+d58.value)).toFixed(2);
    e60.value = ((+e59.value) - (+e58.value)).toFixed(2);
    d61.value = ((+d60.value) * (+d39.value)).toFixed(2);
    e61.value = ((+e60.value) * (+e39.value)).toFixed(2);
    d62.value = ((+d60.value) * ((+d24.value) * (+d35.value / 100))).toFixed(2);
    e62.value = ((+e60.value) * ((+e24.value) * (+e35.value / 100))).toFixed(2);
    d65.value = (+d9.value).toFixed(2);
    e65.value = (+e9.value).toFixed(2);
    d66.value = ((+d65.value) * (+d29.value / 100) * (+d11.value / 100)).toFixed(2);
    e66.value = ((+e65.value) * (+e29.value / 100) * (+e11.value / 100)).toFixed(2);
    d67.value = ((+d65.value) * (+d32.value / 100) * (+d11.value / 100)).toFixed(2);
    e67.value = ((+e65.value) * (+e32.value / 100) * (+e11.value / 100)).toFixed(2);
    d68.value = ((+d67.value) - (+d66.value)).toFixed(2);
    e68.value = ((+e67.value) - (+e66.value)).toFixed(2);
    d69.value = ((+d68.value) * (+d40.value)).toFixed(2);
    e69.value = ((+e68.value) * (+e40.value)).toFixed(2);
    d70.value = ((+d68.value) * ((+d36.value / 100) * (+d25.value))).toFixed(2);
    e70.value = ((+e68.value) * ((+e36.value / 100) * (+e25.value))).toFixed(2);
    d72.value = ((+d69.value) + (+d62.value) + (+d61.value) + (+d70.value)).toFixed(2);
    e72.value = ((+e69.value) + (+e62.value) + (+e61.value) + (+e70.value)).toFixed(2);
    d76.value = ((+d9.value) * (+d45.value / 100) * (+d10.value / 100)).toFixed(2);
    e76.value = ((+e9.value) * (+e45.value / 100) * (+e10.value / 100)).toFixed(2);
    d77.value = ((+d76.value) * ((+d44.value / 100) * (+d24.value))).toFixed(2);
    e77.value = ((+e76.value) * ((+e44.value / 100) * (+e24.value))).toFixed(2);
    d80.value = ((+d9.value) * (+d48.value / 100) * (+d11.value / 100)).toFixed(2);
    e80.value = ((+e9.value) * (+e48.value / 100) * (+e11.value / 100)).toFixed(2);
    d81.value = ((+d80.value) * ((+d47.value / 100) * (+d25.value))).toFixed(2);
    e81.value = ((+e80.value) * ((+e47.value / 100) * (+e25.value))).toFixed(2);
    d83.value = ((+d81.value) + (+d77.value)).toFixed(2);
    e83.value = ((+e81.value) + (+e77.value)).toFixed(2);
    d86.value = (((((+d24.value) / (5 * (+d19.value))) * (+d52.value)) * ((+d9.value) * (+d10.value / 100))) + ((((+d25.value) / (7 * (+d21.value))) * (+d52.value)) * ((+d9.value) * (+d11.value / 100)))).toFixed(2);
    e86.value = (((((+e24.value) / (5 * (+e19.value))) * (+e52.value)) * ((+e9.value) * (+e10.value / 100))) + ((((+e25.value) / (7 * (+e21.value))) * (+e52.value)) * ((+e9.value) * (+e11.value / 100)))).toFixed(2);
    d88.value = (+d86.value).toFixed(2);
    e88.value = (+e86.value).toFixed(2);
    //Printing final value to head section. 
    document.getElementById('d4').innerText = numberWithCommas(((+e83.value) + (+e72.value) + (+e88.value)).toFixed(2));
    // toggling page after calculation is successful
    togglePageTwoThree();
  } else {
    document.getElementById('validationLabel').style.display = 'block';
  }
}