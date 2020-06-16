## Installing

You may download or clone the repository

    git clone https://github.com/headzz/plotGraphic.git

And when you are located at the repository file at your file system just run the command:

    npm install

## How to use

The application may run with the following command

    npm run dev

It will be initialized at:

    http://localhost:3000

If you want you can build and try it on production
Where first you must do

    npm run build

And after that

    npm run start

# Contributing

Feel free to fork and bring pull requests for any changes that are necessary. If it is needed you may talk to me at any platform that I have access. You may want to follow the rules below to make this task easier.

## The Process

1. You may overwrite README.md telling which changes were made that are important like useful components for the interface, if some data structure is important, changes at the server side render and etc.
2. Update the versioning of the project that represents your pull request.
3. You can merge the pull request if another developer reviewed your code.

# Creating the application

The idea while creating this service was to simulate the use of a library which are my components and I tried to keep things simple while using the context API for StateManagement.
At the beginning I really wanted the interceptor to give me full formatted data so I wouldn't need to change it within the application but if it was needed for some other function or even sending back to the server it should pass through format all over again. That is why I decided to treat it only when it was needed to plot the graphic. This was something I wanted to do while server side rendering so my application could have more performance.

The layout was thought about splitting what was the container and visual elements.

Even the Context API was supposed to be used for as simple as it could be for a store of data. But passing the same value for children did not look so clean.

I went with next.js thinking about SEO and to be easier dealing with routes and data fetch.

The 'library' has independent components that may be used just as it is needed. Most of it wasn't made mobile first and the layout breaks on cellphones screens.

The use of recharts was purely because of the time and easiness to use despite having a not so good configuration, like the X Axis works pretty well with number but not so nice with other object and needs treatment.

It went missing the folder for environment setup, now it is just an URL, but as soon as it grows the might be several places for deploying like production or test servers.
Error page for the api is still missing, although the services throw the errors it was not treated.
