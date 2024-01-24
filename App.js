

const header = React.createElement('div', {id:"parent"}, 

React.createElement('h1', {id: 'h1tag'}, [
    React.createElement('div', {}, 'newTag'),
    React.createElement('div', {}, 'newTag1')
]));

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log('root', root);
root.render(header);

console.log('after appending heading', root);

// console.log('root', document.getElementById('root'));