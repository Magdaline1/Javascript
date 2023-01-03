const notifyByEmail = (email) => {
    return `Email sent to: ${email}`;
  }
  
  const notifyByText = (number) => {
    return `Text sent to: ${number}`;
  }
  
  const notify = (emailOrPhone, notifyFunction) => {
    return notifyFunction(emailOrPhone);
  }
  
  console.log(notify('hello@makers.tech.test', notifyByEmail));
  console.log(notify('+10000000000', notifyByText));