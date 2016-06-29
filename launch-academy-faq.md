Launch Academy is rebuilding its main website in React, and they need your help
to recreate their FAQ accordion in React!

![Launch Academy FAQ 1][launch-academy-faq-1]

## Setup
From your challenges directory, run the following:

```sh
$ et get launch-academy-faq
$ cd launch-academy-faq
$ npm install
$ webpack-dev-server
```

If you go to [localhost:8080][localhost-8080], there will be nothing displayed
on the page and there should be no errors in your console. The data for this
application is found in `src/constants/data.js`.

## Deliverables

1. Your application should start out with all the question tabs closed:

   ![Launch Academy FAQ 1][launch-academy-faq-1]

2. Clicking on a question tab will open it so it shows the answer for the question:

   ![Launch Academy FAQ 2][launch-academy-faq-2]

3. Clicking on a question tab will close any other question tabs that are open.
   For example, if the "What is Launch Academy?" tab is open and we click on the
   "What Languages do you teach? What will I learn?" tab, then our site will
   look like so:

   ![Launch Academy FAQ 3][launch-academy-faq-3]

4. Clicking on an open question tab will close it. For example, if the "What
   Languages do you teach? What will I learn?" tab is open and we click on it,
   then our site will then change to:

   ![Launch Academy FAQ 1][launch-academy-faq-1]

5. At Launch Academy, Jim Bruno is in charge of accepting and rejecting tickets:

   ![Jim][jim]

   Jim rejects tickets where the application does not match the given design.
   Don't let Jim reject your ticket because it lacks styling.

## Pro Tips
* Start by rendering a static version of the site. Then covert the necessary
    stateless component(s) to stateful component(s).

[jim]: https://launchpass-production.s3.amazonaws.com/uploads/user/profile_photo/229/me.jpg
[localhost-8080]: http://localhost:8080
[launch-academy-faq-1]: https://s3.amazonaws.com/horizon-production/images/launch-academy-faq-1.png
[launch-academy-faq-2]: https://s3.amazonaws.com/horizon-production/images/launch-academy-faq-2.png
[launch-academy-faq-3]: https://s3.amazonaws.com/horizon-production/images/launch-academy-faq-3.png
