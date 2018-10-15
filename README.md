# Top 10 Olympic Medals
Lets you resort top performing countries at the Olympics

## Setup
This is a front-end web application, bundled with a NodeJS server.
See details at [Create React App](https://github.com/facebook/create-react-app).

## Usage
No parameters are needed; it sorts gold medals by default.
A working < App /> container is provided.
``` npm run start ```

## Development Notes
This React Medals component is built against a specification, with a few
issues to overcome.
Data comes from a feed from
https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json
Comments are provided in Medals.js for an alternate mock feed, in case
the service fails for you, as it had for me.

The medals spec provided country flags as a sprite of PNGs. This adds
complexity & _hurts_ performance of modern web servers.
I replaced this with crisper, responsive SVGs, with better performance and
public licensing, to conform to GitHub terms, and *your* usage.
SVGs are easily resizable. The exception is Canada, which takes effort, unless
you scale its tag externally.

## Available Scripts

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Supported Browsers

By default, the generated project supports all modern browsers.<br>
Support for Internet Explorer 9, 10, and 11 requires [polyfills](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md).

## Credits
Clipart from [Firkin](https://openclipart.org/user-cliparts/Firkin?page=15)
and http://www.wikipedia.org

