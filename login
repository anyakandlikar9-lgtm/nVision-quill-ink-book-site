<!DOCTYPE html>
<html>
  <head>
    <title> Quill & Ink</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style/general.css">
    <link rel="stylesheet" href="style/quill.css">
    <link rel="stylesheet" href="style/book.css">
    <link rel="stylesheet" href="style/quill-header.css">
    <link rel="stylesheet" href="style/quill-general.css">
  </head>

  <body>
    
<div class="quill-header">
      <div class="quill-left-section">
        <a href="./home.html" class="header-link">
          <img class="quill-logo"
          src="img/quill-logo.png">
        </a>
      </div>

      <div class="quill-middle-section">
        <input class="search-bar" type="text" placeholder="Search">

        <button class="search-button">
          <img class="search-icon" src="img/search.png">
        </button>
      </div>

      <div class="quill-right-section">
        <a class="order-link header-link" href="./return-order.html">
          <span class="return-text">Returns</span>
          <span class="order-text"> & Orders</span>
        </a>

        <a class="cart-link header-link" href="./checkout-books.html">
          <img class="cart-icon" src="img/cart-empty.png">
          <div class="cart-quantity js-cart-quantity"></div>
          <div class="cart-text"></div>
        </a>
      </div>
    </div>
    <div>
        <form action="home.html" method="post">
      <legend>Sign In</legend>    
  <label for="Sign in Username">Username:</label>
  <input type="text" id="Sign in Username" name="Username"><br><br>
  <label for="Sign in Password">Password:</label>
  <input type="password" id="Sign in Password" name="Password"><br><br>
  <input type="submit" value="Continue">
</form>
<form action="Create Account.html" method="post">
<p>Don't have an account?</p>
<button type="submit" name="action" value="preview">Create an Account</button>
</form>
    </div>
  </body>
