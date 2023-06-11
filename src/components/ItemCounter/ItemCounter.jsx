import { Button } from "react-bootstrap";

export const ItemCounter = ({ stock, onAdd }) => {
    const handleDecreaseCount = () => {
        onAdd((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
    };

    const handleIncreaseCount = () => {
        onAdd((prevCount) => (prevCount < stock ? prevCount + 1 : prevCount));
    };

    return (
        <div>
            <Button
                variant="primary"
                size="sm"
                className="button"
                onClick={handleDecreaseCount}
            >
                -
            </Button>
            <Button
                variant="primary"
                size="sm"
                className="button"
                onClick={handleIncreaseCount}
            >
                +
            </Button>
            Stock disponible: {stock}
        </div>
    );
};