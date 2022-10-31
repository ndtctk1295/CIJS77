import "./App.css";

import React from "react";
function App() {
  return (
    <div className="App">
      <RegisterPage />
    </div>
  );
}

export default App;

// tạo Class
class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      username: "",
      password: "",
      passwordConfirm: "",
      errorMessage: {
        fullname: "",
        username: "",
        password: "",
        passwordConfirm: "",
      },
    };
  }

  onChangeInput = (nameInput, value) => {
    const errorMessage = {
      ...this.state.errorMessage,
    };
    // [^qwertyuiopasdfghjklzxcvbnm]
    // \s có khoảng trắng "&& /\s/.test(this.state.fullname)"
    // \w có chữ cái
    console.log(value);
    console.log(this.state.fullname);
    console.log(this.state.username);
    // console.log(this.state.password);
    // console.log(this.state.passwordConfirm);
    console.log(nameInput);

    // console.log(this.state.username.length);
    // console.log(typeof this.state.username.length);
    // check điều kiện username:
    if (
      (nameInput == "username" && this.state.username.length < 6) ||
      (nameInput == "username" && this.state.username.length > 30)
    ) {
      errorMessage["username"] = "username must be contains 6 to 30 characters";
    } else if (
      nameInput == "username" &&
      /\s/.test(this.state.username) == true
    ) {
      errorMessage["username"] = "username must not have space";
    } else {
      errorMessage["username"] = "";
    }

    // check điều kiện fullname

    if (
      // /\w/i.test(this.state.fullname) == true  && this.state.fullname == value || /\s/i.test(this.state.fullname) && this.state.fullname == value)
      nameInput == "fullname" &&
      /[qwertyuiopasdfghjklzxcvbnm]/.test(this.state.fullname) == true &&
      /\s/.test(this.state.fullname) == true
    ) {
      errorMessage["fullname"] = "";
    } else if (nameInput != "fullname") {
      errorMessage["fullname"] = "";
    } else {
      errorMessage["fullname"] =
        "You must type in your full name and it must be letters from a-z";
    }

    // if (
    //   nameInput == "fullname" &&
    //   /qwertyuiopasdfghjklzxcvbnm/i.this.state.fullname
    // ){
    //   errorMessage{"fullname"} = "";
    // } else {
    //   errorMessage["fullname"] ="Your name must only contains letters form a-z";
    // }
    // check điều kiện password match hay không
    if (nameInput == "passwordConfirm" && this.state.password != value) {
      errorMessage["passwordConfirm"] = "Password unmatched";
    } else {
      errorMessage["passwordConfirm"] = "";
    }

    // check điều kiện password độ dài
    if (
      (nameInput == "password" && this.state.password.length < 8) ||
      (nameInput == "password" && this.state.password.length > 15)
    ) {
      errorMessage["password"] = "Password must be 8 - 15 characters";
    } else {
      errorMessage["password"] = "";
    }

    this.setState({
      ...this.state,
      [nameInput]: value,
      errorMessage: errorMessage,
    });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { errorMessage, fullname, password, username } = this.state;
    if (Object.value(errorMessage).filter((value) => value != "").length > 0) {
      return;
    }
    fetch("https://635d320fcb6cf98e56af3884.mockapi.io/api/v1/users/users", {
      method: "POST",
      body: JSON.stringify({
        user: {
          name: fullname,
          username: username,
          password: password,
        },
      }),
    });
  };

  render() {
    const { errorMessage } = this.state;
    return (
      <>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmitForm}>
          <div>
            <label>Fullname</label>
            <input
              type="text"
              name="fullname"
              onChange={(e) => {
                this.onChangeInput("fullname", e.target.value);
              }}
            />
            {errorMessage.fullname != "" ? (
              <div>{errorMessage.fullname}</div>
            ) : (
              <></>
            )}
          </div>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={(e) => {
                this.onChangeInput("username", e.target.value);
              }}
            />
            {errorMessage.username != "" ? (
              <div>{errorMessage.username}</div>
            ) : (
              <></>
            )}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                this.onChangeInput("password", e.target.value);
              }}
            />
            {errorMessage.password != "" ? (
              <div>{errorMessage.password}</div>
            ) : (
              <></>
            )}
          </div>
          <div>
            <label>Password confirm</label>
            <input
              type="password"
              name="passwordConfirm"
              onChange={(e) => {
                this.onChangeInput("passwordConfirm", e.target.value);
              }}
            />
            {errorMessage.passwordConfirm != "" ? (
              <div>{errorMessage.passwordConfirm}</div>
            ) : (
              <></>
            )}
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </>
    );
  }
}
