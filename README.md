<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Forms - A Beginner's Guide</title>
</head>
<body>

  <h1>HTML Forms - A Beginner's Guide</h1>

  <p>This guide covers the essential tags and attributes used to create forms in HTML. Forms are used to collect user input and send it to a server for processing.</p>

  <h2>Basic Structure of a Form</h2>

  <p>The <code>&lt;form&gt;</code> tag is the container for all form elements. It requires attributes to specify where and how the form data is sent.</p>

  <pre><code>&lt;form action="URL" method="POST/GET"&gt;
  <!-- Form Elements Go Here -->
&lt;/form&gt;
</code></pre>

  <ul>
    <li><code>action</code>: The URL where the form data will be sent.</li>
    <li><code>method</code>: The HTTP method for sending data. Common values are <code>GET</code> and <code>POST</code>.</li>
  </ul>

  <h2>Common HTML Form Tags</h2>

  <h3>1. Input</h3>
  <p>The <code>&lt;input&gt;</code> tag is used for various input fields like text, email, password, etc. Here are some common types:</p>
  
  <ul>
    <li><code>type="text"</code>: Used for single-line text input.</li>
    <li><code>type="email"</code>: Used for email input; it will validate the input as an email.</li>
    <li><code>type="password"</code>: Masks the input for password fields.</li>
    <li><code>type="number"</code>: Accepts only numbers.</li>
    <li><code>type="submit"</code>: Creates a submit button to send the form data.</li>
  </ul>

  <pre><code>&lt;input type="text" name="username" placeholder="Enter your name"&gt;
&lt;input type="email" name="email" placeholder="Enter your email"&gt;
&lt;input type="password" name="password" placeholder="Enter your password"&gt;
&lt;input type="submit" value="Submit"&gt;
</code></pre>

  <h3>2. Label</h3>
  <p>The <code>&lt;label&gt;</code> tag is used to define a label for input elements, improving form accessibility and usability.</p>
  
  <pre><code>&lt;label for="username"&gt;Username:&lt;/label&gt;
&lt;input type="text" id="username" name="username"&gt;
</code></pre>

  <h3>3. Textarea</h3>
  <p>The <code>&lt;textarea&gt;</code> tag allows users to enter multi-line text. It can be resized by users if needed.</p>
  
  <pre><code>&lt;label for="message"&gt;Message:&lt;/label&gt;
&lt;textarea id="message" name="message" rows="4" cols="50"&gt;&lt;/textarea&gt;
</code></pre>

  <h3>4. Select</h3>
  <p>The <code>&lt;select&gt;</code> tag creates a dropdown list. Inside <code>&lt;select&gt;</code>, use <code>&lt;option&gt;</code> to define the list options.</p>
  
  <pre><code>&lt;label for="country"&gt;Country:&lt;/label&gt;
&lt;select id="country" name="country"&gt;
  &lt;option value="kenya"&gt;Kenya&lt;/option&gt;
  &lt;option value="uganda"&gt;Uganda&lt;/option&gt;
  &lt;option value="tanzania"&gt;Tanzania&lt;/option&gt;
&lt;/select&gt;
</code></pre>

  <h3>5. Checkbox</h3>
  <p>The <code>&lt;input type="checkbox"&gt;</code> tag allows users to select multiple options from a set.</p>
  
  <pre><code>&lt;label&gt;
  &lt;input type="checkbox" name="subscribe" value="newsletter"&gt; Subscribe to newsletter
&lt;/label&gt;
</code></pre>

  <h3>6. Radio Button</h3>
  <p>The <code>&lt;input type="radio"&gt;</code> tag lets users select one option from a set. Each group of radio buttons should share the same <code>name</code> attribute.</p>
  
  <pre><code>&lt;label&gt;
  &lt;input type="radio" name="gender" value="male"&gt; Male
&lt;/label&gt;
&lt;label&gt;
  &lt;input type="radio" name="gender" value="female"&gt; Female
&lt;/label&gt;
</code></pre>

  <h2>Full Example</h2>

  <pre><code>&lt;form action="/submit" method="post"&gt;
  &lt;label for="username"&gt;Username:&lt;/label&gt;
  &lt;input type="text" id="username" name="username"&gt;

  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email"&gt;

  &lt;label for="password"&gt;Password:&lt;/label&gt;
  &lt;input type="password" id="password" name="password"&gt;

  &lt;label for="message"&gt;Message:&lt;/label&gt;
  &lt;textarea id="message" name="message"&gt;&lt;/textarea&gt;

  &lt;label&gt;
    &lt;input type="checkbox" name="subscribe" value="newsletter"&gt; Subscribe to newsletter
  &lt;/label&gt;

  &lt;label&gt;
    &lt;input type="radio" name="gender" value="male"&gt; Male
  &lt;/label&gt;
  &lt;label&gt;
    &lt;input type="radio" name="gender" value="female"&gt; Female
  &lt;/label&gt;

  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</code></pre>

  <h2>Notes</h2>
  <p>Each form element plays a role in gathering specific types of user input. By understanding each element's properties and purposes, you can create effective and accessible forms for web applications.</p>

</body>
</html>
