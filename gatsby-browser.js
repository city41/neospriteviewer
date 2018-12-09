const ReactDom = require("react-dom");

exports.replaceHydrateFunction = () => {
    return (element, container, callback) => {
        ReactDom.createRoot(container, { hydrate: true }).render(element, callback);
    };
};
