import { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [user, setUser] = useState(null)
  const [error, setError] = useState('')


  const handlerResult = () => {
    setError('')

    if (!formData.email || !formData.password || !formData.confirmPassword) {
      return setError('fill all inputs')
    }

    if (formData.password !== formData.confirmPassword) {
      return setError('passwords are not matched')
    }

    setUser({
      email: formData.email,
      password: formData.password
    })
  }

  const deleteUser = () => {
    setFormData({
      email: '',
      password: '',
      confirmPassword: ''
    })

    setUser(null)
  }


  return <div className="SignUp">
    <div className="form">
      <input type="email" autoComplete='off' placeholder="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" autoComplete='off' placeholder="password here " onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <input type="password" autoComplete='off' placeholder="password here confirm" onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
      <button onClick={handlerResult}>submit</button>
    </div>

    <div className="result">
      {error ? <h2>{error}</h2> :
        user &&
        <div className="user">
          <ul>
            <li>{user.email}</li>
            <li>{user.password}</li>
          </ul>
          <button onClick={deleteUser}>delete</button>
        </div>}
    </div>
  </div>;
}

export default SignUp;
