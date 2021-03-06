import React, { Component } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import Registration from "./Registration";

import "./../css/Navigation.css";

/**
 * User for Signin,
 * @author Rahul Das Adhikary, rahul.das.adhikary@gmail.com, +91-9880978662
 */
class Signin extends Component {
  state = {
    redirect: false
  };

  /**
   * This will take the control to user registration page when New User is clicked
   */
  userregistraton = () => e => {
    var div = document.createElement("div");
    ReactDOM.render(<Registration />, div);
    document.getElementById("userprofile").childNodes[0].remove();
    document.getElementById("userprofile").appendChild(div);
  };

  /**
   * After Signing the home page will be shown
   */
  renderRedirect = () => {
    if (this.state.redirect) {
      this.setState({
        redirect: false
      });
      return <Redirect to="/home" />;
    }
  };

  /**
   * This he authentication function that happens with backend
   */
  usersignin = event => {
    event.preventDefault();

    let signin_email = document.getElementById("signin-email").value;
    let signin_password = document.getElementById("signin-password").value;

    Axios.post(`https://backendapi.turing.com/customers/login`, {
      email: signin_email,
      password: signin_password
    })
      .then(res => {
        this.setState({
          redirect: true
        });
        //console.log(res.data);
        sessionStorage.setItem("jwtToken", res.data.accessToken);
        sessionStorage.setItem("loggedInUser", res.data.user.name);
        document.getElementById("signinplaceholder").innerText = "Sign Out";
        document.getElementById("usernamemenu").innerText = res.data.user.name;
      })
      .catch(e => {
        let errMesg = e.response.data.error.message;
        console.error("Failed to Signin", errMesg);
        alert(`Failed to Signin. ${errMesg}`);
        return;
      });
  };

  /**
   * Default component renderer
   */
  render() {
    return (
      <div>
        <p />
        <div className="form_div">
          <h3 className="textcol_orange">Signin </h3>
          <table align="center">
            <tbody>
              <tr>
                <td className="required form_textlabel">Email address:</td>
                <td alight="left">
                  <input
                    type="text"
                    id="signin-email"
                    name="signin-email"
                    placeholder="Email address"
                    className="form_text"
                  />
                </td>
              </tr>
              <tr>
                <td className="required form_textlabel">Password:</td>
                <td>
                  <input
                    type="password"
                    id="signin-password"
                    name="signin-password"
                    placeholder="Password"
                    className="form_text"
                  />
                </td>
              </tr>
              <tr>
                <td />
                <td align="left">
                  <input
                    type="checkbox"
                    id="signin-remember"
                    name="signin-remember"
                  />{" "}
                  <b>
                    <small>Remember</small>
                  </b>
                </td>
              </tr>
              <tr>
                <td align="right">
                  <button className="button_link">
                    <b>Forgot password?</b>
                  </button>
                </td>
                <td align="center">
                  <button
                    className="button_link"
                    onClick={this.userregistraton()}
                  >
                    <b>New User!!</b>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div />
          <p />
          <p align="center">
            {this.renderRedirect()}
            <button className="button_login" onClick={this.usersignin}>
              <b>Sign In</b>
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Signin;
