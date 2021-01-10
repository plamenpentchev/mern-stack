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
const jsxElem3 = (
    <div key='your-name-3'>
        <p className='hw-your-name'>Johan Pentchev</p>
    </div>
);
const jsxElem4 = (
    <div key='your-name-4'>
        <p className='hw-your-name'>Plamen Pentchev</p>
    </div>
);

const continents = ["Africa", "America", "Asia", "Australia", "Europe"];
const halloContinents = continents.map(continent => `Hallo ${continent}!`);
const messageContinents = halloContinents.map((c, i) => <div key={i}><p>{c}</p></div> );

const elem = React.createElement(
    'div', // type
    {title: 'outer div', className: 'hw-title'}, // attributes
    [   //children
        React.createElement('h1', {key:'title', className:'hw-title'}, 'Hallo React'),
        jsxElem,
        jsxElem2,
        jsxElem3,
        jsxElem4,
        messageContinents
    ]
)
ReactDOM.render(elem, document.getElementById('contents'));