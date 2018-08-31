import React from 'react';

const Navigation = ({ onButtonClick, active }) => {
    const activeStyles = {
        donald: active === "donald" ? "btn-primary" : "btn-light",
        hillary: active === "hillary" ? "btn-primary" : "btn-light",
    }
    return (
        <div className="row mt-3 mb-3">
            <div className="col-6 text-center">
                <button
                    onClick={onButtonClick.bind(Navigation, "donald")}
                    type="button"
                    className={`btn ${activeStyles.donald}`}
                >
                    Donald Trump
                </button>
            </div>
            <div className="col-6 text-center">
                <button
                    onClick={onButtonClick.bind(Navigation, "hillary")}
                    type="button"
                    className={`btn ${activeStyles.hillary}`}
                >
                    Hillary Clinton
                </button>
            </div>
        </div>
    );
};

export default Navigation;