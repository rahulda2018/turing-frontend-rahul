* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

/* Style the header */
.header {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  text-align: center;
  padding: 10px;
}

/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: blue;
}

/* Create three equal columns that floats next to each other */

.column {
  float: left;
  top: 10px;
  bottom: 10px;
  width: 50%;
  padding: 10px;
  text-align: left;
}

.table_payment {
  float: center;
  top: 10px;
  align-self: center;
  bottom: 10px;
  width: 50%;
  padding: 10px;
  text-align: left;
}

.table_payment th {
  padding-bottom: 2px;
  text-align: left;
  font-size: 12px;
  font-style: bold;
  color: darkgray;
}

.column1 {
  float: left;
  width: 15%;
  height: 600px;
  padding: 10px;
  border-right: 1px solid lightgrey;
}

.column2 {
  float: left;
  width: 65%;
  overflow: auto;
  padding: 10px;
  border-right: 1px solid lightgrey;
}

.column3 {
  float: left;
  width: 20%;
  padding: 10px;
  border-right: 2px solid lightgrey;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

.prod-item {
  top: 10px;
  bottom: 10px;
  width: 100%;
  height: 330px;
  padding: 10px;
  border-bottom: 2px solid lightgrey;
}

.prod-item-small {
  top: 5px;
  bottom: 5px;
  width: 90%;
  height: 150px;
  padding: 5px;
  text-decoration-color: maroon;
  border-bottom: 2px solid lightgrey;
}
.column-small {
  float: left;
  top: 5px;
  bottom: 5px;
  width: 50%;
  padding: 10px;
  text-align: center;
  border-right: 1px solid lightgrey;
}

.button {
  background-color: red;
  border: none;
  color: white;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-style: bold;
  margin: 2px 2px;
  border-radius: 30px;
}

.prod_button {
  background-color: red;

  border: none;
  color: white;
  padding: 6px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  font-style: inherit;
  margin: 2px 2px;
  border-radius: 30px;
}

.remove_button {
  background-color: white;
  box-shadow: 2px 2px 2px 2px rgba(247, 0, 0, 0.15);
  border: none;
  color: red;
  padding: 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  font-style: inherit;
  margin: 2px 2px;
  border-radius: 30px;
}

.category-button {
  background-color: white;
  box-shadow: 2px 2px 15px 10px rgba(247, 0, 0, 0.15);
  border: none;
  color: red;
  padding: 6px;
  width: 150px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-style: inherit;
  margin: 2px 2px;
  border-radius: 30px;
}

.search_button {
  background-color: white;
  box-shadow: 2px 2px 15px 10px rgba(247, 0, 0, 0.15);
  border: none;
  color: red;
  padding: 6px;
  width: 90px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-style: inherit;
  margin: 2px 2px;
  border-radius: 30px;
}

.category-text {
  background-color: white;
  box-shadow: 2px 2px 15px 10px rgba(247, 0, 0, 0.15);
  border: none;
  color: red;
  padding: 6px;
  width: 400px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-style: inherit;
  margin: 4px 4px;
  border-radius: 20px;
  margin-top: 10px;
}

.pagebutton {
  background-color: whitesmoke;
  box-shadow: 2px 2px 15px 10px rgba(247, 0, 0, 0.15);
  border: none;
  color: red;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-style: inherit;
  margin: 2px 2px;
  border-radius: 50px;
}

.pagebutton_selected {
  background-color: red;
  border: none;
  color: white;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-style: inherit;
  margin: 2px 2px;
  border-radius: 30px;
}

.button_login {
  background-color: red;
  border: none;
  color: white;
  padding: 10px;
  width: 100px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-style: inherit;
  margin: 2px 2px;
  border-radius: 30px;
}
.required:after {
  content: " *";
  color: red;
}

.textcol_orange {
  color: orange;
}
.textcol_maroon {
  color: maroon;
}

.textcol_white {
  color: white;
}

.button_link {
  background-color: white;
  border: none;
  color: blue;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-style: inherit;
  margin: 2px 2px;
  border-radius: 30px;
}

.form_text {
  background-color: white;
  box-shadow: 2px 2px 2px 2px rgba(255, 0, 0, 0.15);
  border: none;
  padding: 6px;
  width: 250px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-style: inherit;
  margin: 4px 4px;
  margin-top: 10px;
}
.form_text_small {
  float: left;
  background-color: white;
  box-shadow: 2px 2px 2px 2px rgba(255, 0, 0, 0.15);
  border: none;
  padding: 6px;
  width: 100px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-style: inherit;
  margin: 4px 4px;
  margin-top: 10px;
}

.form_text_long {
  float: left;
  background-color: white;
  box-shadow: 2px 2px 2px 2px rgba(255, 0, 0, 0.15);
  border: none;
  padding: 6px;
  width: 320px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-style: inherit;
  margin: 4px 4px;
  margin-top: 10px;
}

.form_textlabel {
  background-color: white;
  border: none;
  padding: 6px;
  width: 250px;
  text-align: right;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-style: inherit;
  margin: 4px 4px;
  margin-top: 10px;
}
.form_textlabel_long {
  background-color: white;
  border: none;
  padding: 6px;
  width: 340px;
  text-align: right;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-style: inherit;
  margin: 4px 4px;
  margin-top: 10px;
}
.form_div {
  background-color: white;
  box-shadow: 2px 2px 10px 10px rgba(255, 0, 0, 0.15);
  border: none;
  color: blue;
  padding: 8px;
  width: 60%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-style: inherit;
  margin: 2px 2px;
  border-radius: 30px;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 400px) {
  width: 100%;
}
