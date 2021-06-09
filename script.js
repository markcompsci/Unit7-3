const INFORM_RESTRICTIONS = document.createElement('p')
document.body.appendChild(INFORM_RESTRICTIONS)

function calculateAge () {
  const AGE = document.getElementById('age').value
  if (AGE >= 17) {
    INFORM_RESTRICTIONS.textContent = 'You can see an R rated movie alone.'
  } else if (AGE >= 13) {
    INFORM_RESTRICTIONS.textContent = 'You can see an PG-13 movie alone.'
  } else if (AGE >= 5) {
    INFORM_RESTRICTIONS.textContent = 'You can see an G or PG movie alone.'
  } else {
    INFORM_RESTRICTIONS.textContent = 'You\'re too young!'
  }
  INFORM_RESTRICTIONS.textContent += ' Thank you for verifying your age.'
}

document.getElementById('age').addEventListener('input', calculateAge)
