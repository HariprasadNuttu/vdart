
var payloads = [];
const CreateUser = document.querySelector('.create_payload')
CreateUser.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = CreateUser.querySelector('.payload').value
  const password = CreateUser.querySelector('.time_stamp').value
  post('/api', { username, password })
})

const Login = document.querySelector('.Login')
Login.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = Login.querySelector('.username').value
  const password = Login.querySelector('.password').value
  post('/login', { username, password })
    .then(({ status }) => {
      if (status === 200) alert('login success')
      else alert('login failed')
    })
})

function post (path, data) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

function addPayload(){
  const username = CreateUser.querySelector('.payload').value
  const password = CreateUser.querySelector('.time_stamp').value
  console.log(username);
  console.log(password);
}
