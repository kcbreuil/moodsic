import React from 'react';

const SignUp = () => {
  return (
    <div>
      <form>
        <label>Full Name</label>
        <input type="name" name="name" placeholder="Full Name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="something@something.com"
        />
        <label>Password</label>
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
};

export default SignUp;
