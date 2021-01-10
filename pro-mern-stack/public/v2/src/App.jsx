const jsxElem = (
    <div key='your-name'>
        <p className='hw-your-name'>Sonya Vatchkova</p>
    </div>
);

const jsxElem2 = (
    <div key='your-name-2'>
        <p className='hw-your-name'>Maria Pentchev</p>
    </div>
);

const elem = React.createElement(
    'div', // type
    {title: 'outer div', className: 'hw-title'}, // attributes
    [   //children
        React.createElement('h1', {key:'title', className:'hw-title'}, 'Hallo React'),
        jsxElem,
        jsxElem2
    ]
)
ReactDOM.render(elem, document.getElementById('contents'));