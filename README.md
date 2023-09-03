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

![Desktop preview](![image]([https://github.com/rafopm/newsletter-sign-up-with-success-message-main/assets/5562967/77133b4f-f3de-4c98-a5a9-99f0db7e4fcc](https://github-production-user-asset-6210df.s3.amazonaws.com/5562967/265288506-77133b4f-f3de-4c98-a5a9-99f0db7e4fcc.png))
)
![Mobile preview](![image]([https://github.com/rafopm/newsletter-sign-up-with-success-message-main/assets/5562967/25525cb9-a025-482b-9390-58eca323ee1f](https://github-production-user-asset-6210df.s3.amazonaws.com/5562967/265288546-25525cb9-a025-482b-9390-58eca323ee1f.png))
)

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

