import React from 'react';
import PropTypes from 'prop-types';
import { render, unmountComponentAtNode } from 'react-dom';
import ExtendedCard from './ExtendedCard.jsx';
import './Card.css';

let extendedCardShowing = false;

function keyListener(e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
        e.preventDefault();
        document.getElementById('extended-card-close').click();
    }
}

function closeExtendedCard(div) {
    unmountComponentAtNode(document.getElementById('extended-card-container'));
    document.body.removeChild(div);
    document.body.removeEventListener('keydown', keyListener);
    extendedCardShowing = false;
}

function showExtendedCard(id) {
    if (extendedCardShowing) return;
    extendedCardShowing = true;
    const div = document.createElement('div');
    const wrapper = (
        <div className="ExtendedCard-modal">
            <div
                className="ExtendedCard-modal-sandbox"
                role="button"
                tabIndex="0"
                onClick={() => closeExtendedCard(div)}
                onKeyDown={(e) => { if (e.key === 'Escape' || e.key === 'Esc') closeExtendedCard(div); }}
            />
            <div className="ExtendedCard-modal-box rounded w-75 h-auto p-3 pt-0 pb-4 mx-auto">
                <button id="extended-card-close" type="button" className="close" aria-label="Close" onClick={() => closeExtendedCard(div)}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <br />
                <div id="extended-card-container" />
            </div>
        </div>
    );
    render(wrapper, div);
    document.body.insertBefore(div, null);
    render(<ExtendedCard id={id} />, document.getElementById('extended-card-container'));
    document.body.addEventListener('keydown', keyListener);
}

function handleClick(e, id) {
    e.preventDefault();
    showExtendedCard(id);
    return false;
}

function handleKeyPress(e, id) {
    if (e.key === 'Enter') {
        e.preventDefault();
        showExtendedCard(id);
        return false;
    }
    return true;
}

const Card = ({ id, image, name, category, ingredients }) => (
    <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div
            className="card Card"
            onClick={e => handleClick(e, id)}
            onKeyPress={e => handleKeyPress(e, id)}
            role="button"
            tabIndex="0"
        >
            <div className="row"><div className="col-12 Card-image-col"><img className="rounded img-fluid" src={image} alt={`${category} ${name}`} title={`${category} ${name}`} /></div></div>
            <div className="row">
                <div className="card-body text-center col-12">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
                    <p className="card-text d-none d-sm-none d-md-block Card-ingredients">{ingredients}</p>
                </div>
            </div>
        </div>
    </div>
);

Card.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
};

export default Card;
