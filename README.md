# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![image](https://github.com/rafopm/newsletter-sign-up-with-success-message-main/assets/5562967/73cc4bab-3ac2-443e-abd1-8b2b18b70aaa)

![image](https://github.com/rafopm/newsletter-sign-up-with-success-message-main/assets/5562967/58dd44b5-48cb-4ab8-8273-ff9e269a7cec)


### Links

- Solution URL: [Add solution URL here](https://github.com/rafopm/newsletter-sign-up-with-success-message-main)
- Live Site URL: [Add live site URL here](https://newsletter-sign-up-success.netlify.app/)

## My process

### Built with

- CSS custom properties
- Flexbox
- Desktop-first workflow
- [Next.js](https://nextjs.org/) - React framework

### What I learned

The biggest challenge was the communication between child components.

```html
<div className="">
      {!submitted && <SubscriptionForm onSubmit={handleFormSubmit} />}
      {submitted && (
        <SubscriptionSuccess
          email={email}
          onReturnToForm={handleReturnToForm}
        />
      )}
      </div>
```

## Author

- Website - [Rafael Pampavilca](https://rafopm.netlify.app/m)
- Frontend Mentor - [@rafopm](https://www.frontendmentor.io/profile/rafopm)

